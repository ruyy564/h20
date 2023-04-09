import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import getClassNames from '../../helpers/getClassNames';

import styles from './index.module.scss';

type TabProps = {
  to: string;
  text: string;
  rank: number;
  scrollHandler: (del: number) => void;
};

type Content = {
  to: string;
  text: string;
};

type TapsProps = {
  content: Content[];
};

function Tab({ to, text, rank, scrollHandler }: TabProps) {
  const { pathname } = useLocation();
  const className =
    pathname === to ? getClassNames(styles.active, styles.tab) : styles.tab;

  useEffect(() => {
    if (pathname === to) {
      scrollHandler(rank);
    }
  }, [pathname, rank, scrollHandler, to]);

  return (
    <NavLink to={to} className={className}>
      {text}
    </NavLink>
  );
}

function Tabs({ content }: TapsProps) {
  const ref = useRef<HTMLDivElement>(null);

  const scrollHandler = (rank: number) => {
    if (ref.current) {
      ref.current.scrollLeft =
        (ref.current.scrollWidth / content.length - 40) * rank;
    }
  };

  return (
    <div className={styles.root} ref={ref}>
      {content.map((item, index) => (
        <Tab
          key={index}
          to={item.to}
          text={item.text}
          scrollHandler={scrollHandler}
          rank={index}
        />
      ))}
    </div>
  );
}

export default Tabs;
