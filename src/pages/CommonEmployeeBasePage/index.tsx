import React, { useEffect, useState } from 'react';

import Container from '../../components/Container';
import PanelContainer from '../../containers/PanelContainer';
import TableContainer from '../../containers/TableContainer';

import styles from './index.module.scss';
import { Contact } from '../../entities/contact';

type Props = {
  contacts: Contact[] | null;
};

function CommonEmployeeBasePage({ contacts }: Props) {
  const [search, setSearch] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState(contacts);

  useEffect(() => {
    setEditData(contacts);
  }, [contacts]);

  const setEditHandler = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <Container>
      <div className={styles.root}>
        <h1>Общая база сотрудников</h1>
        <PanelContainer
          setSearch={setSearch}
          search={search}
          isEdit={isEdit}
          setIsEdit={setEditHandler}
          editData={editData}
        />
        <TableContainer
          search={search}
          isEdit={isEdit}
          setIsEdit={setEditHandler}
          editData={editData}
          setEditData={setEditData}
        />
      </div>
    </Container>
  );
}

export default CommonEmployeeBasePage;
