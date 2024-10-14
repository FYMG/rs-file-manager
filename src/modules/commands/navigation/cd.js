import path from 'path';
import throwErrorWhenFileNeverExist from '../../../utils/helpers/throwErrorWhenFileNeverExist.js';
import getFullPath from '../../../utils/helpers/getFullPath.js';

async function cd(currentDir, targetDir) {
  if (!targetDir || targetDir === '') return currentDir;

  try {
    const from = path.resolve(currentDir);
    const to =
      targetDir === '..' ? path.dirname(currentDir) : getFullPath(currentDir, targetDir);

    if (from === to) return currentDir;
    await throwErrorWhenFileNeverExist(to);
    return to;
  } catch (err) {
    return currentDir;
  }
}

export default cd;
