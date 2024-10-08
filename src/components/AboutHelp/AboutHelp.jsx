'use client';
import { motion } from 'framer-motion';
import styles from './style.module.scss';

export default function AboutHelp() {
    // Common animation variant with slower duration for text elements
    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, ease: 'easeOut' } // Slower transition (1.5 seconds)
        }
    };

    return (
        <div className={styles.main}>
            {/* Title animation */}
            <motion.div
                className={styles.title}
                initial="hidden"
                whileInView="visible"
                variants={textVariant}
                viewport={{ once: true, amount: 0.5 }} // Starts when 50% of the title is visible
            >
                <p>I can help you with ...</p>
            </motion.div>

            {/* Grid Container */}
            <div className={styles.gridContainer}>
                {/* Design Section */}
                <motion.div
                    className={styles.gridItem}
                    initial="hidden"
                    whileInView="visible"
                    variants={textVariant}
                    viewport={{ once: true, amount: 0.5 }} // Animation triggers at 50% visibility
                >
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        variants={textVariant}
                        viewport={{ once: true, amount: 0.5 }}
                    >01</motion.h1>
                    <hr />
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        variants={textVariant}
                        viewport={{ once: true, amount: 0.5 }}
                    >Design</motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        variants={textVariant}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)
                    </motion.p>
                </motion.div>

                {/* Development Section */}
                <motion.div
                    className={styles.gridItem}
                    initial="hidden"
                    whileInView="visible"
                    variants={textVariant}
                    viewport={{ once: true, amount: 0.5 }} // Animation triggers at 50% visibility
                >
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        variants={textVariant}
                        viewport={{ once: true, amount: 0.5 }}
                    >02</motion.h1>
                    <hr />
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        variants={textVariant}
                        viewport={{ once: true, amount: 0.5 }}
                    >Development</motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        variants={textVariant}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions, and interaction. Building with Webflow (or Kirby CMS).
                    </motion.p>
                </motion.div>

                {/* Full Package Section */}
                <motion.div
                    className={styles.gridItem}
                    initial="hidden"
                    whileInView="visible"
                    variants={textVariant}
                    viewport={{ once: true, amount: 0.5 }} // Animation triggers at 50% visibility
                >
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        variants={textVariant}
                        viewport={{ once: true, amount: 0.5 }}
                    >03</motion.h1>
                    <hr />
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        variants={textVariant}
                        viewport={{ once: true, amount: 0.5 }}
                    >The full package</motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        variants={textVariant}
                        viewport={{ once: true, amount: 1 }}
                    >
                        A complete website from concept to implementation, that&apos;s what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects.
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
}
