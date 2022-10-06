var express = require('express');
var router = express.Router();

let roomsRoute = require("./rooms")
let reservationsRoute = require("./reservations")

router.use("/rooms",roomsRoute)
router.use("/reservations",reservationsRoute)


router.get("/",(req,res)=>{
    res.status(200).send("Server Working")
  })


module.exports = router;