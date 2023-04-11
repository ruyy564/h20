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
import { formatDateForInput } from '../../../helpers/formatDate';

import styles from '../index.module.scss';

function TableHR({
  data,
  sortHandler,
  sort,
  isEdit,
  changeHandler,
}: TabelDataProps) {
  const entity = 'hrInfo';

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
            className={getSortClasses(`${entity}[post]`, styles, sort)}
            onClick={sortHandler}
            data-sorting={`${entity}[post]`}
          >
            Должность
          </th>
          <th
            className={getSortClasses(`${entity}[division]`, styles, sort)}
            onClick={sortHandler}
            data-sorting={`${entity}[division]`}
          >
            Подразделение
          </th>
          <th
            className={getSortClasses(`${entity}[solution]`, styles, sort)}
            onClick={sortHandler}
            data-sorting={`${entity}[solution]`}
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
                      name="post"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item, entity)}
                      value={getContactHrInfoPost(item)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="division"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item, entity)}
                      value={getContactHrInfoDivision(item)}
                    />
                  </td>
                  <td>
                    <select
                      name="solution"
                      onChange={(e) => changeHandler(e, item, entity)}
                      value={getContactHrInfoSolution(item)}
                    >
                      <option value="Принят">Принят</option>
                      <option value="Отказ">Отказ</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="source"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item, entity)}
                      value={getContactHrInfoSource(item)}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      name="date"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item, entity)}
                      value={formatDateForInput(getContactHrInfoDate(item))}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="note"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item, entity)}
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
