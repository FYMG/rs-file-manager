import en from './en.js';

/**
 * @param {string} key
 * @param {Object.<string, string>} args
 * @returns {string}
 */
export function t(key, args = {}) {
  let result = en[key] ?? key;
  if (args) {
    Object.entries(args).forEach(([argKey, argValue]) => {
      result = result.replace(`{{${argKey}}}`, argValue);
    });
  }

  return result;
}
