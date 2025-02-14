const router = require('express').Router();
const mocktest =  require("../controller/mocktestdata");
const mocktests = require("../controller/mocktests");



router.post("/mocktest",mocktest);

router.post("/mocktestsdata",mocktests);



module.exports = router;