import { type TabelDataProps } from '../';
import getSortClasses from '../helpers/getSortClasses';

import {
  getContactId,
  getContactHrInfoDate,
  getContactHrInfoDivision,
  getContactHrInfoNote,
  getContactHrInfoPost,
  getContactHrInfoSolution,
  getContactHrInfoSource,
} from '../../../entities/contact/getters';

import styles from '../index.module.scss';

function TableHR({ data, sortHandler, sort }: TabelDataProps) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={6} className={styles.table_head}>
            Информация от HR
          </th>
        </tr>
        <tr>
          <th
            className={getSortClasses('hrInfo[post]', sort)}
            onClick={sortHandler}
            data-sorting={'hrInfo[post]'}
          >
            Должность
          </th>
          <th
            className={getSortClasses('hrInfo[division]', sort)}
            onClick={sortHandler}
            data-sorting={'hrInfo[division]'}
          >
            Подразделение
          </th>
          <th
            className={getSortClasses('hrInfo[solution]', sort)}
            onClick={sortHandler}
            data-sorting={'hrInfo[solution]'}
          >
            Решение
          </th>
          <th>Источник</th>
          <th>Дата </th>
          <th>Примечание</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item) => {
            return (
              <tr key={getContactId(item)}>
                <td>{getContactHrInfoPost(item)}</td>
                <td>{getContactHrInfoDivision(item)}</td>
                <td>{getContactHrInfoSolution(item)}</td>
                <td>{getContactHrInfoSource(item)}</td>
                <td>{getContactHrInfoDate(item)}</td>
                <td>{getContactHrInfoNote(item)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default TableHR;
