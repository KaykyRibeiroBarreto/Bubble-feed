import styles from './Header.module.css';
import bubbleLogo from '../assets/bubble-logo.png';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={bubbleLogo} alt="Bubble Feed" />
      <h1>Bubble Feed</h1>
    </header>
  );
}
