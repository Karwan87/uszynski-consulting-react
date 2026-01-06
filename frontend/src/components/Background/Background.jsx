import styles from "../Background/background.module.css";
import { Link } from "react-router-dom";

const Background = () => {
  return (
    <>
      <Link to="/" className={styles.logo}>
        <svg
          className={styles.LogoIcon}
          viewBox="0 0 1280 1024"
          aria-label="Uszyński Consultiing - strona główna"
        >
          <use href="/sprite.svg#img-logo-transparent"></use>
        </svg>
      </Link>
      <div className={styles.background_shapes}>
        <svg
          className={`${styles.shape} ${styles["shape-1"]}`}
          viewBox="0 0 200 200"
        >
          <use href="/sprite.svg#img-shape-with-stripe"></use>
        </svg>
        <svg
          className={`${styles.shape} ${styles["shape-2"]}`}
          viewBox="0 0 200 200"
        >
          <use href="/sprite.svg#img-shape-circle"></use>
        </svg>
        <svg
          className={`${styles.shape} ${styles["shape-3"]}`}
          viewBox="0 0 200 200"
        >
          <use href="/sprite.svg#img-shape-fully-circle"></use>
        </svg>
        <svg
          className={`${styles.shape} ${styles["shape-4"]}`}
          viewBox="0 0 200 200"
        >
          <use href="/sprite.svg#img-shape-dots-circle"></use>
        </svg>
        <svg
          className={`${styles.shape} ${styles["shape-5"]}`}
          viewBox="0 0 200 200"
        >
          <use href="/sprite.svg#img-shape-fully-circle"></use>
        </svg>
        <svg
          className={`${styles.shape} ${styles["shape-6"]}`}
          viewBox="0 0 200 200"
        >
          <use href="/sprite.svg#img-shape-dots-circle"></use>
        </svg>
        <svg
          className={`${styles.shape} ${styles["shape-7"]}`}
          viewBox="0 0 200 200"
        >
          <use href="/sprite.svg#img-shape-with-stripe"></use>
        </svg>
        <svg
          className={`${styles.shape} ${styles["shape-8"]}`}
          viewBox="0 0 200 200"
        >
          <use href="/sprite.svg#img-shape-circle"></use>
        </svg>
      </div>
    </>
  );
};

export default Background;
