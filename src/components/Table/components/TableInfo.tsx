import { type TabelDataProps } from '../';
import getSortClasses from '../helpers/getSortClasses';
import {
  getContactId,
  getContactAdress,
  getContactBirthday,
  getContactGender,
  getContactMetro,
  getContactPhone,
} from '../../../entities/contact/getters';

import styles from '../index.module.scss';

function TableInfo({ data, sortHandler, sort }: TabelDataProps) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={6} className={styles.table_head}>
            Основная информация
          </th>
        </tr>
        <tr>
          <th>ID номер</th>
          <th>Телефона</th>
          <th
            className={getSortClasses('gender', sort)}
            onClick={sortHandler}
            data-sorting={'gender'}
          >
            Пол
          </th>
          <th>Дата рождения</th>
          <th
            className={getSortClasses('metro', sort)}
            onClick={sortHandler}
            data-sorting={'metro'}
          >
            Метро
          </th>
          <th>Адрес проживания</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item) => {
            return (
              <tr key={getContactId(item)}>
                <td>{getContactId(item)}</td>
                <td>{getContactPhone(item)}</td>
                <td>{getContactGender(item)}</td>
                <td>{getContactBirthday(item)}</td>
                <td>{getContactMetro(item)}</td>
                <td>{getContactAdress(item)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default TableInfo;
