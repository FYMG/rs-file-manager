import throwErrorWhenFileNeverExist from '../../../utils/helpers/throwErrorWhenFileNeverExist.js';
import throwErrorWhenFileExist from '../../../utils/helpers/throwErrorWhenFileExist.js';
import * as fs from 'node:fs';
import { t } from '../../../utils/loc/index.js';
import getFullPath from '../../../utils/helpers/getFullPath.js';

async function cp(currentDir, fileName, newName) {
  try {
    const src = getFullPath(currentDir, fileName);
    const dest = getFullPath(currentDir, newName);
    await Promise.all([throwErrorWhenFileNeverExist(src), throwErrorWhenFileExist(dest)]);
    const readableStream = fs.createReadStream(src);
    const writableStream = fs.createWriteStream(dest);

    await new Promise((resolve, reject) => {
      readableStream.pipe(writableStream).on('finish', resolve).on('error', reject);
    }).finally(() => {
      readableStream.destroy();
      writableStream.destroy();
    });
  } catch (err) {
    console.error(`${t('something-wrong')}: ${err?.message ?? err}`);
  }
}

export default cp;
