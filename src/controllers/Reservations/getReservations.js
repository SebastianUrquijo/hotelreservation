const Reservation = require("../../models/Reservation")
const ReservedRoom = require("../../models/ReservedRoom");


const getReservations = async (req, res, next) => {
    try {
        const allReservations = await Reservation.findAll(
            {include:{
                model:ReservedRoom
            }
            });

        res.status(200).send(allReservations);

    } catch (error) {
        next(error);
    }
}

module.exports = getReservations;