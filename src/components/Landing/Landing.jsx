'use client'
import Image from 'next/image';
import styles from './style.module.scss';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import Magnetic from '../../common/Magnetic/Magnetic';

export default function Landing() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const xPercent = useRef(0); // UseRef for mutable xPercent value
  const direction = useRef(-1); // UseRef to store direction
  const speedMultiplier = .06;  // Adjust this to control speed

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction.current = e.direction * -1, // Update direction.current
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent.current < -100) {
      xPercent.current = 0;
    } else if (xPercent.current > 0) {
      xPercent.current = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent.current });
    gsap.set(secondText.current, { xPercent: xPercent.current });
    requestAnimationFrame(animate);
    xPercent.current += speedMultiplier * direction.current; // Use direction.current and xPercent.current
  };

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>

      <Image
        src="/images/bgg.jpg"
        fill={true}
        alt="background"
      />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Hitesh Thakur -</p>
          <p ref={secondText}>Hitesh Thakur-</p>
        </div>
      </div>

      <Magnetic>
      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <p>Freelance   &nbsp;&nbsp;&nbsp;&nbsp;  &#8599;</p>
        <p>Designer & Developer</p>
      </div>
      </Magnetic>
    </motion.main>
  );
}
