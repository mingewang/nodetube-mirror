/** UNFINISHED **/
/* eslint-disable no-unused-vars */

const winston = require('winston');
const {format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if(process.env.NODE_ENV !== 'production'){
  logger.add(new transports.Console({
    format: format.simple()
  }));
}

winston.loggers.add('category2', {
  level: 'info',
  // format: winston.format.json(),
  format: combine(
    label({ label: 'custom label!' }),
    timestamp(),
    prettyPrint()
  ),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new transports.Console(),
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' })
  ]
});


const options = {
  from: new Date() - (24 * 60 * 60 * 1000),
  until: new Date(),
  limit: 10,
  start: 0,
  order: 'desc',
  fields: ['message']
};
