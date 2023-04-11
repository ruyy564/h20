import { type TabelDataProps } from '../';
import getSortClasses from '../../../helpers/getSortClasses';
import {
  getContactId,
  getContactAdress,
  getContactBirthday,
  getContactGender,
  getContactMetro,
  getContactPhone,
} from '../../../entities/contact/getters';

import styles from '../index.module.scss';
import { formatDateForInput } from '../../../helpers/formatDate';

function TableInfo({
  data,
  sort,
  isEdit,
  sortHandler,
  changeHandler,
}: TabelDataProps) {
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
            className={getSortClasses('gender', styles, sort)}
            onClick={sortHandler}
            data-sorting={'gender'}
          >
            Пол
          </th>
          <th>Дата рождения</th>
          <th
            className={getSortClasses('metro', styles, sort)}
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
            if (isEdit) {
              return (
                <tr key={getContactId(item)}>
                  <td>{getContactId(item)}</td>
                  <td>
                    <input
                      type="text"
                      name="phone"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item)}
                      value={getContactPhone(item)}
                    />
                  </td>
                  <td>
                    <select
                      name="gender"
                      onChange={(e) => changeHandler(e, item)}
                      value={getContactGender(item)}
                    >
                      <option value="Женский">Женский</option>
                      <option value="Мужской">Мужской</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="date"
                      name="birthday"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item)}
                      value={formatDateForInput(getContactBirthday(item))}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="metro"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item)}
                      value={getContactMetro(item)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="adress"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item)}
                      value={getContactAdress(item)}
                    />
                  </td>
                </tr>
              );
            }
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
