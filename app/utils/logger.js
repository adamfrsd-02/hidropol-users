// const {createLogger, format, transports} = require("winston");

// //winston config
// const logger = createLogger({
//     'transports': [
//         new transports.File({
//             filename: '../logs/app.log'
//         })
//     ],
//     level: "debug",
//     format: format.combine(
//         format.label({
//             label: `Label🏷️`
//         }),
//         format.timestamp({
//             format: 'MMM-DD-YYYY HH:mm:ss'
//         }),
//         format.printf(info => `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`),
//     )
// });

// module.exports = logger;

