const userService = require("../../Services/userService");
const Promise = require("bluebird")
const { SuccessHandler } = require("../../Middlewares/responseHandler");
const ErrorHandler = require("../../Utils/errorHandler");

class UserController {
   
    async  registerController(req, res, next) {
        try {
            const user = await userService.registerService(req.body);
            return SuccessHandler(res, user.msg, 201, user.data);
        } catch (error) {
            return next(new ErrorHandler("Something went wrong during registration.", 500, error));
        }
    }

    async loginController(req, res, next) {
        try {
            const { username, password } = req.body;
            const user = await userService.loginService({ username, password });

            if (!user.success) {
                return res.status(user.status).json({ success: user.success, message: user.msg });
            }

            return SuccessHandler(res, user.msg, user.status, user.data);
        } catch (error) {
            return next(new ErrorHandler("Something went wrong during login.", 500, error));
        }
    }
    

}

       


module.exports = new UserController()
