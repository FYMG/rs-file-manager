import * as fs from 'node:fs';
import { t } from '../../../utils/loc/index.js';
import throwErrorWhenFileNeverExist from '../../../utils/helpers/throwErrorWhenFileNeverExist.js';
import getFullPath from '../../../utils/helpers/getFullPath.js';

async function cat(currentDir, fileName) {
  try {
    const filePath = getFullPath(currentDir, fileName);

    await throwErrorWhenFileNeverExist(filePath);
    const readableStream = fs.createReadStream(filePath, { encoding: 'utf8' });

    await new Promise((resolve, reject) => {
      readableStream
        .on('data', (chunk) => {
          console.log(chunk);
        })
        .on('end', resolve)
        .on('error', reject);
    }).finally(() => {
      readableStream.close();
    });
  } catch (err) {
    console.error(`${t('something-wrong')}: ${err?.message ?? err}`);
  }
}

export default cat;
