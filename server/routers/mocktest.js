const router = require('express').Router();
const mocktestdata =  require("../controller/mocktestdata");
const mocktests = require("../controller/mocktests");
const isAuthenticated = require("../middleware/auth");
const addMockToUser = require("../controller/AttemptingMocks");
const addAttemptedMockToUser = require("../controller/AttemptedMocks");


router.post("/mocktests", mocktests);
router.post("/mocktestdata", mocktestdata);
router.post("/addMocktoUser", addMockToUser);
router.post("/addAttemptedMocktoUser", addAttemptedMockToUser);


module.exports = router;