import { type TabelDataProps } from '../';
import getSortClasses from '../helpers/getSortClasses';
import {
  getContactBankName,
  getContactBankCard,
  getContactId,
} from '../../../entities/contact/getters';

import styles from '../index.module.scss';

function TableBank({ data, sortHandler, sort }: TabelDataProps) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2} className={styles.table_head}>
            Банковская информация
          </th>
        </tr>
        <tr>
          <th
            className={getSortClasses('bank[name]', sort)}
            onClick={sortHandler}
            data-sorting={'bank[name]'}
          >
            Банк
          </th>
          <th>Номер карта</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item) => {
            return (
              <tr key={getContactId(item)}>
                <td>{getContactBankName(item)}</td>
                <td>{getContactBankCard(item)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default TableBank;
