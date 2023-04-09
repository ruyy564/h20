import React from 'react';

import { IconSearch } from '../Icon';

import styles from './index.module.scss';

function Search() {
  return (
    <label className={styles.root}>
      <IconSearch />
      <input className={styles.input} type="text" placeholder="Поиск" />
    </label>
  );
}

export default Search;
