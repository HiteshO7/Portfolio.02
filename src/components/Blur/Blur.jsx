import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton/Rounded';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic/Magnetic';
import { Herr_Von_Muellerhoff } from 'next/font/google';

export default function Blur( ) {
    return(
        <div class={`${styles.nameblur} ${styles.grid3}`}>
          <div class={styles.autoBLur}>HITESH</div>
          <div class={styles.autoBLur}>DESIGNER</div>
          <div class={styles.autoBLur}>DEVELOPER</div>
          <div class={styles.autoBLur}>GAMER +</div>
          <div class={styles.autoBLur}>SEE MORE &#8599;</div>
        </div>
    )

}
