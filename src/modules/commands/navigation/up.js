import path from 'path';
import { t } from '../../../utils/loc/index.js';
import throwErrorWhenFileNeverExist from '../../../utils/helpers/throwErrorWhenFileNeverExist.js';

async function up(currentDir) {
  const from = path.resolve(currentDir);
  const to = path.dirname(from);

  if (from === to) return currentDir;

  try {
    await throwErrorWhenFileNeverExist(to);
    return to;
  } catch {
    console.log(t('something-wrong'));
  }

  return currentDir;
}

export default up;
