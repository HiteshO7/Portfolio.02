import styles from './style.module.scss';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.header}>Socials</div>
      <div className={styles.footer}>
        <a href="https://github.com/HiteshO7" target="_blank" rel="noopener noreferrer" className={styles.link}>Github</a>
        <a href="https://www.instagram.com/_hitesh.thakur/" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.link}>Twitter</a>
        <a href="https://www.linkedin.com/in/hitesh-thakur07/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
      </div>
    </div>
  );
}
