// API base URL
export const BASE_URL = 'https://cbmsservices.herokuapp.com/rest';

// all regex const goes here
export const regx = {
  number: /^\d+$/g,

  name: /^[a-zA-Z0-9_'.\s]+$/g,

  alphaNumeric: /^[a-zA-Z0-9_'.\s]+$/g,

  // @link https://stackoverflow.com/a/16702965
  phone: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/g,

  // @link https://stackoverflow.com/a/46181
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};

// const for draggable elements/layout
export const elements = {
  TEXTBOX: 'TEXTBOX',
  PAGE: 'PAGE',
  LAYOUT_SUB_SECTION: 'LAYOUT_SUB_SECTION',
  LAYOUT_SECTION: 'LAYOUT_SECTION',
  FIELDS: 'FIELDS'
};

// default error msg
export const DEFAULT_ERROR_MSG = {
  empty: 'This is mandatory field',
  invalid: 'Please provide valid inputs'
};

export const MAX_GRID = 12;

export const SUCCESS_COLOR = {
  background: '#66B171',
  text: '#FFFFFF'
};

export const WARNING_COLOR = {
  background: '#fa5353',
  text: '#FFFFFF'
};

export const TOAST_TIME = 3000;
