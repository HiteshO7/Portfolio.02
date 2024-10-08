'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav/Nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton/Rounded';
import Magnetic from '../../common/Magnetic/Magnetic';

export default function Header() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname(); // Get the current route
    const button = useRef(null);

    // Reset `isActive` when the route changes
    useEffect(() => {
        setIsActive(false);
    }, [pathname]);

    // GSAP Scroll Animation for Button
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => { gsap.to(button.current, { scale: 1, duration: 0.25, ease: "power1.out" }) },
                onEnterBack: () => { gsap.to(button.current, { scale: 0, duration: 0.25, ease: "power1.out" }, setIsActive(false)) }
            }
        });
    }, []);

    // Define the text color based on the route
    const getTextColor = () => {
        if (pathname === '/about') return 'black'; // For example, red for the About page
        if (pathname === '/work') return 'black'; // Blue for the Work page
        if (pathname === '/contact') return 'white'; // Green for the Contact page
        return 'white'; // Default color for other pages
    };

    return (
        <>
            <div ref={header} className={styles.header}>
                <Magnetic>
                    <div className={styles.logo}>
                        <p className={styles.copyright} style={{ color: getTextColor() }}>©</p>
                        <div className={styles.name}>
                            <p className={styles.codeBy} style={{ color: getTextColor() }}>Code by</p> {/* Dynamic Text Color */}
                            <p className={styles.Hitesh} style={{ color: getTextColor() }}>Hitesh</p> {/* Dynamic Text Color */}
                            <p className={styles.Thakur} style={{ color: getTextColor() }}>&nbsp;&nbsp;Thakur</p> {/* Dynamic Text Color */}
                        </div>
                    </div>
                </Magnetic>
                <div className={styles.nav}>
                <Magnetic>
                        <div className={styles.el}>
                            <a href='/' style={{ color: getTextColor() }}>Home  </a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a href='/work' style={{ color: getTextColor() }}>Work</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a href='/about' style={{ color: getTextColor() }}>About</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a href='/contact' style={{ color: getTextColor() }}>Contact</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                </div>
            </div>
            <div ref={button} className={styles.headerButtonContainer}>
                <Rounded onClick={() => setIsActive(!isActive)} className={`${styles.button}`}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                </Rounded>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </>
    );
}
