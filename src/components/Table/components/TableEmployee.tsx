import { type TabelDataProps } from '../';

import getSortClasses from '../helpers/getSortClasses';
import {
  getContactId,
  getContactName,
} from '../../../entities/contact/getters';

import styles from '../index.module.scss';

function TableEmployee({ data, sortHandler, sort }: TabelDataProps) {
  return (
    <table className={styles.table_employee}>
      <thead>
        <tr>
          <th rowSpan={2}>№</th>
          <th
            rowSpan={2}
            className={getSortClasses('name', sort)}
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
