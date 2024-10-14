import getFullPath from '../../../utils/helpers/getFullPath.js';
import throwErrorWhenFileNeverExist from '../../../utils/helpers/throwErrorWhenFileNeverExist.js';
import throwErrorWhenFileExist from '../../../utils/helpers/throwErrorWhenFileExist.js';
import fs from 'node:fs';
import zlib from 'node:zlib';
import { t } from '../../../utils/loc/index.js';
import { pipeline } from 'node:stream/promises';
import { colors } from '../../../utils/consts.js';
import getColoredString from '../../../utils/helpers/getColoredString.js';
import logError from '../../../utils/helpers/logError.js';

async function decompress(currentDir, fileName, newName) {
  try {
    const src = getFullPath(currentDir, fileName);
    const dest = getFullPath(currentDir, newName);

    await Promise.all([throwErrorWhenFileNeverExist(src), throwErrorWhenFileExist(dest)]);

    const readStream = fs.createReadStream(src);
    const writeStream = fs.createWriteStream(dest);
    await pipeline(readStream, zlib.createBrotliDecompress(), writeStream);
    console.log(getColoredString(t('decompress-success', { path: dest }), colors.green));
  } catch (err) {
    logError(err);
  }
}

export default decompress;
