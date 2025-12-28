import styles from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.description}>
          <p className={styles.text}>
            © 2025 Uszyński Consulting. Wszystkie prawa zastrzeżone.
          </p>
          <div className={styles.socials}>
            <a
              href="https://www.linkedin.com/in/damian-uszy%C5%84ski-058584249/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn – Uszyński Consulting"
              className={styles.socialLink}
            >
              <svg
                className={styles.svg}
                viewBox="0 0 30 30"
                aria-hidden="true"
              >
                <use href="/sprite.svg#linkedin" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
