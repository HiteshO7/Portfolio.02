'use client';
import { useEffect, useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import styles from './style.module.scss';
import GlobeAnimation from '../../common/GlobeAnimation/GlobeAnimation';

export default function AboutMain() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], [100, 0]); // Updated x movement for smooth scroll animation

    // Common animation variants for scroll-triggered animations
    const fadeInUpVariant = {
        hidden: { opacity: 0, y: 50 }, // Start off-screen with opacity 0 and moved down 50px
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, ease: 'easeOut' } // Slow, smooth animation
        }
    };

    return (
        <div ref={container} className={styles.main}>
            {/* Title animation */}
            <motion.div
                className={styles.title}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUpVariant}
                viewport={{ once: true, amount: 0.5 }} // Animates when 50% of the title is visible
            >
                <p>Helping brands thrive in the digital world</p>
            </motion.div>

            {/* Button container animation */}
            <motion.div
                className={styles.buttonContainer}
                style={{ x }} // x-axis transform movement linked to scroll
                initial="hidden"
                whileInView="visible"
                variants={fadeInUpVariant} // Fade-in-up animation for the button container
                viewport={{ once: true, amount: 0.5 }} // Triggers when 50% of the container is visible
            >
                <div className={styles.button}>
                    <GlobeAnimation size="5em" thickness="0.2em" />
                </div>
            </motion.div>
        </div>
    );
}
