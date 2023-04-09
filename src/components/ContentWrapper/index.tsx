import React from 'react';

import styles from './index.module.scss';

type Props = {
  children: React.ReactNode;
};

function ContentWrapper({ children }: Props) {
  return <div className={styles.root}>{children}</div>;
}

export default ContentWrapper;
