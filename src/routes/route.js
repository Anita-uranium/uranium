const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/appointment/sessions", CowinController.getByDistrictId)
router.get("/weather", CowinController.weather)
router.get("/cities",CowinController.getSortedCities)
router.post("/memes",CowinController.memes)
module.exports = router;