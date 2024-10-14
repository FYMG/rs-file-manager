import path from 'path';

function getFullPath(currentDir, fileName) {
  return path.isAbsolute(fileName) ? fileName : path.resolve(currentDir, fileName);
}

export default getFullPath;
