import React, { memo } from 'react';

import styles from './index.module.scss';

type Props = {
  onClick: () => void;
};

type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const ButtonArrowLeft = memo(({ onClick }: Props) => {
  return (
    <button className={styles.btn_arrow} onClick={onClick}>
      <svg viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.01674 9.67991L8.19922 1.06093C8.4986 0.701677 9.08333 0.913378 9.08333 1.38103L9.08333 18.619C9.08333 19.0866 8.4986 19.2983 8.19922 18.9391L1.01674 10.3201C0.862223 10.1347 0.862223 9.86533 1.01674 9.67991Z"
          fill="#989FA3"
        />
      </svg>
    </button>
  );
});

export const ButtonArrowRight = memo(({ onClick }: Props) => {
  return (
    <button className={styles.btn_arrow} onClick={onClick}>
      <svg viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.98326 10.3201L1.80078 18.9391C1.5014 19.2983 0.916667 19.0866 0.916667 18.619L0.916669 1.38102C0.916669 0.913375 1.5014 0.701675 1.80078 1.06093L8.98326 9.67991C9.13778 9.86533 9.13778 10.1347 8.98326 10.3201Z"
          fill="#989FA3"
        />
      </svg>
    </button>
  );
});

export const Button = memo(({ onClick, text }: ButtonProps) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
});
