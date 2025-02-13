const router = require('express').Router();
const profile = require("../controller/profile");
const updatedprofile = require("../controller/updatedprofile");


router.post("/profile",profile);
router.post("/updateprofile",updatedprofile);


module.exports = router;