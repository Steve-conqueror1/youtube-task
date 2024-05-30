import winston from "winston";

const { combine, timestamp, json } = winston.format;

export const errorLogger = winston.createLogger({
    level: "error",
    format: combine(timestamp(), json()),
    transports: [
        new winston.transports.File({
            filename: "logs/error.log",
        }),
    ],
});