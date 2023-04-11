import React, { useState, useEffect } from 'react';

import makeOrderASC from '../helpers/makeOrderASC';
import makeOrderDESC from '../helpers/makeOrderDESC';
import { ORDER } from '../constants';
import { Contact, Bank, Document, HRInfo } from '../entities/contact';
import { getContactId } from '../entities/contact/getters';
import { Styles } from '../constants';
import formatDate from '../helpers/formatDate';

type Props = {
  search: string;
  isEdit: boolean;
  styles: Styles;
  setEditData: React.Dispatch<React.SetStateAction<Contact[] | null>>;
  fetchContacts: (
    page: number,
    limit: number,
    sort: string,
    order: string,
    q: string
  ) => void;
};

const useTable = ({
  fetchContacts,
  search,
  isEdit,
  styles,
  setEditData,
}: Props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [sort, setSort] = useState('');
  const [order, setOrder] = useState(ORDER.ASC);

  useEffect(() => {
    fetchContacts(currentPage + 1, limit, sort, order, search);
  }, [limit, currentPage, sort, order, fetchContacts, search, isEdit]);

  useEffect(() => {
    setCurrentPage(0);
  }, [limit]);

  const sortHandler = (e: React.MouseEvent) => {
    const elem = e.currentTarget;
    const valueSort = elem.getAttribute('data-sorting');
    const isSortASC = elem.classList.contains(styles.is_sortASC);

    if (sort === valueSort) {
      if (isSortASC) {
        setOrder(ORDER.DESC);
        makeOrderDESC(elem, styles);
      } else {
        setOrder(ORDER.ASC);
        makeOrderASC(elem, styles);
      }
    } else {
      setSort(valueSort || '');
      setOrder(ORDER.DESC);
      makeOrderDESC(elem, styles);
    }
  };

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: Contact,
    entities?: keyof Contact
  ) => {
    const name = e.target.name;
    const isDate = e.target.type === 'date';
    let value = e.target.value;

    if (isDate) {
      value = formatDate(value);
      console.log(value);
    }
    setEditData(
      (prev) =>
        prev &&
        prev.map((el) => {
          if (el.id === getContactId(item)) {
            if (entities) {
              const mainElem = el[entities] as Bank | Document | HRInfo;

              return {
                ...el,
                [entities]: { ...mainElem, [name]: value },
              };
            }

            return {
              ...el,
              [name]: value,
            };
          }

          return el;
        })
    );
  };

  return {
    sortHandler,
    changeHandler,
    sort,
    currentPage,
    limit,
    setCurrentPage,
    setLimit,
  };
};

export default useTable;
