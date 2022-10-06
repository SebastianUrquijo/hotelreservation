const Reservation = require("../../models/Reservation");
const ReservedRoom = require("../../models/ReservedRoom");

const getSingleReservation = async (req,res,next)=>{
    const {id} = req.params
    if(!id){return res.status(400).json({msg:"Missing id"})};
    try {
        const getSingleReservation = await Reservation.findByPk(id,{
            include:[{model:ReservedRoom}]
        })
        if(!getSingleReservation){
            return res.status(400).json({msg:"Reservation not found"})
        }else{
            res.status(200).send(getSingleReservation)
        }
    } catch (error) {
        next(error)
    }
}

module.exports = getSingleReservation;