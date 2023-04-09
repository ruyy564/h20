import React from 'react';

import Container from '../../components/Container';

import styles from './index.module.scss';

function AnotherPage() {
  return (
    <Container>
      <div className={styles.root}>
        <h1>Другие страницы</h1>
      </div>
    </Container>
  );
}

export default AnotherPage;
