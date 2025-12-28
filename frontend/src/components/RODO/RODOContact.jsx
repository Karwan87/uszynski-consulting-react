import React, { useEffect } from "react";
import styles from "../RODO/RODOContact.module.css";

const RODOContact = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Blokuje scroll strony
    } else {
      document.body.style.overflow = "unset"; // Przywraca scroll strony
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>
          ✕
        </button>

        <h3 style={{ color: "#2c4575", marginTop: 0 }}>
          Obowiązek Informacyjny RODO
        </h3>
        <p style={{ color: "black", fontSize: "14px" }}>
          Na podstawie art. 13 ust. 1 i 2 RODO informuję, że:
        </p>
        <ol className={styles.list}>
          <li>
            <strong>Administratorem</strong> danych osobowych jest Uszyński
            Consulting, NIP: 6922384466.
          </li>
          <li>
            <strong>Cel:</strong> Dane przetwarzane są w celu organizacji
            spotkania konsultacyjnego oraz kontaktu związanego z usługą.
          </li>
          <li>
            <strong>Podstawa prawna:</strong> Podstawą prawną przetwarzania
            danych jest art. 6 ust. 1 lit. b RODO (działania zmierzające do
            zawarcia umowy) oraz art. 6 ust. 1 lit. f RODO (prawnie uzasadniony
            interes administratora polegający na kontakcie z osobą zgłaszającą).
          </li>
          <li>
            <strong>Dobrowolność:</strong> Podanie danych osobowych jest
            dobrowolne, jednak niezbędne do realizacji kontaktu.
          </li>
          <li>
            <strong>Długość przechowywania:</strong> Dane osobowe będą
            przechowywane przez okres niezbędny do realizacji celu kontaktu, a
            następnie mogą być archiwizowane zgodnie z obowiązującymi przepisami
            prawa.
          </li>
          <li>
            <strong>Prawa:</strong> Osobie, której dane dotyczą, przysługuje
            prawo dostępu do danych, ich sprostowania, ograniczenia
            przetwarzania, usunięcia oraz wniesienia sprzeciwu.
          </li>
          <li>
            <strong>Informacja:</strong> Przysługuje również prawo wniesienia
            skargi do Prezesa Urzędu Ochrony Danych Osobowych.
          </li>
          <li>
            <strong>Bezpieczeństwo:</strong> Dane nie będą udostępniane osobom
            trzecim.
          </li>
        </ol>
        <button onClick={onClose} className={styles.acceptButton}>
          Rozumiem
        </button>
      </div>
    </div>
  );
};

export default RODOContact;
