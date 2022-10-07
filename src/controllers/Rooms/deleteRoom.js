const Room = require("../../models/Room");
const Reservation = require("../../models/Reservation");

const editRoom = async (req,res,exit)=>{
    const {id} = req.params
    if(!id){return res.status(400).json({msg: "Missing id"})}

    try {

        const existRoom = await Room.findByPk(id,{
            include:[{model:Reservation}]
        })

        if(existRoom.occupation && existRoom.occupation.length > 0){return res.status(400).json({msg:"First cancel ALL PENDING reservations for this room"})}
        await Room.destroy({
            where:{id}
        })

        return res.status(200).json({msg:`Room --${id}-- deleted`})
        
    } catch (error) {
        next(error)
    }
}


module.exports = editRoom;