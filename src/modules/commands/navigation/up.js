import path from 'path';
import throwErrorWhenFileNeverExist from '../../../utils/helpers/throwErrorWhenFileNeverExist.js';
import logError from '../../../utils/helpers/logError.js';

async function up(currentDir) {
  try {
    const from = path.resolve(currentDir);
    const to = path.dirname(from);

    if (from === to) return currentDir;
    await throwErrorWhenFileNeverExist(to);
    return to;
  } catch (err) {
    logError(err);
  }

  return currentDir;
}

export default up;
