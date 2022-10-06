const Room = require("../../models/Room");

const createRoom = async(req,res,next)=>{
    const {id, room_name, detail, price_per_nigth} = req.body;
    if(!id || !room_name || !detail || !price_per_nigth){return res.status(400).json({msg: "Missing Data"})}

    try {
        const existRoom = await Room.findByPk(id)
        if(existRoom){return res.status(301).json({msg:"Room already exists"})};

        const newRoom = await Room.create({
            id,
            room_name,
            detail,
            price_per_nigth
        })
        if(newRoom){return res.status(201).json({msg:`Room --${room_name}-- created`})}

    } catch (error) {
        next(Error)
    }
}

module.exports = createRoom