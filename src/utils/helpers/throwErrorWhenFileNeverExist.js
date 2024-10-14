import * as fs from 'node:fs/promises';
import { t } from '../loc/index.js';

async function throwErrorWhenFileNeverExist(filePath) {
  try {
    await fs.access(filePath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error(t('error-fs-operation-failed-never-exist', { filePath }));
    } else {
      throw err;
    }
  }
}

export default throwErrorWhenFileNeverExist;
