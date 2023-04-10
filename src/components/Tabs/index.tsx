import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';

import useTab from '../../hooks/useTab';

import styles from './index.module.scss';

type Content = {
  to: string;
  text: string;
};

type TabProps = {
  to: string;
  text: string;
  rank: number;
  scrollHandler: (del: number) => void;
};

type TapsProps = {
  content: Content[];
};

function Tab({ to, text, rank, scrollHandler }: TabProps) {
  const { className } = useTab({ to, rank, scrollHandler, styles });

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
