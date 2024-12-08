export const isRequired = (value) => value != null;
export const isNotEmptyString = (value) => value !== '';
export const isArray = (value) => Array.isArray(value);
export const isNumber = (value) => typeof value === 'number' && !isNaN(value);