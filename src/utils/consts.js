const userNameKey = '--username';

const commands = {
  exit: '.exit',
  up: 'up',
  cd: 'cd',
  ls: 'ls',
  add: 'add',
  cat: 'cat',
  rn: 'rn',
  cp: 'cp',
  mv: 'mv',
  rm: 'rm',
  os: 'os',
  hash: 'hash',
  decompress: 'decompress',
  compress: 'compress',
};

const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
};

export { userNameKey, commands, colors };
