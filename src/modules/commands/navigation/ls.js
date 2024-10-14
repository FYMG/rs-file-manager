import * as fs from 'node:fs/promises';
import { t } from '../../../utils/loc/index.js';
import logError from '../../../utils/helpers/logError.js';

async function ls(currentDir) {
  try {
    const files = await fs.readdir(currentDir, { withFileTypes: true });
    const tableData = files.map((file) => ({
      [t('ls-name')]: file.name,
      [t('ls-type')]: file.isDirectory() ? t('ls-directory') : t('ls-file'),
    }));

    console.table(tableData);
  } catch (err) {
    logError(err);
  }
}

export default ls;
