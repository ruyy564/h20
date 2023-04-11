import React, { memo } from 'react';

import {
  IconCalendar,
  IconCard,
  IconDataBase,
  IconDiagram,
  IconInfo,
  IconPeople,
  IconSettings,
  IconLogo,
} from '../Icon';

import styles from './index.module.scss';

function Nav() {
  return (
    <div className={styles.root}>
      <nav className={styles.nav}>
        <IconLogo />
        <IconCalendar />
        <IconCard />
        <IconInfo />
        <IconPeople />
        <IconDataBase />
        <IconDiagram />
        <IconSettings />
      </nav>
    </div>
  );
}

export default memo(Nav);
