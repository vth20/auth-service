import winston from "winston";
import config from "./index";
import DailyRotateFile from 'winston-daily-rotate-file'

interface IPrintfData {
  level: string;
  message: string;
  timestamp?: string;
}

const enumerateErrorFormat = winston.format((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

// log only info
const infoFilter = winston.format((info) => {
  return info.level === "info" ? info : false;
});

const logger = winston.createLogger({
  level: config.ENV === "DEV" ? "debug" : "info",
  format: winston.format.combine(
    enumerateErrorFormat(),
    config.ENV === "DEV"
      ? winston.format.colorize()
      : winston.format.uncolorize(),
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.splat(),
    winston.format.printf(
      ({ level, message, timestamp }: IPrintfData) =>
        `${timestamp} :: ${level} :: ${message}`
    )
  ),
  transports: [
    new DailyRotateFile({
      level: "error",
      dirname: "logs",
      filename: "error-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "3d",
    }),
    new DailyRotateFile({
      level: "info",
      dirname: "logs",
      filename: "info-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "3d",
      format: winston.format.combine(infoFilter())
    }),
    new winston.transports.Console({ stderrLevels: ["error"] }),
  ].filter(Boolean) as winston.transport[],
});

export default logger;