const router = require('express').Router();
import { mocktest } from "../controller/mocktestdata";




router.post("/mocktest",mocktest);



module.exports = router;