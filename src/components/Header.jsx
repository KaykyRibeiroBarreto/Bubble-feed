import styles from './Header.module.css';
console.log(styles); 

export function Header() {
  return (
    <header className={styles.header}>
      <h1 >Bubble Feed</h1>
    </header>
  );
}
