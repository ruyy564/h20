import React, { useRef, useCallback, memo } from 'react';
import { NavLink } from 'react-router-dom';

import { content } from '../../hooks/useNavHeader';
import useTab from '../../hooks/useTab';

import styles from './index.module.scss';

type TabProps = {
  to: string;
  text: string;
  rank: number;
  scrollHandler: (del: number) => void;
};

const Tab = memo(({ to, text, rank, scrollHandler }: TabProps) => {
  const { className } = useTab({ to, rank, scrollHandler, styles });

  return (
    <NavLink to={to} className={className}>
      {text}
    </NavLink>
  );
});

const Tabs = memo(() => {
  const ref = useRef<HTMLDivElement>(null);

  const scrollHandler = useCallback((rank: number) => {
    if (ref.current) {
      ref.current.scrollLeft =
        (ref.current.scrollWidth / content.length - 40) * rank;
    }
  }, []);

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
});

export default Tabs;
