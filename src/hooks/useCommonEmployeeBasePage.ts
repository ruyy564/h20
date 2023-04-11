import React, { useEffect, useState } from 'react';

import { Contact } from '../entities/contact';

const useCommonEmployeeBasePage = (contacts: Contact[] | null) => {
  const [search, setSearch] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState(contacts);

  useEffect(() => {
    setEditData(contacts);
  }, [contacts]);

  const setEditHandler = () => {
    setIsEdit((prev) => !prev);
  };

  return { search, setEditHandler, setSearch, isEdit, editData, setEditData };
};

export default useCommonEmployeeBasePage;
