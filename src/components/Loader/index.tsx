import { memo } from 'react';

import { STATUS } from '../../constants';
import getClassNames from '../../helpers/getClassNames';

import styles from './index.module.scss';

type Props = {
  status: STATUS | null;
};

const Loader = memo(({ status }: Props) => {
  return (
    <div
      className={
        status === STATUS.LOADING
          ? getClassNames(styles.root, styles.active)
          : styles.root
      }
    >
      <div className={styles.loader}></div>
    </div>
  );
});

export default Loader;
