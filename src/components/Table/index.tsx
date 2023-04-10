import React, { useState, useEffect } from 'react';

import { Contact } from '../../entities/contact';
import { ORDER, STATUS } from '../../constants';
import TableFooter from './components/TableFooter';
import TableBank from './components/TableBank';
import TableDocument from './components/TableDocument';
import TableInfo from './components/TableInfo';
import TableHR from './components/TableHR';
import TableEmployee from './components/TableEmployee';
import makeOrderASC from './helpers/makeOrderASC';
import makeOrderDESC from './helpers/makeOrderDESC';

import styles from './index.module.scss';

type Props = {
  contacts: Contact[] | null;
  status: STATUS | null;
  errorMessage: string | null;
  count: number;
  search: string;
  fetchContacts: (
    page: number,
    limit: number,
    sort: string,
    order: string,
    q: string
  ) => void;
};

export type TabelDataProps = {
  data: Contact[] | null;
  sort: string;
  sortHandler: (
    e: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>
  ) => void;
};

function Table({
  contacts,
  search,
  status,
  errorMessage,
  count,
  fetchContacts,
}: Props) {
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [sort, setSort] = useState('');
  const [order, setOrder] = useState(ORDER.ASC);

  useEffect(() => {
    fetchContacts(currentPage + 1, limit, sort, order, search);
  }, [limit, currentPage, sort, order, fetchContacts, search]);

  useEffect(() => {
    setCurrentPage(0);
  }, [limit]);

  if (count === 0) {
    return <div className={styles.empty}>Нет контактов</div>;
  }

  const sortHandler = (e: React.MouseEvent) => {
    const elem = e.currentTarget;
    const valueSort = elem.getAttribute('data-sorting');
    const isSortASC = elem.classList.contains(styles.is_sortASC);

    if (sort === valueSort) {
      if (isSortASC) {
        setOrder(ORDER.DESC);
        makeOrderDESC(elem);
      } else {
        setOrder(ORDER.ASC);
        makeOrderASC(elem);
      }
    } else {
      setSort(valueSort || '');
      setOrder(ORDER.DESC);
      makeOrderDESC(elem);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <TableEmployee data={contacts} sortHandler={sortHandler} sort={sort} />
        <div className={styles.info}>
          <TableInfo data={contacts} sortHandler={sortHandler} sort={sort} />
          <TableBank data={contacts} sortHandler={sortHandler} sort={sort} />
          <TableDocument
            data={contacts}
            sortHandler={sortHandler}
            sort={sort}
          />
          <TableHR data={contacts} sortHandler={sortHandler} sort={sort} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <TableFooter
          count={count}
          currentPage={currentPage}
          limit={limit}
          setCurrentPage={setCurrentPage}
          setLimit={setLimit}
        />
      </div>
    </div>
  );
}

export default Table;
