var express = require('express');
var router = express.Router();
const controller=require("../controllers/korisnici-controller")

router.post('/signup', controller.signUp);

module.exports = router;
