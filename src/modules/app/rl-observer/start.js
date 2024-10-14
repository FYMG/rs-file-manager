import * as readline from 'node:readline';
import CommandExecutor from '../command-executor/command-executor.js';
import * as os from 'node:os';
import exit from '../../commands/navigation/exit.js';
import getUserName from '../../../utils/helpers/getUserName.js';
import { t } from '../../../utils/loc/index.js';

function start() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const executor = new CommandExecutor(os.homedir(), rl);

  const showCurrentDir = () => {
    console.log(
      t('current-directory', {
        dir: executor.currentDir,
      })
    );
  };

  console.log(
    t('welcome-message', {
      username: getUserName(),
    })
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
    exit(rl);
  });
}

export default start;
