import React from 'react';

import Container from '../../components/Container';
import Panel from '../../components/Panel';
import Table from '../../components/Table';

import styles from './index.module.scss';

function CommonEmployeeBasePage() {
  return (
    <Container>
      <div className={styles.root}>
        <h1>Общая база сотрудников</h1>
        <Panel />
        <Table />
      </div>
    </Container>
  );
}

export default CommonEmployeeBasePage;
