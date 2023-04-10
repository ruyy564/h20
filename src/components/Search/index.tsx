import React from 'react';

import { IconSearch } from '../Icon';

import styles from './index.module.scss';

type Props = {
  search: string;
  setSearch: (search: string) => void;
};

function Search({ search, setSearch }: Props) {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <label className={styles.root}>
      <IconSearch />
      <input
        className={styles.input}
        value={search}
        type="text"
        placeholder="Поиск"
        onChange={onChangeHandler}
      />
    </label>
  );
}

export default Search;
