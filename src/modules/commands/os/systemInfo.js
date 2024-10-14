import { t } from '../../../utils/loc/index.js';
import os from 'node:os';

function systemInfo(arg) {
  switch (arg.toLowerCase()) {
    case '--eol':
      console.log(
        t('os-eol', {
          EOL: JSON.stringify(os.EOL),
        })
      );
      break;

    case '--username':
      console.log(
        t('os-username', {
          username: os.userInfo().username,
        })
      );
      break;

    case '--homedir':
      console.log(
        t('os-home-dir', {
          homeDir: os.homedir(),
        })
      );
      break;

    case '--cpus':
      const cpus = os.cpus();
      const tableData = cpus.map((cpu) => ({
        [t('os-cpus-model')]: cpu.model,
        [t('os-cpus-clock-rate')]: (cpu.speed / 1000).toFixed(2),
      }));
      console.log(
        t('os-cpus', {
          cpus: JSON.stringify(cpus.length),
        })
      );
      console.table(tableData);
      break;

    case '--architecture':
      console.log(
        t('os-arch', {
          arch: os.arch(),
        })
      );
      break;

    default:
      console.error(
        t('error-unknown-os-arg', {
          arg: JSON.stringify(arg),
        })
      );
      break;
  }
}

export default systemInfo;
