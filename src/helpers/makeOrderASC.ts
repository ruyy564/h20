import { Styles } from '../constants';

const makeOrderASC = (elem: Element, styles: Styles) => {
  elem.classList.remove(styles.is_sortDESC);
  elem.classList.add(styles.is_sortASC);
};

export default makeOrderASC;
