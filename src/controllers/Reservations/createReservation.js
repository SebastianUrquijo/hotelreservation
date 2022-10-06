const Room = require("../../models/Room");
const Reservation = require("../../models/Reservation");
const ReservedRoom = require("../../models/ReservedRoom");

const createReservation = async(req,res,next)=>{
const {costumer_name,costumer_lastname,payment_method,initial_date,final_date,room_name,phone_number} = req.body

if(!costumer_lastname || !costumer_name || !payment_method || !initial_date || !final_date ||!room_name || !phone_number){return res.status(404).json({msg:"Missing data"})}

const firstDate = new Date(initial_date)
const lastDate = new Date (final_date)

if(firstDate > lastDate || lastDate < new Date() || firstDate < new Date()){return res.status(404).json({msg:"Set correct date"})}

const total_days = ( lastDate - firstDate)/86400000
const arrayDate = (()=>{
    let array = []
    for (let index = 0; index <= total_days; index++) {
        if(index === 0){array.push(firstDate)}
        else{
            let nextDate = new Date(array[index-1].getTime()+86400000)
            array.push(nextDate)
        }
}
return array.map(element => element.toLocaleDateString())
})();

try {
    const findRoom = await Room.findOne({where:{room_name}})
    function coincidences (array1,array2){
        let result = 0
        array1.forEach((element)=>{
            array2.forEach((value)=>{
              if(element === value){result++}
            })
          })
        return result
    }
    
    if(findRoom.occupation && coincidences(arrayDate,findRoom.occupation) > 0){return res.status(300).json({msg:"Dates not avaliable"})}
    
    const updateOccupation = await Room.update({
        occupation: findRoom.occupation ? [...findRoom.occupation,...arrayDate] : arrayDate
    },{where:{room_name}
    })

    
    if(updateOccupation[0] !== 0){
        const checkRoom = await Room.findOne({where:{room_name}})

        const newReservation = await Reservation.create({
            costumer_name,
            costumer_lastname,
            phone_number,
            total_days: total_days + 1,
            total_price: (total_days + 1)* checkRoom.price_per_nigth,
            payment_method,
            initial_date,
            final_date
        })
        
        const newRoom = await ReservedRoom.create({
            room_id : checkRoom.id,
            room_name: checkRoom.room_name,
            detail: checkRoom.detail,
            price_per_nigth: checkRoom.price_per_nigth,
            occupation: arrayDate
        })

        await checkRoom.addReservation(newReservation)
        await newReservation.setReservedroom(newRoom)


        const finalData = await Reservation.findOne({
            include:[{model:ReservedRoom}],
            where:{id:newReservation.id}})

        return res.status(200).json({msg:"Reservation succesfull",data:finalData})
    }
} catch (error) {
    next(error)
}
}

module.exports = createReservation;