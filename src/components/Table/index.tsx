import React from 'react';

import { Contact } from '../../entities/contact';
import { STATUS } from '../../constants';
import TableFooter from './components/TableFooter';
import TableBank from './components/TableBank';
import TableDocument from './components/TableDocument';
import TableInfo from './components/TableInfo';
import TableHR from './components/TableHR';
import TableEmployee from './components/TableEmployee';
import useTable from '../../hooks/useTable';
import Loader from '../Loader';

import styles from './index.module.scss';

type Props = {
  editData: Contact[] | null;
  status: STATUS | null;
  errorMessage: string | null;
  count: number;
  search: string;
  isEdit: boolean;
  setEditData: React.Dispatch<React.SetStateAction<Contact[] | null>>;
  setIsEdit: () => void;
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
  isEdit?: boolean;
  changeHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    item: Contact,
    entities?: keyof Contact
  ) => void;
  sortHandler: (e: React.MouseEvent) => void;
};

function Table({
  editData,
  search,
  isEdit,
  status,
  errorMessage,
  count,
  setEditData,
  fetchContacts,
}: Props) {
  const {
    changeHandler,
    sortHandler,
    sort,
    currentPage,
    limit,
    setCurrentPage,
    setLimit,
  } = useTable({ fetchContacts, search, isEdit, setEditData, styles });

  if (count === 0) {
    return <div className={styles.empty}>Нет контактов</div>;
  }

  return (
    <div className={styles.root}>
      <Loader status={status} />
      <div className={styles.wrapper}>
        <TableEmployee
          data={editData}
          changeHandler={changeHandler}
          isEdit={isEdit}
          sortHandler={sortHandler}
          sort={sort}
        />
        <div className={styles.info}>
          <TableInfo
            data={editData}
            sortHandler={sortHandler}
            sort={sort}
            changeHandler={changeHandler}
            isEdit={isEdit}
          />
          <TableBank
            data={editData}
            sortHandler={sortHandler}
            sort={sort}
            changeHandler={changeHandler}
            isEdit={isEdit}
          />
          <TableDocument
            data={editData}
            sortHandler={sortHandler}
            sort={sort}
            changeHandler={changeHandler}
            isEdit={isEdit}
          />
          <TableHR
            data={editData}
            sortHandler={sortHandler}
            sort={sort}
            changeHandler={changeHandler}
            isEdit={isEdit}
          />
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
