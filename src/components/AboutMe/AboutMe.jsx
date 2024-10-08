'use client';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import styles from './style.module.scss';
import Rounded from '../../common/RoundedButton/Rounded'; // Reuse Rounded button
import Image from 'next/image'; // Import Image from next/image
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
                {/* Replace img with Image component */}
                <Image
                    src="/images/your-image-file.jpg" // Provide the correct image path
                    alt="Description of the image" // Add a meaningful alt text
                    layout="responsive" // Optional: sets image to be responsive
                    width={500} // Set width according to your layout
                    height={300} // Set height according to your layout
                />
            </div>
        </div>
    );
}
