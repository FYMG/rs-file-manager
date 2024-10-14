import * as fs from 'node:fs/promises';
import throwErrorWhenFileExist from '../../../utils/helpers/throwErrorWhenFileExist.js';
import throwErrorWhenFileNeverExist from '../../../utils/helpers/throwErrorWhenFileNeverExist.js';
import { t } from '../../../utils/loc/index.js';
import getFullPath from '../../../utils/helpers/getFullPath.js';

async function rn(currentDir, fileName, newName) {
  try {
    const src = getFullPath(currentDir, fileName);
    const dest = getFullPath(currentDir, newName);
    await Promise.all([throwErrorWhenFileNeverExist(src), throwErrorWhenFileExist(dest)]);
    await fs.rename(src, dest);
  } catch (err) {
    console.error(`${t('something-wrong')}: ${err?.message ?? err}`);
  }
}
export default rn;