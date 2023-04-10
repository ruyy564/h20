import { type TabelDataProps } from '../';
import getSortClasses from '../../../helpers/getSortClasses';
import {
  getContactId,
  getContactDocumentsCitizenship,
  getContactDocumentsInn,
  getContactDocumentsIssued,
  getContactDocumentsMedicalBook,
  getContactDocumentsPassport,
  getContactDocumentsPatent,
  getContactDocumentsPlaceOfBirth,
  getContactDocumentsRegistration,
  getContactDocumentsSnils,
  getContactDocumentsValidityPeriodPassport,
  getContactDocumentsValidityPeriodPatent,
} from '../../../entities/contact/getters';
import formatDate from '../../../helpers/formatDate';

import styles from '../index.module.scss';

function TableDocument({ data, sortHandler, sort }: TabelDataProps) {
  const currentDay = new Date();

  return (
    <table>
      <thead>
        <tr>
          <th colSpan={11} className={styles.table_head}>
            Докумнты сотрудника
          </th>
        </tr>

        <tr>
          <th
            className={getSortClasses('documents[citizenship]', styles, sort)}
            onClick={sortHandler}
            data-sorting={'documents[citizenship]'}
          >
            Гражданство
          </th>
          <th>Паспорт</th>
          <th>Кем выдан</th>
          <th>Срок действия</th>
          <th>Место рождения</th>
          <th>Адрес прописки</th>
          <th
            className={getSortClasses('documents[patent]', styles, sort)}
            onClick={sortHandler}
            data-sorting={'documents[patent]'}
          >
            Патент
          </th>
          <th>Срок действия</th>
          <th>СНИЛС</th>
          <th>ИНН</th>
          <th>Мед. книжка</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item) => {
            return (
              <tr key={getContactId(item)}>
                <td>
                  <span>{getContactDocumentsCitizenship(item)}</span>
                </td>
                <td>
                  <span>{getContactDocumentsPassport(item)}</span>
                </td>
                <td>
                  <span>{getContactDocumentsRegistration(item)}</span>
                </td>
                <td>
                  <span
                    className={
                      currentDay.getTime() >
                      new Date(
                        getContactDocumentsValidityPeriodPassport(item)
                      ).getTime()
                        ? styles.invalidDate
                        : ''
                    }
                  >
                    {getContactDocumentsValidityPeriodPassport(item)}
                  </span>
                </td>
                <td>
                  <span>{getContactDocumentsPlaceOfBirth(item)}</span>
                </td>
                <td>
                  <span>{getContactDocumentsIssued(item)}</span>
                </td>
                <td>
                  <span>{getContactDocumentsPatent(item)}</span>
                </td>
                <td>
                  <span
                    className={
                      currentDay.getTime() >
                      new Date(
                        getContactDocumentsValidityPeriodPatent(item)
                      ).getTime()
                        ? styles.invalidDate
                        : ''
                    }
                  >
                    {getContactDocumentsValidityPeriodPatent(item)}
                  </span>
                </td>
                <td>
                  <span>{getContactDocumentsSnils(item)}</span>
                </td>
                <td>
                  <span>{getContactDocumentsInn(item)}</span>
                </td>
                <td>
                  <span>{getContactDocumentsMedicalBook(item)}</span>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default TableDocument;
