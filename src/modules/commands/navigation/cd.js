import path from 'path';
import throwErrorWhenFileNeverExist from '../../../utils/helpers/throwErrorWhenFileNeverExist.js';
import { t } from '../../../utils/loc/index.js';

async function cd(currentDir, targetDir) {
  if (!targetDir || targetDir === '') return currentDir;
  const from = path.resolve(currentDir);
  const to =
    targetDir === '..'
      ? path.dirname(currentDir)
      : path.isAbsolute(targetDir)
        ? targetDir
        : path.resolve(currentDir, targetDir);

  if (from === to) return currentDir;

  try {
    await throwErrorWhenFileNeverExist(to);
    return to;
  } catch (err) {
    console.error(`${t('something-wrong')}: ${err?.message ?? err}`);
    return currentDir;
  }
}

export default cd;
