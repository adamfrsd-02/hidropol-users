const express = require('express'),
    app = express(),
    cors = require('cors'),
    db = require("./app/models"),
    parser = require("body-parser"),
    port = 3002;

//cors allow all origin
const corsOptions = {
    origin: '*'
};

//db connect
const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

db.mongoose.connect(db.url, mongooseConfig)
    .then(() => {
        console.log("Connnected to DB!");
    }).catch(error => {
        console.log("Failed Connect to User DB !");
        console.log(error.message);
    })

//middleware global
app.use(parser.json());
app.use(parser.urlencoded({
    extended: true
}));
app.use(cors(corsOptions));
app.use(express.json());

//define routing
app.get('/', (req, res) => {
    return res.status(200).json({
        message: "Hidropol API: Users"
    });
});


require('./app/router/Routes')(app);

//logging
// app.use((req,res,next) => {
//     res.status(422).send("PAGE NOT FOUND");
//     logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
// });

// console.log(res)

//start server
app.listen(port, () => console.log(`Server for Users start on Localhost at port ${port}`));