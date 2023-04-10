import React, { useState } from 'react';

import Container from '../../components/Container';
import PanelContainer from '../../containers/PanelContainer';
import TableContainer from '../../containers/TableContainer';

import styles from './index.module.scss';

function CommonEmployeeBasePage() {
  const [search, setSearch] = useState('');

  return (
    <Container>
      <div className={styles.root}>
        <h1>Общая база сотрудников</h1>
        <PanelContainer setSearch={setSearch} search={search} />
        <TableContainer search={search} />
      </div>
    </Container>
  );
}

export default CommonEmployeeBasePage;
