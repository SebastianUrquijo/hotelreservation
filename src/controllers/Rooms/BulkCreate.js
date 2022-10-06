const { rooms_list } = require("../../../load_data/rooms_list");
const Room = require("../../models/Room");


const bulkRooms = async (req, res, next) => {

  try {
    const checkDB = await Room.findAll()
    
    if(checkDB.length === 0){
    await Room.bulkCreate(rooms_list);
    const dataDB = await Room.findAll(
        {attributes:['room_name','occupation']}
    )
        return res.status(200).json({msg:"Rooms added",data:dataDB})
    }
    return res.status(400).json({msg:"Array already added"})
  } catch (error) {
    next(error);
  }
};

module.exports = bulkRooms;