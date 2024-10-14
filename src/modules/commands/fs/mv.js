import throwErrorWhenFileNeverExist from '../../../utils/helpers/throwErrorWhenFileNeverExist.js';
import throwErrorWhenFileExist from '../../../utils/helpers/throwErrorWhenFileExist.js';
import { t } from '../../../utils/loc/index.js';
import fs from 'node:fs';
import getFullPath from '../../../utils/helpers/getFullPath.js';
import { pipeline } from 'node:stream/promises';
import getColoredString from '../../../utils/helpers/getColoredString.js';
import { colors } from '../../../utils/consts.js';
import logError from '../../../utils/helpers/logError.js';

async function mv(currentDir, fileName, newName) {
  try {
    const src = getFullPath(currentDir, fileName);
    const dest = getFullPath(currentDir, newName);
    await Promise.all([throwErrorWhenFileNeverExist(src), throwErrorWhenFileExist(dest)]);
    const readableStream = fs.createReadStream(src);
    const writableStream = fs.createWriteStream(dest);
    await pipeline(readableStream, writableStream);
    await fs.promises.unlink(src);
    console.log(getColoredString(t('mv-success', { src, dest }), colors.green));
  } catch (err) {
    logError(err);
  }
}

export default mv;
