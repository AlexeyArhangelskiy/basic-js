const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  // Check if date is an instance of Date and not a "fake" date
  if (!(date instanceof Date) || Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Invalid date!');
  }

  // Check if the required date methods are present and are functions
  const requiredDateMethods = ['getMonth', 'getFullYear', 'getDate', 'getHours', 'getMinutes', 'getSeconds', 'getMilliseconds', 'getDay'];

  if (!requiredDateMethods.every(method => typeof date[method] === 'function')) {
    throw new Error('Invalid date!');
  }

  // Check if the date object is a "fake" date
  if (date.toString() !== Object.prototype.toString.call(new Date())) {
    throw new Error('Invalid date!');
  }
  const month = date.getMonth();
  if (month >= 2 && month <= 4) {
    return 'spring';
  } else if (month >= 5 && month <= 7) {
    return 'summer';
  } else if (month >= 8 && month <= 10) {
    return 'autumn';
  } else {
    return 'winter';
  }
}

module.exports = {
  getSeason
};
