import { regx, DEFAULT_ERROR_MSG } from './Const';

/**
 * function to check whether provided value is empty or not
 * it also check for empty array and object
 * @param  {any}  value [value to be checked]
 * @return {Boolean}
 */
const isEmpty = value => (!value ||
  typeof value === 'string' && !value.trim() ||
  Array.isArray(value) && !value.length ||
  value instanceof Object && value.constructor === Object && Object.keys(value).length
);

// common function check value as per regx
const check = (r, v) => (!!v.match(r));

/**
 * function to check provided value is number or not
 * @param {*} value
 */
const isValidNumber = value => check(regx.number, value ? value.toString() : '');

/**
 * function to validate user name
 * @param {String} value [user name]
 * @returns {Boolean}
 */
const isValidName = (value) => {
  if (isEmpty(value)) {
    return false;
  }

  return check(regx.name, value);
};

/**
 * function to validate alphanumeric
 * @param {String} value
 * @returns {Boolean}
 */
const isValidAlphanumeric = (value) => {
  if (isEmpty(value)) {
    return false;
  }

  return check(regx.alphaNumeric, value);
};

/**
 * function to validate phone number
 * @link https://stackoverflow.com/a/16702965
 */
const isValidPhoneNumber = (value) => {
  if (isEmpty(value)) {
    return false;
  }

  return check(regx.phone, value);
};

/**
 * function to validate email
 * @link https://stackoverflow.com/a/46181
 */
const isValidEmail = (value) => {
  if (isEmpty(value)) {
    return false;
  }

  return check(regx.email, value);
};

const verify = {
  isEmpty: (value, errors = {}) => {
    if (isEmpty(value)) {
      return errors.empty || DEFAULT_ERROR_MSG.empty;
    }
    return null;
  },
  onlyName: (value, errors = {}) => {
    if (!isValidName(value)) {
      return errors.name || DEFAULT_ERROR_MSG.invalid;
    }
    return null;
  },
  onlyNumber: (value, errors = {}) => {
    if (!isValidNumber(value)) {
      return errors.number || DEFAULT_ERROR_MSG.invalid;
    }
    return null;
  },
  onlyAlphanumeric: (value, errors = {}) => {
    if (!isValidAlphanumeric(value)) {
      return errors.alphaNumeric || DEFAULT_ERROR_MSG.invalid;
    }
    return null;
  },
  onlyPhone: (value, errors = {}) => {
    if (!isValidPhoneNumber(value)) {
      return errors.phone || DEFAULT_ERROR_MSG.invalid;
    }
    return null;
  },
  onlyEmail: (value, errors = {}) => {
    if (!isValidEmail(value)) {
      return errors.email || DEFAULT_ERROR_MSG.invalid;
    }
    return null;
  },
  name: (value, errors = {}) => {
    if (isEmpty(value)) {
      return errors.empty || DEFAULT_ERROR_MSG.empty;
    } else if (!isValidName(value)) {
      return errors.invalid || DEFAULT_ERROR_MSG.invalid;
    }

    return null;
  },
  phone: (value, errors = {}) => {
    if (isEmpty(value)) {
      return errors.empty || DEFAULT_ERROR_MSG.empty;
    } else if (!isValidPhoneNumber(value)) {
      return errors.invalid || DEFAULT_ERROR_MSG.invalid;
    }

    return null;
  },
  number: (value, errors = {}) => {
    if (isEmpty(value)) {
      return errors.empty || DEFAULT_ERROR_MSG.empty;
    } else if (!isValidNumber(value)) {
      return errors.invalid || DEFAULT_ERROR_MSG.invalid;
    }

    return null;
  }
};

export default verify;
