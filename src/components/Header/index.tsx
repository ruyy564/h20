import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { ButtonArrowLeft, ButtonArrowRight } from '../Button';
import Tabs from '../Tabs';
import {
  ROUTE_TO_CALENDAR,
  ROUTE_TO_CARD,
  ROUTE_TO_COMMON_EMPLOYEE_BASE_PAGE,
  ROUTE_TO_DATA_BASE,
  ROUTE_TO_DIAGRAMM,
  ROUTE_TO_INFO,
  ROUTE_TO_SETTINGS,
} from '../../route/constants';
import UserTab from '../UserTab';

import styles from './index.module.scss';

const content = [
  {
    to: ROUTE_TO_CALENDAR,
    text: 'Календарь сотрудников',
  },
  {
    to: ROUTE_TO_CARD,
    text: 'Карта сотрудников',
  },
  {
    to: ROUTE_TO_INFO,
    text: 'База Анкет сотрудников',
  },
  {
    to: ROUTE_TO_COMMON_EMPLOYEE_BASE_PAGE,
    text: 'Общая база сотрудников',
  },
  {
    to: ROUTE_TO_DATA_BASE,
    text: 'База сотрудников',
  },
  {
    to: ROUTE_TO_DIAGRAMM,
    text: 'Диаграмма сотрудников',
  },
  {
    to: ROUTE_TO_SETTINGS,
    text: 'Настройки сотрудников',
  },
];

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClickRightHandler = () => {
    for (let i = 0; i < content.length - 1; i++) {
      if (content[i].to === pathname) {
        navigate(content[i + 1].to);
        break;
      }
    }
  };

  const onClickLeftHandler = () => {
    for (let i = 1; i < content.length; i++) {
      if (content[i].to === pathname) {
        navigate(content[i - 1].to);
        break;
      }
    }
  };

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
