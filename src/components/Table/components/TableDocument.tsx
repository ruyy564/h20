import { type TabelDataProps } from '../';
import getSortClasses from '../helpers/getSortClasses';
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

import styles from '../index.module.scss';

function TableDocument({ data, sortHandler, sort }: TabelDataProps) {
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
            className={getSortClasses('documents[citizenship]', sort)}
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
            className={getSortClasses('documents[patent]', sort)}
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
                <td>{getContactDocumentsCitizenship(item)}</td>
                <td>{getContactDocumentsPassport(item)}</td>
                <td>{getContactDocumentsRegistration(item)}</td>
                <td>{getContactDocumentsValidityPeriodPassport(item)}</td>
                <td>{getContactDocumentsPlaceOfBirth(item)}</td>
                <td>{getContactDocumentsIssued(item)}</td>
                <td>{getContactDocumentsPatent(item)}</td>
                <td>{getContactDocumentsValidityPeriodPatent(item)}</td>
                <td>{getContactDocumentsSnils(item)}</td>
                <td>{getContactDocumentsInn(item)}</td>
                <td>{getContactDocumentsMedicalBook(item)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default TableDocument;
