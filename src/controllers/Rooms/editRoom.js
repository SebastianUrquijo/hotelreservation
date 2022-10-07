const Room = require("../../models/Room");
const Reservation = require("../../models/Reservation");

const editRoom = async (req,res,exit)=>{
    const {id} = req.params
    const {room_name, detail, price_per_nigth} = req.body;
    if(!id || !room_name || !detail || !price_per_nigth){return res.status(400).json({msg: "Missing Data"})}

    try {

        const updateRoom = await Room.update({
            room_name,
            detail,
            price_per_nigth
        },{
            where:{id}
        })

        if(updateRoom[0] !== 0){
            const checkRoom = await Room.findByPk(id,{
                include:[{model:Reservation}]
            })
    
            return res.status(200).json({msg:`Room --${id}-- edited`,data:checkRoom})
        }
    } catch (error) {
        next(error)
    }
}


module.exports = editRoom;