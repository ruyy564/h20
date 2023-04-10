import { type TabelDataProps } from '../';

import getSortClasses from '../../../helpers/getSortClasses';
import {
  getContactId,
  getContactName,
} from '../../../entities/contact/getters';

import styles from '../index.module.scss';

function TableEmployee({
  data,
  sortHandler,
  changeHandler,
  sort,
  isEdit,
}: TabelDataProps) {
  return (
    <table className={styles.table_employee}>
      <thead>
        <tr>
          <th rowSpan={2}>№</th>
          <th
            rowSpan={2}
            className={getSortClasses('name', styles, sort)}
            onClick={sortHandler}
            data-sorting={'name'}
          >
            Имя сотрудника
          </th>
          <th>&nbsp;</th>
        </tr>
        <tr>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item, index) => {
            if (isEdit) {
              return (
                <tr key={getContactId(item)}>
                  <td>{index + 1}</td>
                  <td>
                    <input
                      type="text"
                      name="name"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item)}
                      value={getContactName(item)}
                    />
                  </td>
                </tr>
              );
            }
            return (
              <tr key={getContactId(item)}>
                <td>{index + 1}</td>
                <td>{getContactName(item)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default TableEmployee;
