import * as readline from 'node:readline';
import CommandExecutor from '../command-executor/command-executor.js';
import * as os from 'node:os';
import getUserName from '../../../utils/helpers/getUserName.js';
import { t } from '../../../utils/loc/index.js';
import { colors } from '../../../utils/consts.js';
import getColoredString from '../../../utils/helpers/getColoredString.js';

function start() {
  const username = getUserName();
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: getColoredString('> ', colors.cyan),
  });
  const executor = new CommandExecutor(os.homedir(), rl);

  const showCurrentDir = () => {
    rl.prompt();
    console.log(
      getColoredString(t('current-directory', { dir: executor.currentDir }), colors.cyan)
    );
  };

  console.log(
    getColoredString(
      t('welcome-message', {
        username,
      }),
      colors.magenta
    )
  );
  showCurrentDir();

  rl.on('line', async (line) => {
    const [command, ...args] = line
      .trim()
      .split(' ')
      .filter((arg) => arg !== '');
    await executor.execute(command, args);
    showCurrentDir();
  });
  rl.on('close', () => {
    console.log(getColoredString(t('exit-message', { username }), colors.magenta));
    process.exit(0);
  });
}

export default start;
