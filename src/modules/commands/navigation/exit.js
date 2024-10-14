import getUserName from '../../../utils/helpers/getUserName.js';
import { t } from '../../../utils/loc/index.js';

/**
 * @param {Interface} rlInterface
 */
function exit(rlInterface) {
  const username = getUserName();
  console.log(
    t('exit-message', {
      username,
    })
  );

  rlInterface.close();
  process.exit(0);
}

export default exit;
