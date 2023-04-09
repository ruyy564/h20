import React, { useState } from 'react';

import Pagination from '../Pagination';

import styles from './index.module.scss';

function Table() {
  const [currentPage, setCurrentPage] = useState(7);

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <table className={styles.table_employee}>
          <thead>
            <tr>
              <th rowSpan={2}>№</th>
              <th rowSpan={2}>Имя сотрудника</th>
              <th>&nbsp;</th>
            </tr>
            <tr>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>№</td>
              <td>Имя сотрудника</td>
            </tr>
            <tr>
              <td>№</td>
              <td>Имя сотрудника</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.info}>
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
                <th>Пол</th>
                <th>Дата рождения</th>
                <th>Метро</th>
                <th>Адрес проживания</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ID номер</td>
                <td>Телефона</td>
                <td>Пол</td>
                <td>Дата рождения sdfsfsfsdfsdfsdfsdfds</td>
                <td>Метро</td>
                <td>Адрес проживания</td>
              </tr>
              <tr>
                <td>ID номер</td>
                <td>Телефона</td>
                <td>Пол</td>
                <td>Дата рождения sdfsfsfsdfsdfsdfsdfds</td>
                <td>Метро</td>
                <td>Адрес проживания</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan={2} className={styles.table_head}>
                  Банковская информация
                </th>
              </tr>
              <tr>
                <th>Банк</th>
                <th>Номер карта</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Банк</td>
                <td>Номер карта</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan={11} className={styles.table_head}>
                  Докумнты сотрудника
                </th>
              </tr>
              <tr>
                <th>Гражданство</th>
                <th>Паспорт</th>
                <th>Кем выдан</th>
                <th>Срок действия</th>
                <th>Место рождения</th>
                <th>Адрес прописки</th>
                <th>Патент</th>
                <th>Срок действия</th>
                <th>СНИЛС</th>
                <th>ИНН</th>
                <th>Мед. книжка</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Гражданство</td>
                <td>Паспорт</td>
                <td>Кем выдан</td>
                <td>Срок действия</td>
                <td>Место рождения</td>
                <td>Адрес прописки</td>
                <td>Патент</td>
                <td>Срок действия</td>
                <td>СНИЛС</td>
                <td>ИНН</td>
                <td>Мед. книжка</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan={6} className={styles.table_head}>
                  Информация от HR
                </th>
              </tr>
              <tr>
                <th>Должность</th>
                <th>Подразделение</th>
                <th>Решение</th>
                <th>Источник</th>
                <th>Дата </th>
                <th>Примечание</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Должность</td>
                <td>Подразделение</td>
                <td>Решение</td>
                <td>Источник</td>
                <td>Дата </td>
                <td>Примечание</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.wrapper}>
        <span className={styles.text}>показано 21-30 из 88 результатов</span>
        <Pagination
          currentPage={currentPage}
          countPages={10}
          setCurrentPage={setCurrentPage}
        />
        <div className={styles.text}>
          <span>отображать на странице</span>
          <select>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Table;
