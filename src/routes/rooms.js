var express = require('express');
var router = express.Router();

let bulkRooms = require("../controllers/Rooms/BulkCreate")
let getRooms = require("../controllers/Rooms/getRooms")
let getSingleRoom = require("../controllers/Rooms/getSingleRoom")
let createRoom = require("../controllers/Rooms/createRoom")

router.post("/bulk",bulkRooms)
router.get("/",getRooms)
router.get("/:id",getSingleRoom)
router.post("/create",createRoom)

module.exports = router;