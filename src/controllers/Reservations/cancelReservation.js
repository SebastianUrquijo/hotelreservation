const Room = require("../../models/Room");
const Reservation = require("../../models/Reservation");
const ReservedRoom = require("../../models/ReservedRoom");


const cancelReservation = async(req,res,next)=>{
    const {id} = req.params

if(!id){return res.status(400).json({msg:"Missing id"})}

try {
    const findReservation = await Reservation.findByPk(id,{
        include:[{model:ReservedRoom},{model:Room}]
    })

    const resetOccupation = (()=>{
        let array1 = findReservation.room.occupation
        let array2 = findReservation.reservedroom.occupation
        let result = [];
        for (let i = 0; i < array1.length; i++) {
            let equal = false;
            for (let j = 0; j < array2.length; j++) {
                if(array1[i] == array2[j]) 
                equal=true;
    }
   if(!equal)result.push(array1[i]);
    }
    return result
})();

    const updateOccupation = await Room.update({
        occupation: resetOccupation
    },{where:{room_name:findReservation.room.room_name}
    })

    if(updateOccupation[0] !== 0){
        const updateReservation = await Reservation.update({
            status: "cancelled"
        },
            {where:{id}
        })
        if(updateReservation[0] !== 0){
            const finalData = await Room.findByPk(findReservation.room.id,{
                include:[{model:Reservation}]
            })
            res.status(200).json({msg:`Reservation --${id}-- cancelled`,data:finalData})
        }
    }
} catch (error) {
    next(error)
}
}

module.exports = cancelReservation