import * as readline from 'node:readline';
import CommandExecutor from '../command-executor/command-executor.js';
import * as os from 'node:os';
import getUserName from '../../../utils/helpers/getUserName.js';
import { t } from '../../../utils/loc/index.js';
import { colors } from '../../../utils/consts.js';

function start() {
  const username = getUserName();
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: `${colors.cyan}>${colors.reset} `,
  });
  const executor = new CommandExecutor(os.homedir(), rl);

  const showCurrentDir = () => {
    rl.prompt();
    console.log(
      `${colors.cyan}${t('current-directory', { dir: executor.currentDir })}${colors.reset}`
    );
  };

  console.log(
    `${colors.green}${t('welcome-message', {
      username,
    })}${colors.reset}`
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
    console.log(`${colors.magenta}${t('exit-message', { username })}${colors.reset}`);
    process.exit(0);
  });
}

export default start;
