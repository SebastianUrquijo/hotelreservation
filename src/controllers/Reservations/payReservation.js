const Reservation = require("../../models/Reservation");
const Room = require("../../models/Room");

const payReservation = async (req,res,next)=>{
const {id} = req.params
if(!id){return res.status(400).json({msg:"Missing id"})}

const findReservation = await Reservation.findByPk(id,{
    include:[{model:Room}]
})
const updateReservation = await Reservation.update({
    status: "paid"
},
    {where:{id}
})

if(updateReservation[0] !== 0){
    const finalData = await Room.findByPk(findReservation.room.id,{
        include:[{model:Reservation}]
    })
    res.status(200).json({msg:`Reservation --${id}-- paid`,data:finalData})
}
}

module.exports = payReservation