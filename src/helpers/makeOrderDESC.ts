import { Styles } from '../constants';

const makeOrderDESC = (elem: Element, styles: Styles) => {
  elem.classList.remove(styles.is_sortASC);
  elem.classList.add(styles.is_sortDESC);
};

export default makeOrderDESC;
