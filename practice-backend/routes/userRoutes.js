const express = require("express")
const router = express.Router();
const validate = require("../Middlewares/validation");

const userController = require("../Controllers/user/userController");

// ============================= ROUTES ==================================== // 
router.post("/register",validate.registerValidate, validate.isRequestValidate, userController.registerController);
router.post('/login', validate.loginValidate, validate.isRequestValidate, userController.loginController);

module.exports = router
 

    
    