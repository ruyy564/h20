import Pagination from '../../Pagination';
import getFooterTableInfo from '../../../helpers/getFooterTableInfo';

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
  const { countPage, endShowCount, selectHandler, startShowCount } =
    getFooterTableInfo({ count, limit, setLimit, currentPage });

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
