import getArgs from './getArgs.js';
import { userNameKey } from '../consts.js';
import { t } from '../loc/index.js';

function getUserName() {
  return getArgs()[userNameKey] ?? t('default-username');
}

export default getUserName;
