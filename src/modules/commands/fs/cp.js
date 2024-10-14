import path from 'path';
import throwErrorWhenFileNeverExist from '../../../utils/helpers/throwErrorWhenFileNeverExist.js';
import throwErrorWhenFileExist from '../../../utils/helpers/throwErrorWhenFileExist.js';
import * as fs from 'node:fs';
import { t } from '../../../utils/loc/index.js';

async function cp(currentDir, fileName, newName) {
  try {
    const src = path.isAbsolute(fileName) ? fileName : path.resolve(currentDir, fileName);
    const dest = path.isAbsolute(newName) ? newName : path.resolve(currentDir, newName);
    await Promise.all([throwErrorWhenFileNeverExist(src), throwErrorWhenFileExist(dest)]);
    const readableStream = fs.createReadStream(src);
    const writableStream = fs.createWriteStream(dest);

    readableStream.pipe(writableStream);

    readableStream.on('error', (err) => {
      console.error(`${t('something-wrong')}: ${err?.message ?? err}`);
    });

    writableStream.on('error', (err) => {
      console.error(`${t('something-wrong')}: ${err?.message ?? err}`);
    });
  } catch (err) {
    console.error(`${t('something-wrong')}: ${err?.message ?? err}`);
  }
}

export default cp;
