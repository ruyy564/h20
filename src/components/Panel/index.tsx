import React from 'react';

import Search from '../Search';
import { Button } from '../Button';

import styles from './index.module.scss';

type Props = {
  count: number;
  search: string;
  setSearch: (search: string) => void;
};

function Panel({ count, search, setSearch }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.contact}>
          <span className={styles.contact_num}>{count}</span>
          <span className={styles.contact_text}>Контактов</span>
        </div>
        <Search search={search} setSearch={setSearch} />
      </div>
      <Button onClick={() => {}} text={'Режим редактирования'} />
    </div>
  );
}

export default Panel;
