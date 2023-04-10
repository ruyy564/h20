import styles from '../index.module.scss';

const makeOrderASC = (elem: Element) => {
  elem.classList.remove(styles.is_sortDESC);
  elem.classList.add(styles.is_sortASC);
};

export default makeOrderASC;
