import React from 'react';

import Avatar from '../Avatar';
import { IconArrowDown } from '../Icon';

import styles from './index.module.scss';

function UserTab() {
  return (
    <div className={styles.root}>
      <Avatar
        src={
          'https://s3-alpha-sig.figma.com/img/0eab/0bbc/387778f929e79ca6d1ae19f801478042?Expires=1681689600&Signature=BatlzxaMuuvQwd5tZt5ZgMUiGRQoaOj97PSeldDa-SgqzevBtceueFx0GJ4ToHg1RHFgWq1KOsequBJCwkwe1cS6TPCCRsF4i40CmwiyLPJ7yOQnby5c6OdzrHqOGmKR6G33-cAbovk3H8NYbk4mJ6TL6c2pIml3ZY~2-mUNRZQjCjBWy1AjgRNyy5yD3O9vxC5vhZo5uw7JTRM4KAyx-xSJckTc2NxOou8plOjMm6vO2w2ew32ZYXcfDnudzqqAAzSnilm3ABqOjgLy0qMH2U8oYChnRhv-a-Hunmo5smWjrD3cViEvAQZhbTfcYJvjh8osdSoKp7FGyZ9MF8VSAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        }
      />
      <div className={styles.info}>
        <div className={styles.name}>Kristina 🐰</div>
        <div className={styles.role}>менеджер продаж</div>
      </div>
      <IconArrowDown />
    </div>
  );
}

export default UserTab;
