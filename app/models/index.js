const dbConfig = require("../config/dbConfig");
const mongoose = require("mongoose");

module.exports = {
    mongoose,
    url: dbConfig.url,
    users: require("./UserModel")(mongoose)
}