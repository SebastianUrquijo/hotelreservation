var express = require('express');
var router = express.Router();

let createReservation = require("../controllers/Reservations/createReservation")
let getReservations = require("../controllers/Reservations/getReservations")
let getSingleReservation = require("../controllers/Reservations/getSingleReservation")


router.post("/create",createReservation)
router.get("/",getReservations)
router.get("/:id",getSingleReservation)

module.exports = router;