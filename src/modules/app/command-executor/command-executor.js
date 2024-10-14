import { commands } from '../../../utils/consts.js';
import { t } from '../../../utils/loc/index.js';
import up from '../../commands/navigation/up.js';
import cd from '../../commands/navigation/cd.js';
import ls from '../../commands/navigation/ls.js';
import add from '../../commands/fs/add.js';
import cat from '../../commands/fs/cat.js';
import rn from '../../commands/fs/rn.js';
import cp from '../../commands/fs/cp.js';
import mv from '../../commands/fs/mv.js';
import rm from '../../commands/fs/rm.js';
import systemInfo from '../../commands/os/systemInfo.js';

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
          console.error(t('error-args-missing'));
          break;
        }
        this.currentDir = await cd(this.currentDir, args[0]);
        break;

      case commands.ls:
        await ls(this.currentDir);
        break;

      case commands.add:
        if (!args[0]) {
          console.error(t('error-args-missing'));
          break;
        }
        await add(this.currentDir, args[0]);
        break;

      case commands.cat:
        if (!args[0]) {
          console.error(t('error-args-missing'));
          break;
        }
        await cat(this.currentDir, args[0]);
        break;

      case commands.rn:
        if (!args[0] || !args[1]) {
          console.error(t('error-args-missing'));
          break;
        }
        await rn(this.currentDir, args[0], args[1]);
        break;

      case commands.cp:
        if (!args[0] || !args[1]) {
          console.error(t('error-args-missing'));
          break;
        }
        await cp(this.currentDir, args[0], args[1]);
        break;

      case commands.mv:
        if (!args[0] || !args[1]) {
          console.error(t('error-args-missing'));
          break;
        }
        await mv(this.currentDir, args[0], args[1]);
        break;

      case commands.rm:
        if (!args[0]) {
          console.error(t('error-args-missing'));
          break;
        }
        await rm(this.currentDir, args[0]);
        break;

      case commands.os:
        if (!args[0]) {
          console.error(t('error-args-missing'));
          break;
        }
        systemInfo(args[0]);
        break;

      default:
        console.error(t('unknown-command'));
        break;
    }
  }
}

export default CommandExecutor;
