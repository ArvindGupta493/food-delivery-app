const { check, validationResult } = require('express-validator');

const validationAuth = {
   

    registerValidate: [
        check('name').trim().notEmpty().withMessage('Please enter Name.'),
        check('email').trim().isEmail().withMessage('Please enter a valid Email.'),
        check('username').trim().notEmpty().withMessage('Please enter Username.'),
        check('phone_number').trim().notEmpty().withMessage('Enter your 10 digit mobile number'),
        check('password').trim().notEmpty().isStrongPassword().withMessage('Password must be strong.'),
    ],

    loginValidate: [
        check('username').trim().notEmpty().withMessage('Username is required.'),
        check('password').trim().notEmpty().withMessage('Password is required.'),
    ],
    
    validateLogin: [
        check('uuid')
        .trim()
        .notEmpty().withMessage('uuid is required.')
        .isString()
        .isLength({ min: 2, max: 50 }).withMessage('uuid should be between 2 and 50 characters.'),
        
        // check('email')
        // .trim()
        // .notEmpty().withMessage('Email is required.')
        // .isEmail().withMessage('Invalid email address.'),

        check('login_type')
        .trim()
        .notEmpty().withMessage('Login Type is required.')
    ],  


     isRequestValidate: (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                "ResponseCode": 400,
                "ResponseMessage": errors.array()[0].msg,
                "succeeded": false,
                "ResponseData": {}
            });
        }
        next();
    },
}

module.exports = validationAuth;

