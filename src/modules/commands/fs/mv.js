import throwErrorWhenFileNeverExist from '../../../utils/helpers/throwErrorWhenFileNeverExist.js';
import throwErrorWhenFileExist from '../../../utils/helpers/throwErrorWhenFileExist.js';
import { t } from '../../../utils/loc/index.js';
import fs from 'node:fs/promises';
import getFullPath from '../../../utils/helpers/getFullPath.js';
import cp from './cp.js';

async function mv(currentDir, fileName, newName) {
  try {
    const src = getFullPath(currentDir, fileName);
    const dest = getFullPath(currentDir, newName);

    await Promise.all([throwErrorWhenFileNeverExist(src), throwErrorWhenFileExist(dest)]);
    await cp(currentDir, fileName, newName);
    await fs.unlink(src);
  } catch (err) {
    console.error(`${t('something-wrong')}: ${err?.message ?? err}`);
  }
}

export default mv;
