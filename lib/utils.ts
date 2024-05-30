import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import winston from "winston";

const { combine, timestamp, json } = winston.format;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const errorLogger = winston.createLogger({
  level: "error",
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({
      filename: "logs/error.log",
    }),
  ],
});