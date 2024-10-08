// components/GlobeAnimation.js
import styles from './style.module.scss'; // SCSS module import

const GlobeAnimation = () => {
  return (
    <div className={styles.globe}>
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
