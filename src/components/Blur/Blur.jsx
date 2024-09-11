import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton/Rounded';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic/Magnetic';

export default function Blur() {
  return (
    <div className={`${styles.nameblur} ${styles.grid3}`}>
      <div className={`${styles.autoBLur} ${styles.authorFont}`}>HITESH</div>
      <div className={`${styles.autoBLur} ${styles.authorFont}`}>DESIGNER</div>
      <div className={`${styles.autoBLur} ${styles.authorFont}`}>DEVELOPER</div>
      <div className={`${styles.autoBLur} ${styles.authorFont}`}>GAMER +</div>
      <div className={`${styles.autoBLur} ${styles.authorFont}`}>SEE MORE &#8599;</div>
    </div>
  );
}
