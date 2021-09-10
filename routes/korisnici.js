var express = require('express');
var router = express.Router();
const controller=require("../controllers/korisnici-controller")

router.post('/signup', controller.signUp);
router.post('/login', controller.logIn);


module.exports = router;
