import * as fs from 'node:fs/promises';
import { t } from '../../../utils/loc/index.js';
import path from 'path';
import throwErrorWhenFileExist from '../../../utils/helpers/throwErrorWhenFileExist.js';

async function add(currentDir, fileName) {
  try {
    const filePath = path.join(path.resolve(currentDir), fileName);
    await throwErrorWhenFileExist(filePath);
    await fs.writeFile(filePath, '', {
      encoding: 'utf8',
    });
  } catch (err) {
    console.error(`${t('something-wrong')}: ${err?.message ?? err}`);
  }
}

export default add;
