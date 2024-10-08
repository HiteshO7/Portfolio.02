'use client';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import styles from './style.module.scss';
import Rounded from '../../common/RoundedButton/Rounded'; // Reuse Rounded button
import Image from 'next/image'; // To handle the image on the right

import GlobeAnimation from '../../common/GlobeAnimation/GlobeAnimation';

export default function AboutMe() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });
    const x = useTransform(scrollYProgress, [0, 1], [100, 100]);


    return (
        <div className={styles.main}>
            <div className={styles.me}>
                <p>I help companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.</p>
            </div>
            <div className={styles.picture}>
                <img src="/images/" alt="" />
            </div>
        </div>
    );
}
