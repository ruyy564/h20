import Pagination from '../../Pagination';

import styles from '../index.module.scss';

type TableFooterProps = {
  count: number;
  limit: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  setLimit: (limit: number) => void;
};

function TableFooter({
  count,
  limit,
  currentPage,
  setCurrentPage,
  setLimit,
}: TableFooterProps) {
  const countPage = Math.ceil(count / limit);
  const deltaCount = count - (countPage - 1) * limit;
  const startShowCount = (currentPage + 1) * limit - limit + 1;
  const endShowCount =
    currentPage + 1 === countPage
      ? startShowCount + deltaCount - 1
      : startShowCount + limit - 1;

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(e.target.value));
  };
  return (
    <>
      <span className={styles.text}>
        показано {startShowCount}-{endShowCount} из {count} результатов
      </span>
      {countPage > 1 && (
        <Pagination
          currentPage={currentPage}
          countPages={countPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      <div className={styles.text}>
        <span>отображать на странице</span>
        <select value={limit} onChange={selectHandler}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
    </>
  );
}

export default TableFooter;
