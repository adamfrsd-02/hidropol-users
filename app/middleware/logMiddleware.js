// const logger = require("../utils/logger");

// module.exports = {
//     logger: (req, res, next) => {
//         // console.log(err);
//         res.on('finish', () => {
//             const statusCode = res.statusCode;

//             //check statusCode 
//             switch (statusCode) {
//                 case 200:
//                     logger.info(`200 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
//                     break;

//                 case 400:
//                     logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
//                     break;

//                 case 404:
//                     logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
//                     break;

//                 case 422:
//                     logger.error(`422 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
//                     break;

//                 case 500:
//                     logger.error(`500 || - ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
//                     break;

//                 default:
//                     break;
//             }
//         });
//         return next();
//     }
// }