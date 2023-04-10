import getClassNames from './getClassNames';
import { Styles } from '../constants';

const getSortClasses = (name: string, styles: Styles, sort?: string) =>
  sort === name
    ? getClassNames(styles.sorting_block, styles.is_sortDESC, styles.active)
    : getClassNames(styles.sorting_block, styles.is_sortASC);

export default getSortClasses;
