import * as fs from 'node:fs/promises';
import { t } from '../../../utils/loc/index.js';
import throwErrorWhenFileExist from '../../../utils/helpers/throwErrorWhenFileExist.js';
import getFullPath from '../../../utils/helpers/getFullPath.js';
import { colors } from '../../../utils/consts.js';
import getColoredString from '../../../utils/helpers/getColoredString.js';
import logError from '../../../utils/helpers/logError.js';

async function add(currentDir, fileName) {
  try {
    const filePath = getFullPath(currentDir, fileName);
    await throwErrorWhenFileExist(filePath);
    await fs.writeFile(filePath, '', {
      encoding: 'utf8',
    });
    console.log(getColoredString(t('add-success', { path: filePath }), colors.green));
  } catch (err) {
    logError(err);
  }
}

export default add;
