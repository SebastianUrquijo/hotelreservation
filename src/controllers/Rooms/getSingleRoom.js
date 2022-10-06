const Reservation = require("../../models/Reservation");
const Room = require("../../models/Room");

const getSingleRoom = async (req,res,next)=>{
    const {id} = req.params
    if(!id){return res.status(400).json({msg:"Missing id"})};
    try {
        const getSingleRoom = await Room.findByPk(id,{
            include:[{model:Reservation}]
        })
        if(!getSingleRoom){
            return res.status(400).json({msg:"Room not found"})
        }else{
            res.status(200).send(getSingleRoom)
        }
    } catch (error) {
        next(error)
    }
}

module.exports = getSingleRoom;