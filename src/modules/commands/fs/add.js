import * as fs from 'node:fs/promises';
import { t } from '../../../utils/loc/index.js';
import throwErrorWhenFileExist from '../../../utils/helpers/throwErrorWhenFileExist.js';
import getFullPath from '../../../utils/helpers/getFullPath.js';

async function add(currentDir, fileName) {
  try {
    const filePath = getFullPath(currentDir, fileName);
    await throwErrorWhenFileExist(filePath);
    await fs.writeFile(filePath, '', {
      encoding: 'utf8',
    });
  } catch (err) {
    console.error(`${t('something-wrong')}: ${err?.message ?? err}`);
  }
}

export default add;
