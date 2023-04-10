import React from 'react';

import Search from '../Search';
import { Button } from '../Button';

import styles from './index.module.scss';
import { Contact } from '../../entities/contact';

type Props = {
  editData: Contact[] | null;
  count: number;
  search: string;
  isEdit: boolean;
  updateContacts: (contacts: Contact[]) => void;
  setIsEdit: () => void;
  setSearch: (search: string) => void;
};

function Panel({
  editData,
  count,
  search,
  isEdit,
  updateContacts,
  setIsEdit,
  setSearch,
}: Props) {
  const updateDataHandler = () => {
    if (editData) {
      updateContacts(editData);
      setIsEdit();
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.contact}>
          <span className={styles.contact_num}>{count}</span>
          <span className={styles.contact_text}>Контактов</span>
        </div>
        <Search search={search} setSearch={setSearch} />
      </div>
      {isEdit ? (
        <div className={styles.button_group}>
          <Button onClick={updateDataHandler} text={'Сохранить'} />
          <Button onClick={setIsEdit} text={'Отменить'} />
        </div>
      ) : (
        <Button onClick={setIsEdit} text={'Режим редактирования'} />
      )}
    </div>
  );
}

export default Panel;
