import { type TabelDataProps } from '../';
import getSortClasses from '../../../helpers/getSortClasses';

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

function TableHR({
  data,
  sortHandler,
  sort,
  isEdit,
  changeHandler,
}: TabelDataProps) {
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
            className={getSortClasses('hrInfo[post]', styles, sort)}
            onClick={sortHandler}
            data-sorting={'hrInfo[post]'}
          >
            Должность
          </th>
          <th
            className={getSortClasses('hrInfo[division]', styles, sort)}
            onClick={sortHandler}
            data-sorting={'hrInfo[division]'}
          >
            Подразделение
          </th>
          <th
            className={getSortClasses('hrInfo[solution]', styles, sort)}
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
            if (isEdit) {
              return (
                <tr key={getContactId(item)}>
                  <td>
                    <input
                      type="text"
                      data-main="hrInfo"
                      name="post"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item)}
                      value={getContactHrInfoPost(item)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      data-main="hrInfo"
                      name="division"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item)}
                      value={getContactHrInfoDivision(item)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      data-main="hrInfo"
                      name="solution"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item)}
                      value={getContactHrInfoSolution(item)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      data-main="hrInfo"
                      name="source"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item)}
                      value={getContactHrInfoSource(item)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      data-main="hrInfo"
                      name="date"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item)}
                      value={getContactHrInfoDate(item)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      data-main="hrInfo"
                      name="note"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item)}
                      value={getContactHrInfoNote(item)}
                    />
                  </td>
                </tr>
              );
            }
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
