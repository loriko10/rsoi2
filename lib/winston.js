const winston = require('winston');

module.exports = {
    winston: (filename) => (
        winston.createLogger({
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({
                    filename
                })
            ]
        })
    )
};

