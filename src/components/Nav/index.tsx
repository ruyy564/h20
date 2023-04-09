import React from 'react';

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
  );
}

function NavWrapper() {
  return (
    <div className={styles.root}>
      <Nav />
    </div>
  );
}

export default NavWrapper;
