const router = require('express').Router();
const mocktestdata =  require("../controller/mocktestdata");
const mocktests = require("../controller/mocktests");
const isAuthenticated = require("../middleware/auth");
const addMockToUser = require("../controller/AttemptingMocks");
const addAttemptedMockToUser = require("../controller/AttemptedMocks");


router.post("/mocktests", isAuthenticated, mocktests);
router.post("/mocktestdata",isAuthenticated, mocktestdata);
router.post("/addMocktoUser",isAuthenticated, addMockToUser);
router.post("/addAttemptedMocktoUser",isAuthenticated, addAttemptedMockToUser);


module.exports = router;