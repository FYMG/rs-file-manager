import fs from 'node:fs/promises';
import getFullPath from '../../../utils/helpers/getFullPath.js';
import { t } from '../../../utils/loc/index.js';
import throwErrorWhenFileNeverExist from '../../../utils/helpers/throwErrorWhenFileNeverExist.js';
import getColoredString from '../../../utils/helpers/getColoredString.js';
import { colors } from '../../../utils/consts.js';
import logError from '../../../utils/helpers/logError.js';

async function rm(currentDir, fileName) {
  try {
    const filePath = getFullPath(currentDir, fileName);
    await throwErrorWhenFileNeverExist(filePath);
    await fs.unlink(filePath);
    console.log(getColoredString(t('rm-success', { path: filePath }), colors.green));
  } catch (err) {
    logError(err);
  }
}

export default rm;
