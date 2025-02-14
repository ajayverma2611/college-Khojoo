const router = require('express').Router();
const mocktestdata =  require("../controller/mocktestdata");
const mocktests = require("../controller/mocktests");
const isAuthenticated = require("../middleware/auth");


router.post("/mocktests", mocktests);
router.post("/mocktestdata", mocktestdata);



module.exports = router;