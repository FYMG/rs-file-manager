import * as fs from 'node:fs/promises';
import { t } from '../../../utils/loc/index.js';

async function ls(currentDir) {
  try {
    const files = await fs.readdir(currentDir, { withFileTypes: true });
    const tableData = files.map((file) => ({
      [t('ls-name')]: file.name,
      [t('ls-type')]: file.isDirectory() ? t('ls-directory') : t('ls-file'),
    }));

    console.table(tableData);
  } catch (err) {
    console.error(`${t('something-wrong')}: ${err?.message ?? err}`);
  }
}

export default ls;
