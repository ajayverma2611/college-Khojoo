const router = require('express').Router();
const mocktest =  require("../controller/mocktestdata");




router.post("/mocktest",mocktest);



module.exports = router;