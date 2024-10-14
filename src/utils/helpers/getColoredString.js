import { colors } from '../consts.js';

function getColoredString(string, color) {
  return `${color}${string}${colors.reset}`;
}

export default getColoredString;
