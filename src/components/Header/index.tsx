import React, { memo } from 'react';

import { ButtonArrowLeft, ButtonArrowRight } from '../Button';
import Tabs from '../Tabs';
import useNavHeader from '../../hooks/useNavHeader';
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
          <Tabs />
        </div>
        <UserTab />
      </div>
    </header>
  );
}

export default memo(Header);
