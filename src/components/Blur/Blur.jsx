// components/Blur.js
'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './style.module.scss';

export default function Blur() {
  const textRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.75; // Adjust this to trigger earlier/later

      textRefs.current.forEach((ref, index) => {
        if (ref) {
          const { top } = ref.getBoundingClientRect();
          if (top < triggerPoint) {
            gsap.to(ref, {
              opacity: 1,
              y: 0,
              duration: 2, // Slow down the duration
              delay: index * 0.2, // Staggered delay (increase if desired)
              ease: 'power3.out', // Smoother easing
            });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.nameblur} ${styles.grid3}`}>
      <div
        ref={(el) => (textRefs.current[0] = el)}
        className={`${styles.autoBLur} ${styles.authorFont} ${styles.text1}`}
        style={{ opacity: 0, transform: 'translateY(20px)' }} // Initial styles for animation
      >
        HITESH
      </div>
      <div
        ref={(el) => (textRefs.current[1] = el)}
        className={`${styles.autoBLur} ${styles.authorFont} ${styles.text2}`}
        style={{ opacity: 0, transform: 'translateY(20px)' }} // Initial styles for animation
      >
        DESIGNER
      </div>
      <div
        ref={(el) => (textRefs.current[2] = el)}
        className={`${styles.autoBLur} ${styles.authorFont} ${styles.text3}`}
        style={{ opacity: 0, transform: 'translateY(20px)' }} // Initial styles for animation
      >
        DEVELOPER
      </div>
      <div
        ref={(el) => (textRefs.current[3] = el)}
        className={`${styles.autoBLur} ${styles.authorFont} ${styles.text4}`}
        style={{ opacity: 0, transform: 'translateY(20px)' }} // Initial styles for animation
      >
        GAMER +
      </div>
      <div
        ref={(el) => (textRefs.current[4] = el)}
        className={`${styles.autoBLur} ${styles.authorFont} ${styles.text5}`}
        style={{ opacity: 0, transform: 'translateY(20px)' }} // Initial styles for animation
      >
        SEE MORE &#8599;
      </div>
    </div>
  );
}
