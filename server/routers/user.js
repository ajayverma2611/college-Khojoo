const router = require('express').Router();
const feedback = require('../controller/feedback');
const profile = require("../controller/profile");
const updatedprofile = require("../controller/updatedprofile");


router.post("/profile",profile);
router.post("/updateprofile",updatedprofile);
router.post("/feedbacks", feedback);

module.exports = router;