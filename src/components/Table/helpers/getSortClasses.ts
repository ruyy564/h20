import getClassNames from '../../../helpers/getClassNames';

import styles from '../index.module.scss';

const getSortClasses = (name: string, sort?: string) =>
  sort === name
    ? getClassNames(styles.sorting_block, styles.is_sortDESC, styles.active)
    : getClassNames(styles.sorting_block, styles.is_sortASC);

export default getSortClasses;
