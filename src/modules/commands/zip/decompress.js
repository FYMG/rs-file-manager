import getFullPath from '../../../utils/helpers/getFullPath.js';
import throwErrorWhenFileNeverExist from '../../../utils/helpers/throwErrorWhenFileNeverExist.js';
import throwErrorWhenFileExist from '../../../utils/helpers/throwErrorWhenFileExist.js';
import fs from 'node:fs';
import zlib from 'node:zlib';
import { t } from '../../../utils/loc/index.js';
import { pipeline } from 'node:stream/promises';

async function decompress(currentDir, fileName, newName) {
  try {
    const src = getFullPath(currentDir, fileName);
    const dest = getFullPath(currentDir, newName);

    await Promise.all([throwErrorWhenFileNeverExist(src), throwErrorWhenFileExist(dest)]);

    const readStream = fs.createReadStream(src);
    const writeStream = fs.createWriteStream(dest);
    await pipeline(readStream, zlib.createBrotliDecompress(), writeStream);
  } catch (err) {
    console.error(`${t('something-wrong')}: ${err?.message ?? err}`);
  }
}

export default decompress;
