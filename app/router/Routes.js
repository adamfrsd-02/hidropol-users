module.exports = app => {
    const users = require("../controllers/UserController");
    var router = require('express').Router();
    const userVal = require("../middleware/UserValidation");
    const log = require("../middleware/logMiddleware");

    //login 
    router.post('/login', log.logger, userVal.loginValidation, users.login);

    //register
    router.post('/register', userVal.registerValidation, users.register);

    //export routing
    app.use('/api/v1/auth', router);
}