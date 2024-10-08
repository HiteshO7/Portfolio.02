// components/GlobeAnimation.js
import React from 'react';
import styles from './style.module.scss'; // SCSS module import

const GlobeAnimation = ({ size = '3em' }) => {
  return (
    <div
      className={styles.globe}
      style={{ width: size, height: size }} // Set width and height based on size prop
    >
      <div className={styles['globe-wrap']}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles['circle-hor']}></div>
        <div className={styles['circle-hor-middle']}></div>
      </div>
    </div>
  );
};

export default GlobeAnimation;
