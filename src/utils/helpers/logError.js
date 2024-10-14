import { t } from '../loc/index.js';

function logError(err) {
  console.error(`${t('something-wrong')}: ${err?.message ?? err}`);
}

export default logError;
