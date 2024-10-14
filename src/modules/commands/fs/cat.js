import path from 'path';
import * as fs from 'node:fs';
import { t } from '../../../utils/loc/index.js';
import throwErrorWhenFileNeverExist from '../../../utils/helpers/throwErrorWhenFileNeverExist.js';

async function cat(currentDir, fileName) {
  try {
    const filePath = path.isAbsolute(fileName)
      ? fileName
      : path.resolve(currentDir, fileName);

    await throwErrorWhenFileNeverExist(filePath);
    const readableStream = fs.createReadStream(filePath, { encoding: 'utf8' });

    readableStream.on('data', (chunk) => {
      console.log(chunk);
    });

    readableStream.on('error', (err) => {
      console.error(`${t('something-wrong')}: ${err?.message ?? err}`);
    });
  } catch (err) {
    console.error(`${t('something-wrong')}: ${err?.message ?? err}`);
  }
}

export default cat;
