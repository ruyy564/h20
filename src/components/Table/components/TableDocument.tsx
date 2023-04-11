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
import { formatDateForInput } from '../../../helpers/formatDate';

import styles from '../index.module.scss';

function TableDocument({
  data,
  sortHandler,
  sort,
  isEdit,
  changeHandler,
}: TabelDataProps) {
  const classNameData = (data: string) => {
    return new Date().getTime() > new Date(formatDateForInput(data)).getTime()
      ? styles.invalidDate
      : '';
  };

  const entity = 'documents';

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
            className={getSortClasses(`${entity}[citizenship]`, styles, sort)}
            onClick={sortHandler}
            data-sorting={`${entity}[citizenship]`}
          >
            Гражданство
          </th>
          <th>Паспорт</th>
          <th>Кем выдан</th>
          <th>Срок действия</th>
          <th>Место рождения</th>
          <th>Адрес прописки</th>
          <th
            className={getSortClasses(`${entity}[patent]`, styles, sort)}
            onClick={sortHandler}
            data-sorting={`${entity}[patent]`}
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
            if (isEdit) {
              return (
                <tr key={getContactId(item)}>
                  <td>
                    <input
                      type="text"
                      name="citizenship"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item, entity)}
                      value={getContactDocumentsCitizenship(item)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="passport"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item, entity)}
                      value={getContactDocumentsPassport(item)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="registration"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item, entity)}
                      value={getContactDocumentsRegistration(item)}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      name="validityPeriodPassport"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item, entity)}
                      value={formatDateForInput(
                        getContactDocumentsValidityPeriodPassport(item)
                      )}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="placeOfBirth"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item, entity)}
                      value={getContactDocumentsPlaceOfBirth(item)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="issued"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item, entity)}
                      value={getContactDocumentsIssued(item)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="patent"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item, entity)}
                      value={getContactDocumentsPatent(item)}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      name="validityPeriodPatent"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item, entity)}
                      value={formatDateForInput(
                        getContactDocumentsValidityPeriodPatent(item)
                      )}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="snils"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item, entity)}
                      value={getContactDocumentsSnils(item)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="inn"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item, entity)}
                      value={getContactDocumentsInn(item)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="medicalBook"
                      autoComplete="off"
                      onChange={(e) => changeHandler(e, item, entity)}
                      value={getContactDocumentsMedicalBook(item)}
                    />
                  </td>
                </tr>
              );
            }
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
                    className={classNameData(
                      getContactDocumentsValidityPeriodPassport(item)
                    )}
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
                    className={classNameData(
                      getContactDocumentsValidityPeriodPatent(item)
                    )}
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
