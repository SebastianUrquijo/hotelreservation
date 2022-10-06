const Reservation = require("../../models/Reservation")
const Room = require("../../models/Room");


const getRooms = async (req, res, next) => {
    try {
        const allRooms = await Room.findAll(
            {include:{
                model:Reservation
            }
            });

        res.status(200).send(allRooms);

    } catch (error) {
        next(error);
    }
}

module.exports = getRooms;