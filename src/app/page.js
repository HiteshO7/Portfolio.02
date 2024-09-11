'use client';
import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader/Preloader';
import Landing from '../components/Landing/Landing';
import Projects from '../components/Projects/Project';
import Blur from '../components/Blur/Blur';
import Description from '../components/Description/Animation.jsx';
import SlidingImages from '../components/SlidingImages/SlidingImages';
import Contact from '../components/Contact/Contact';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Blur />
      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  );
}
