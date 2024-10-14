import * as fs from 'node:fs/promises';
import { t } from '../loc/index.js';

async function throwErrorWhenFileExist(filePath) {
  try {
    await fs.access(filePath);
    throw new Error(t('error-fs-operation-failed-exists', { filePath }));
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }
  }
}

export default throwErrorWhenFileExist;
