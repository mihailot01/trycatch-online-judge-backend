var express = require('express');
var router = express.Router();
const controller=require("../controllers/zadaci-controller")
const {adminAuth}=require("../auth/jwt");

router.get('/', controller.prikazi);
router.post('/',adminAuth, controller.noviZadatak);


module.exports = router;
