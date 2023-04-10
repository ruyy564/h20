import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Styles } from '../constants';
import getClassNames from '../helpers/getClassNames';

type Props = {
  to: string;
  styles: Styles;
  rank: number;
  scrollHandler: (del: number) => void;
};

const useTab = ({ to, scrollHandler, styles, rank }: Props) => {
  const { pathname } = useLocation();
  const className =
    pathname === to ? getClassNames(styles.active, styles.tab) : styles.tab;

  useEffect(() => {
    if (pathname === to) {
      scrollHandler(rank);
    }
  }, [pathname, rank, scrollHandler, to]);

  return { className };
};

export default useTab;
