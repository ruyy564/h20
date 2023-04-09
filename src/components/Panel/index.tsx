import React from 'react';

import Search from '../Search';
import { Button } from '../Button';

import styles from './index.module.scss';

function Panel() {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.contact}>
          <span className={styles.contact_num}>2346</span>
          <span className={styles.contact_text}>Контактов</span>
        </div>
        <Search />
      </div>
      <Button onClick={() => {}} text={'Режим редактирования'} />
    </div>
  );
}

export default Panel;
