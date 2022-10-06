module.exports = function relations(){

const Reservation = require("./models/Reservation.js");
const Room = require("./models/Room.js");
const ReservedRoom = require("./models/ReservedRoom.js");
    
/* Reservation.belongsToMany(Room,{through:"reservation_history"});
Room.belongsToMany(Reservation,{through:"reservation_history"}); */

Room.hasMany(Reservation)
Reservation.belongsTo(Room)

Reservation.hasOne(ReservedRoom)
ReservedRoom.belongsTo(Reservation)

}
