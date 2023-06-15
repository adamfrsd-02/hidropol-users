const {
    check,
    validationResult
} = require("express-validator");

module.exports = {
    loginValidation: [
        check('id')
        .not()
        .isEmpty()
        .withMessage("Username or Email can't be empty!")
        .isLength({
            min: 8
        })
        .withMessage('Username or Email must be at least 8 characters long')
        .trim()
        .escape(),
        check('password')
        .not()
        .isEmpty()
        .withMessage("Password can't be empty!")
        .isLength({
            min: 8
        })
        .withMessage('Password must be at least 8 characters long')
        .trim()
        .escape(),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array()
                });
            }
            next();
        }
    ],

    registerValidation: [
        check('username')
        .not()
        .isEmpty()
        .withMessage("Username can't be empty!")
        .isLength({
            min: 8
        })
        .withMessage('Username must be at least 8 characters long')
        .trim()
        .escape(),
        check('email')
        .not()
        .isEmpty()
        .withMessage("Email can't be empty!")
        .isLength({
            min: 8
        })
        .withMessage('Email must be at least 8 characters long')
        .isEmail()
        .withMessage("It's not an email format!")
        .trim()
        .escape(),
        check('phone')
        .not()
        .isEmpty()
        .withMessage("Phone can't be empty!")
        .isLength({
            min: 11
        })
        .withMessage('Phone number must be at least 11 characters long')
        .isNumeric()
        .withMessage("Phone number format not fullfilled!")
        .trim()
        .escape(),
        check('password')
        .not()
        .isEmpty()
        .withMessage("Password can't be empty!")
        .isLength({
            min: 8
        })
        .withMessage('Password must be at least 8 characters long')
        .trim()
        .escape(),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array()
                });
            }
            next();
        }
    ]
}