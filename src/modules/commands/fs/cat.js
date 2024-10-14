import * as fs from 'node:fs';
import { t } from '../../../utils/loc/index.js';
import throwErrorWhenFileNeverExist from '../../../utils/helpers/throwErrorWhenFileNeverExist.js';
import getFullPath from '../../../utils/helpers/getFullPath.js';
import logError from '../../../utils/helpers/logError.js';

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
      readableStream.destroy();
    });
  } catch (err) {
    logError(err);
  }
}

export default cat;
