import getFullPath from '../../../utils/helpers/getFullPath.js';
import throwErrorWhenFileNeverExist from '../../../utils/helpers/throwErrorWhenFileNeverExist.js';
import fs from 'node:fs';
import HashTransform from '../../../utils/helpers/hashTransform.js';
import logError from '../../../utils/helpers/logError.js';

async function hash(currentDir, fileName) {
  try {
    const filePath = getFullPath(currentDir, fileName);
    await throwErrorWhenFileNeverExist(filePath);
    const readStream = fs.createReadStream(filePath);
    await new Promise((resolve, reject) => {
      readStream
        .pipe(new HashTransform())
        .on('data', (data) => {
          console.log(data.toString());
        })
        .on('error', (err) => {
          reject(err);
        })
        .on('end', () => {
          resolve();
        });
    }).finally(() => readStream.destroy());
  } catch (err) {
    logError(err);
  }
}

export default hash;
