// /* eslint no-param-reassign:0, no-useless-escape:0, no-underscore-dangle:0, arrow-body-style:0 */
// import * as Log from './log';

// /**
//  * Manipulate errors to be returned in http response
//  *
//  *
//  * @param {Object|String} error - Error: object or string
//  * @param {Object|String} [error.code] - Error code (optional)
//  * @param {Object|String} [error.message] - Error message (optional)
//  * @param {Object|String} [error.errors] - Error message (optional)
//  * @returns {Object} Returns the error object
//  */
// export const handleError = (error) => {
//   logError(error);

//   if (!(error instanceof Error)) {
//     const has = Object.prototype.hasOwnProperty;
//     if ((has.call(error, 'code') && has.call(error, 'message'))) {
//       return { error: { code: error.code, message: error.message } };
//     }
//     return { error: error.message };
//   }

//   if (!error.errors) {
//     return { error: error.message };
//   }

//   const errorMessages = {};
//   Object.keys(error.errors).forEach((key) => {
//     errorMessages[key] = error.errors[key].message;
//   });

//   return { error: errorMessages };
// };

// /**
//  * Manipulate messages to be returned in http response
//  *
//  * @param {Object} message - Info message
//  * @returns {Object} Returns the message object
//  */
// export const handleMessage = (message => ({ message }));

// /**
//  * Manipulate messages to be returned in http response
//  * @param {Object} data - Data
//  * @returns {Object} Returns the data object
//  */
// export const handleData = (data => ({ data }));


// /**
//  * Print the info message in console
//  * @param {String} message - Info message
//  * @returns {String} Message to be printed in console
//  */
// export const logInfo = (message) => {
//   Log.info(message);
// };

// /**
//  * Print the error message in console
//  * @param {String} error - Error message
//  * @returns {String} Message to be printed in console
//  */
// export const logError = (error) => {
//   Log.error(error);
// };

// /**
//  * Print the debug message in console
//  * @param {String} message - Debug message
//  * @returns {String} Message to be printed in console
//  */
// export const logDebug = (message) => {
//   Log.debug(message);
// };

// /**
//  * Print the warn message in console
//  * @param {String} message - Warn message
//  * @returns {String} Message to be printed in console
//  */
// export const logWarn = (message) => {
//   Log.warn(message);
// };
