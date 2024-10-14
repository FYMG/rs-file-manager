import fs from 'node:fs/promises';
import getFullPath from '../../../utils/helpers/getFullPath.js';
import { t } from '../../../utils/loc/index.js';
import throwErrorWhenFileNeverExist from '../../../utils/helpers/throwErrorWhenFileNeverExist.js';

async function rm(currentDir, fileName) {
  try {
    const filePath = getFullPath(currentDir, fileName);
    await throwErrorWhenFileNeverExist(filePath);

    await fs.unlink(filePath);
  } catch (err) {
    console.error(`${t('something-wrong')}: ${err?.message ?? err}`);
  }
}

export default rm;
