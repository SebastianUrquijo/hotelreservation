var express = require('express');
var router = express.Router();

let createReservation = require("../controllers/Reservations/createReservation")
let getReservations = require("../controllers/Reservations/getReservations")
let getSingleReservation = require("../controllers/Reservations/getSingleReservation")
let editReservation = require("../controllers/Reservations/editReservation")
let cancelReservation = require("../controllers/Reservations/cancelReservation")
let payReservation = require("../controllers/Reservations/payReservation")

router.post("/create",createReservation)
router.get("/",getReservations)
router.get("/:id",getSingleReservation)
router.put("/edit/:id",editReservation)
router.put("/cancel/:id",cancelReservation)
router.put("/pay/:id",payReservation)

module.exports = router;