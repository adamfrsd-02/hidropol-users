const db = require("../models");
const jwt = require("jsonwebtoken");
const User = db.users;
const bcrypt = require("bcryptjs");

const cryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);

    return bcrypt.hash(password, salt);
}

module.exports = {
    login: async (req, res) => {
        console.log(req.body);
        try {
            const {
                id,
                password
            } = req.body;

            const checkExist = await User.findOne({
                $or: [{
                    email: id
                }, {
                    username: id
                }]
            });

            const user = checkExist;

            if (checkExist.length != 0) {
                if (await bcrypt.compare(password, user.password)) {
                    console.log('just okay')
                    const token = jwt.sign({
                            id: checkExist.id,
                            user: checkExist
                        },
                        'userHidropolX', {
                            expiresIn: '1h'
                        });

                    return res.status(200).json({
                        logged_in: true,
                        bearer_token: token,
                    });

                } else {

                    return res.status(422).json({
                        message: "wrong email/password"
                    })
                }

            } else {
                return res.status(404).json({
                    message: "user not exist!"
                })
            }

        } catch (error) {
            return res.status(500).json({
                message: error.message,
                errors: error
            });
        }
    },
    register: async (req, res) => {
        try {
            const {
                email,
                password,
                phone,
                username
            } = req.body;


            const checkExist = await User.find({
                $or: [{
                    email: email
                }, {
                    username: username
                }]
            });

            if (checkExist.length < 1) {
                const newUser = new User({
                    username: username,
                    email: email,
                    phone: phone,
                    password: await cryptPassword(password)
                });

                const register = await User.create(newUser);

                return res.status(200).json({
                    message: "registered succesfully!",
                    data: register
                });
            } else {
                return res.status(409).json({
                    message: "user already registered!"
                })
            }


        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    }
}