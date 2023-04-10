import React from 'react';

import { ButtonArrowLeft, ButtonArrowRight } from '../Button';
import Tabs from '../Tabs';
import useNavHeader, { content } from '../../hooks/useNavHeader';
import UserTab from '../UserTab';

import styles from './index.module.scss';

function Header() {
  const { onClickLeftHandler, onClickRightHandler } = useNavHeader();

  return (
    <header className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.tabs}>
          <div className={styles.btn_group}>
            <ButtonArrowLeft onClick={onClickLeftHandler} />
            <ButtonArrowRight onClick={onClickRightHandler} />
          </div>
          <Tabs content={content} />
        </div>
        <UserTab />
      </div>
    </header>
  );
}

export default Header;
