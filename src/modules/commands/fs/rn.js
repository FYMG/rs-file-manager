import * as fs from 'node:fs/promises';
import throwErrorWhenFileExist from '../../../utils/helpers/throwErrorWhenFileExist.js';
import throwErrorWhenFileNeverExist from '../../../utils/helpers/throwErrorWhenFileNeverExist.js';
import { t } from '../../../utils/loc/index.js';
import getFullPath from '../../../utils/helpers/getFullPath.js';
import getColoredString from '../../../utils/helpers/getColoredString.js';
import { colors } from '../../../utils/consts.js';
import logError from '../../../utils/helpers/logError.js';

async function rn(currentDir, fileName, newName) {
  try {
    const src = getFullPath(currentDir, fileName);
    const dest = getFullPath(currentDir, newName);
    await Promise.all([throwErrorWhenFileNeverExist(src), throwErrorWhenFileExist(dest)]);
    await fs.rename(src, dest);
    console.log(getColoredString(t('rn-success', { src, dest }), colors.green));
  } catch (err) {
    logError(err);
  }
}
export default rn;
