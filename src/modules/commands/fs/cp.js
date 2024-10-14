import throwErrorWhenFileNeverExist from '../../../utils/helpers/throwErrorWhenFileNeverExist.js';
import throwErrorWhenFileExist from '../../../utils/helpers/throwErrorWhenFileExist.js';
import * as fs from 'node:fs';
import { t } from '../../../utils/loc/index.js';
import getFullPath from '../../../utils/helpers/getFullPath.js';
import { pipeline } from 'node:stream/promises';
import getColoredString from '../../../utils/helpers/getColoredString.js';
import { colors } from '../../../utils/consts.js';
import logError from '../../../utils/helpers/logError.js';

async function cp(currentDir, fileName, newName) {
  try {
    const src = getFullPath(currentDir, fileName);
    const dest = getFullPath(currentDir, newName);
    await Promise.all([throwErrorWhenFileNeverExist(src), throwErrorWhenFileExist(dest)]);
    const readableStream = fs.createReadStream(src);
    const writableStream = fs.createWriteStream(dest);
    await pipeline(readableStream, writableStream);
    console.log(getColoredString(t('cp-success', { src, dest }), colors.green));
  } catch (err) {
    logError(err);
  }
}

export default cp;
