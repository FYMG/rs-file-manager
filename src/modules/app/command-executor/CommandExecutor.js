import { commands } from '../../../utils/consts.js';
import { t } from '../../../utils/loc/index.js';
import up from '../../commands/navigation/up.js';
import cd from '../../commands/navigation/cd.js';
import ls from '../../commands/navigation/ls.js';

class CommandExecutor {
  /**
   * @param {string} currentDir
   * @param {Interface} rlInterface
   */
  constructor(currentDir, rlInterface) {
    this.rlInterface = rlInterface;
    this.currentDir = currentDir;
  }

  async execute(command, args) {
    switch (command.toLowerCase()) {
      case commands.exit:
        this.rlInterface.close();
        break;
      case commands.up:
        this.currentDir = await up(this.currentDir);
        break;

      case commands.cd:
        if (!args[0]) {
          console.log(t('error-args-missing'));
          break;
        }
        this.currentDir = await cd(this.currentDir, args[0]);
        break;

      case commands.ls:
        await ls(this.currentDir);
        break;

      default:
        console.log(t('unknown-command'));
        break;
    }
  }
}

export default CommandExecutor;
