import React from 'react';
import ReactPaginate from 'react-paginate';

import { IconArrowLeft, IconArrowRight } from '../Icon';
import styles from './index.module.scss';

type Props = {
  currentPage: number;
  countPages: number;
  setCurrentPage: (page: number) => void;
};

function Pagination({ currentPage, countPages, setCurrentPage }: Props) {
  return (
    <ReactPaginate
      initialPage={currentPage}
      previousLabel={<IconArrowLeft />}
      nextLabel={<IconArrowRight />}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      pageCount={countPages}
      onPageChange={({ selected }) => setCurrentPage(selected)}
      containerClassName={styles.pagination}
      previousLinkClassName={styles.pagination__link}
      nextLinkClassName={styles.pagination__link}
      disabledClassName={styles.pagination__link__disabled}
      activeClassName={styles.pagination__link__active}
    />
  );
}

export default Pagination;
