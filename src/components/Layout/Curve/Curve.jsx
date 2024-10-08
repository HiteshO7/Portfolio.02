// src/components/Curve/Curve.jsx
'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { text, curve, translate } from './anim';
import styles from './style.module.scss';

const routes = {
  "/": "Home",
  "/about": "About",
  "/work": "Work",
  "/contact": "Contact"
};

const anim = (variants) => ({
  variants,
  initial: "initial",
  animate: "enter",
  exit: "exit",
  transition: {
    duration: 0.6,
    ease: [0.6, 0.05, -0.01, 0.9]
  }
});

export default function Curve({ children, backgroundColor }) {
  const pathname = usePathname();
  const [dimensions, setDimensions] = useState({ width: null, height: null });

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className={styles.curve} style={{ backgroundColor }}>
      <div style={{ opacity: dimensions.width === null ? 1 : 0 }} className={styles.background} />

      <AnimatePresence mode="wait">
        <motion.p className={styles.route} key={pathname} {...anim(text)}>
          {routes[pathname] || "Page"}
        </motion.p>
      </AnimatePresence>

      {dimensions.width != null && <SVG {...dimensions} />}

      {/* Ensure children are animated with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div key={pathname} {...anim(translate)}>
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// SVG component for curve animation
const SVG = ({ height, width }) => {
  const initialPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  return (
    <motion.svg {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
}
