'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '../../components/PreloaderAbout/Preloader';
import Header from '../../components/Header/Header';
import AboutMain from '../../components/AboutMain/AboutMain';
import AboutMe from '../../components/AboutMe/AboutMe';
import Contact from '../../components/Contact/Contact';
import AboutHelp from '../../components/AboutHelp/AboutHelp';

import SlidingImages from '../../components/SlidingImages/SlidingImages';

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let locomotiveScroll;

    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });

      setTimeout(() => {
        setIsLoading(false); // Hide the preloader after 2 seconds
        document.body.style.cursor = 'default'; // Reset the cursor
        window.scrollTo(0, 0); // Reset scroll to top
      }, 2000);
    })();

    // Clean up LocomotiveScroll on component unmount
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <main data-scroll-container>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />} {/* Show preloader while loading */}
      </AnimatePresence>
     <Header />
    <AboutMain />
    <AboutMe/>
    <AboutHelp/>
    <SlidingImages/>
    <Contact/>
    </main>
  );
}
