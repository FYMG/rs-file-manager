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
import hash from '../../commands/hash/hash.js';
import decompress from '../../commands/zip/decompress.js';
import compress from '../../commands/zip/compress.js';

class CommandExecutor {
  #commands = Object.freeze({
    [commands.exit]: {
      args: 0,
      currentDirNeeded: false,
      fn: () => {
        this.rlInterface.close();
      },
    },
    [commands.up]: {
      args: 0,
      currentDirNeeded: true,
      fn: async (currentDir) => (this.currentDir = await up(currentDir)),
    },
    [commands.cd]: {
      args: 1,
      currentDirNeeded: true,
      fn: async (currentDir, ...args) =>
        (this.currentDir = await cd(currentDir, ...args)),
    },
    [commands.ls]: {
      args: 0,
      currentDirNeeded: true,
      fn: ls,
    },
    [commands.add]: {
      args: 1,
      currentDirNeeded: true,
      fn: add,
    },
    [commands.cat]: {
      args: 1,
      currentDirNeeded: true,
      fn: cat,
    },
    [commands.rn]: {
      args: 2,
      currentDirNeeded: true,
      fn: rn,
    },
    [commands.cp]: {
      args: 2,
      currentDirNeeded: true,
      fn: cp,
    },
    [commands.mv]: {
      args: 2,
      currentDirNeeded: true,
      fn: mv,
    },
    [commands.rm]: {
      args: 1,
      currentDirNeeded: true,
      fn: rm,
    },
    [commands.os]: {
      args: 1,
      currentDirNeeded: false,
      fn: systemInfo,
    },
    [commands.hash]: {
      args: 1,
      currentDirNeeded: true,
      fn: hash,
    },

    [commands.decompress]: {
      args: 2,
      currentDirNeeded: true,
      fn: decompress,
    },
    [commands.compress]: {
      args: 2,
      currentDirNeeded: true,
      fn: compress,
    },
  });

  /**
   * @param {string} currentDir
   * @param {Interface} rlInterface
   */
  constructor(currentDir, rlInterface) {
    this.rlInterface = rlInterface;
    this.currentDir = currentDir;
  }

  /**
   * @param {string} command
   * @param {string[]} args
   * @returns {Promise<void>}
   */
  async execute(command, args) {
    const loweredCommand = command.toLowerCase();
    if (loweredCommand in this.#commands) {
      const { args: expectedArgs, currentDirNeeded, fn } = this.#commands[loweredCommand];
      if (args.length !== expectedArgs) {
        console.error(
          t('error-args-count', {
            expected: expectedArgs,
            count: String(args.length),
            command,
          })
        );
        return;
      }

      if (currentDirNeeded) {
        await fn(this.currentDir, ...args);
      } else {
        await fn(...args);
      }
    } else {
      console.error(t('error-unknown-command', { command }));
    }
  }
}

export default CommandExecutor;
