// /*
//   Module dependencies
//  */
// import chalk from 'chalk';
// import moment from 'moment';

// import { logger } from '../../config/log-config';

// // Enable colors
// chalk.enabled = true;

// /**
//  *  Formatted moment
//  *
//  * @returns {Date} - Returns the formatted date
//  * */
// const getFormattedData = () => (moment().format('DD-MM-YYYY HH:mm:ss'));

// /**
//  *
//  * @param msg
//  */
// export const info = (msg) => {
//   if (process.env.NODE_ENV === 'development') {
//     const formattedMsg = chalk.bold.white(`${getFormattedData()} [INFO] ${msg}\n`);
//     process.stdout.write(formattedMsg);
//   } else {
//     logger.info(msg);
//   }
// };

// /**
//  *
//  * @param msg
//  */
// export const debug = (msg) => {
//   if (process.env.NODE_ENV === 'development') {
//     const formattedMsg = chalk.bold.blue(`${getFormattedData()} [DEBUG] ${msg}\n`);
//     process.stdout.write(formattedMsg);
//   } else {
//     logger.info(msg);
//   }
// };

// /**
//  *
//  * @param msg
//  */
// export const warn = (msg) => {
//   const formattedMsg = chalk.bold.yellow(`${getFormattedData()} [WARN] ${msg}\n`);
//   process.stdout.write(formattedMsg);
// };

// /**
//  *
//  * @param msg
//  */
// export const error = (msg) => {
//   //if (process.env.NODE_ENV === 'development') {
//   const errMsg = typeof msg === 'object' ? JSON.stringify(msg) : msg;
//   const formattedMsg = chalk.bold.red(`${getFormattedData()} [ERROR] ${errMsg}\n`);
//   process.stdout.write(formattedMsg);
//   // }
//   // else {
//   //   logger.error(msg);
//   // }
// };
