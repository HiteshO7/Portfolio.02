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
  let xPercent = 0;
  let direction = -1;
  const speedMultiplier = .06;  // Adjust this to control speed

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1,
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += speedMultiplier * direction;
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
