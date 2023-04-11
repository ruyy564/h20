import { type TabelDataProps } from '../';
import getSortClasses from '../../../helpers/getSortClasses';
import {
  getContactBankName,
  getContactBankCard,
  getContactId,
} from '../../../entities/contact/getters';

import styles from '../index.module.scss';

function TableBank({
  data,
  sortHandler,
  sort,
  isEdit,
  changeHandler,
}: TabelDataProps) {
  const entity = 'bank';

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
            className={getSortClasses(`${entity}[name]`, styles, sort)}
            onClick={sortHandler}
            data-sorting={`${entity}[name]`}
          >
            Банк
          </th>
          <th>Номер карта</th>
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
                      name="name"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item, entity)}
                      value={getContactBankName(item)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="card"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item, entity)}
                      value={getContactBankCard(item)}
                    />
                  </td>
                </tr>
              );
            }
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
