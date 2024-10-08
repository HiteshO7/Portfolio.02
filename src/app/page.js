'use client';

import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader/Preloader';
import Landing from '../components/Landing/Landing';
import Projects from '../components/Projects/Project';
import Blur from '../components/Blur/Blur';
import Header from '../components/Header/Header';
import GlobeIllusion from '../components/Globe/GlobeAnimation';

import Description from '../components/Description/Animation.jsx';
import SlidingImages from '../components/SlidingImages/SlidingImages';
import Contact from '../components/Contact/Contact';


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let locomotiveScroll;

    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'), // Target the scroll container
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();

    // Clean up on component unmount
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <main className={styles.main} data-scroll-container>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Header />
      <Landing />
      <Description />
      <Blur />
      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  );
}
