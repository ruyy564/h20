import styles from '../index.module.scss';

const makeOrderDESC = (elem: Element) => {
  elem.classList.remove(styles.is_sortASC);
  elem.classList.add(styles.is_sortDESC);
};

export default makeOrderDESC;
