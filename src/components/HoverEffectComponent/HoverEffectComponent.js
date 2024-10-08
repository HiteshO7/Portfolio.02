'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from './utils/useMousePosition';
import styles from './HoverEffectComponent.scss'; // Import CSS Module

const pairs = [
  ["THAKUR", "PROFFESIONLY"],
  ["COLL", "PRO"],
  ["YEP", "HITESH"],
  ["DESIGNER", "DEVELOPER"],
  ["GAMER +", "SEE MORE ↗"]
];

const positions = [
  { top: '10%', left: '10%' },
  { top: '10%', right: '10%' },
  { bottom: '10%', left: '10%' },
  { bottom: '10%', right: '10%' },
  { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
];

const HoverEffectComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
        {/* Empty mask div to apply the effect */}
      </motion.div>

      <div className={styles.body}>
        {pairs.map((pair, index) => (
          <div
            className={styles.pair}
            key={index}
            style={positions[index] || {}}
          >
            {pair.map((text, i) => (
              <p
                key={i}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {text}
              </p>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

export default HoverEffectComponent;
