import React, { memo } from 'react';

import styles from './index.module.scss';

type Props = {
  src: string;
};

function Avatar({ src }: Props) {
  return <img className={styles.root} src={src} alt="avatar" />;
}

export default memo(Avatar);
