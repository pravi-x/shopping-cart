import navStyles from "./NavigationBar.module.css"; // adjust path
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/pravi-x"
        target="_blank"
        rel="noopener noreferrer"
        className={navStyles.link}
      >
        <GitHubIcon className={styles.footer} />
        pravi-x
      </a>
    </footer>
  );
}

function GitHubIcon() {
  return (
    <svg
      height="24"
      width="24"
      viewBox="0 0 16 16"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.22 2.2.82a7.68 7.68 0 012 0c1.53-1.04 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export default Footer;
