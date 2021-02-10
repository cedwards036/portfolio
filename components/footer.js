import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear()} Copyright: Christopher Edwards
    </footer>
  );
}
