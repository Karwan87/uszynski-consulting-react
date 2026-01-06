import React, { useState, useEffect, useRef } from "react";
import styles from "../Navbar/Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const mobileNavClasses = `${styles["mobile_nav"]} ${
    isMenuOpen ? styles.is_open : ""
  }`;
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  useEffect(() => {
    // Funkcja do obsługi kliknięcia
    function handleClickOutside(event) {
      // Sprawdzamy, czy kliknięcie miało miejsce i czy nie było wewnątrz elementu
      // na który wskazuje navRef (czyli poza menu mobilnym)
      if (navRef.current && !navRef.current.contains(event.target)) {
        // Jeśli kliknięto poza menu, zamykamy je
        setIsMenuOpen(false);
      }
    }

    // Dodajemy nasłuchiwacz zdarzeń do całego dokumentu
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup: Usuwamy nasłuchiwacz, gdy komponent zostanie odmontowany lub zaktualizowany
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]); // Efekt uruchomi się raz, gdy komponent się załaduje
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.nav_links}>
          {/* ... (dokończ też atrybuty to="/" tutaj!) ... */}
          <li className={styles.list_style}>
            <NavLink to="/">GŁÓWNA</NavLink>
          </li>
          <li className={styles.list_style}>
            <NavLink to="/services">USŁUGI</NavLink>
          </li>
          <li className={styles.list_style}>
            <NavLink to="/contact">KONTAKT</NavLink>
          </li>
        </ul>
        <div className={styles.burger_menu} onClick={toggleMenu}>
          {" "}
          {/* Dodaj onClick */}
          <svg className={styles.burger_menu_icon} viewBox="0 0 23 23">
            <use href="/sprite.svg#burger-menu"></use>
          </svg>
        </div>
        <div
          className={mobileNavClasses}
          ref={navRef} // 🚨 TUTAJ PRZYPISUJEMY REF!
        >
          <NavLink to="/" end onClick={toggleMenu}>
            GŁÓWNA
          </NavLink>
          <NavLink to="/services" onClick={toggleMenu}>
            USŁUGI
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu}>
            KONTAKT
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
