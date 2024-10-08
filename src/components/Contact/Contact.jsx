'use client';
import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton/Rounded';
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Magnetic from '../../common/Magnetic/Magnetic';
import { Herr_Von_Muellerhoff } from 'next/font/google';

export default function Contact() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });
    const x = useTransform(scrollYProgress, [0, 1], [100, 100]);
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

    return (
        <motion.div style={{ y }} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image
                                fill={true}
                                alt={"image"}
                                src={`/images/bgg.jpg`}
                            />
                        </div>
                        <h2>Let&apos;s work</h2> {/* Escaped the apostrophe */}
                    </span>
                    <h2>together</h2>
                    <motion.div style={{ x }} className={styles.buttonContainer}>
                        <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div>
                    <motion.svg style={{ rotate, scale: 2 }} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white" />
                    </motion.svg>
                </div>
                <div className={styles.nav}>
                    <Rounded>
                        <a href="mailto:HiteshThakur695@gmail.com" className={styles.link}>
                            <p>HiteshThakur695@gmail.com</p>
                        </a>
                    </Rounded>
                    <Rounded>
                        <a href="tel:+917876180311" className={styles.link}>
                            <p>+91 78761 80311</p>
                        </a>
                    </Rounded>
                </div>
                <div className={styles.info}>
                    <h3>SOCIALS</h3>
                    <div>
                        <a href="https://github.com/HiteshO7" target="_blank" rel="noopener noreferrer" className={styles.link}>
                            <Magnetic>
                                <p>Github</p>
                            </Magnetic>
                        </a>
                        <a href="https://www.instagram.com/_hitesh.thakur/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                            <Magnetic>
                                <p>Instagram</p>
                            </Magnetic>
                        </a>
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.link}>
                            <Magnetic>
                                <p>Twitter</p>
                            </Magnetic>
                        </a>
                        <a href="https://www.linkedin.com/in/hitesh-thakur07/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                            <Magnetic>
                                <p>Linkedin</p>
                            </Magnetic>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
