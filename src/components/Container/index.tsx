import React from 'react';

import Nav from '../Nav';
import Wrapper from '../Wrapper';
import ContentWrapper from '../ContentWrapper';
import Header from '../Header';

import styles from './index.module.scss';

type Props = {
  children: React.ReactNode;
};

function Contaiter({ children }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Nav />
        <Wrapper>
          <Header />
          <ContentWrapper>{children}</ContentWrapper>
        </Wrapper>
      </div>
    </div>
  );
}

export default Contaiter;
