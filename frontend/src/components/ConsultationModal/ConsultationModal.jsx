import React, { useState } from "react";
import styles from "./ConsultationModal.module.css";

const SHEETS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbygfY4Cym1NUEJU2CS4P0tczone1i42XyUCAF11aJ3Pf48XlnYdcdJAvrfZmDO5lbGX/exec"; // ← TU WSTAW SWÓJ URL

const ConsultationModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [ConsentRegulations, setConsentRegulations] = useState(false);
  const [ConsentRodo, setConsentRodo] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    details: "",
    dateTime: "",
    meetingType: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  /* ------------------ HELPERS ------------------ */

  const resetForm = () => {
    setFormData({
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      details: "",
      dateTime: "",
      meetingType: "",
      notes: "",
    });
    setErrors({});
    setStep(1);
  };

  const closeModal = () => {
    resetForm();
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  /* ------------------ VALIDATION ------------------ */

  // const validateStep1 = () => {
  //   const newErrors = {};
  //   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
  //     newErrors.email = "Podaj poprawny adres e-mail.";
  //   }
  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  const validateStep3 = () => {
    const newErrors = {};

    if (!/^[A-Za-zÀ-žąćęłńóśżźĄĆĘŁŃÓŚŻŹ\s-]{2,}$/.test(formData.firstName)) {
      newErrors.firstName = "Podaj poprawne imię.";
    }

    if (!/^[A-Za-zÀ-žąćęłńóśżźĄĆĘŁŃÓŚŻŹ\s-]{2,}$/.test(formData.lastName)) {
      newErrors.lastName = "Podaj poprawne nazwisko.";
    }

    if (
      formData.phone &&
      !/^\+\d{7,15}$/.test(formData.phone.replace(/\s/g, ""))
    ) {
      newErrors.phone =
        "Podaj numer w formacie międzynarodowym, np. +48123123123.";
    }

    if (!formData.details || formData.details.length < 5) {
      newErrors.details = "Opisz krótko potrzeby współpracy.";
    }

    if (!formData.dateTime) {
      newErrors.dateTime = "Wybierz termin.";
    }

    if (!formData.meetingType) {
      newErrors.meetingType = "Wybierz formę spotkania.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ------------------ SUBMIT ------------------ */

  const handleSubmit = async () => {
    if (!validateStep3()) return;
    setLoading(true);
    const payload = {
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      details: formData.details,
      dateTime: formData.dateTime,
      meetingType: formData.meetingType,
      notes: formData.notes,
    };

    try {
      await fetch(SHEETS_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });
      setStep(4); // traktujemy jako sukces
    } catch (err) {
      console.error(err);
      alert("Nie udało się wysłać zgłoszenia.");
    } finally {
      setLoading(false);
    }
  };

  /* ------------------ STEP HANDLERS ------------------ */

  const nextFromStep1 = (accepted) => {
    if (!accepted) {
      setConsentRegulations(false);
      setStep(5);
      return;
    }

    setConsentRegulations(true);
    setStep(2);
  };

  const nextFromStep2 = (accepted) => {
    if (!accepted) {
      setConsentRodo(false);
      setStep(5);
      return;
    }

    setConsentRodo(true);
    setStep(3);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={closeModal}>
          ✕
        </button>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h2 className={styles.header}>Regulamin bezpłatnej konsultacji</h2>
            <div className={styles.scrollBox}>
              <div className={styles.description}>
                <p>Treść regulaminu</p>
                <p>
                  1. Konsultacja jest bezpłatna i niezobowiązująca, trwa
                  maksymalnie 30 minut.
                </p>
                <p>
                  2. Spotkanie ma charakter wstępny – nie obejmuje pełnej
                  analizy procesów ani przygotowania dokumentów.
                </p>
                <p>
                  3. Termin spotkania zostanie potwierdzony mailowo. Organizator
                  zastrzega sobie możliwość zmiany terminu w razie przeszkód
                  organizacyjnych.
                </p>
                <p>
                  4. Jedna osoba może skorzystać z jednej bezpłatnej
                  konsultacji.
                </p>
                <ul>5. Podczas spotkania możemy porozmawiać o:</ul>
                <li>- zakresie usług, </li>
                <li>- potrzebach usługodawcy, </li>
                <li> - oczekiwaniach dotyczących ewentualnej współpracy.</li>

                <p>
                  6. Organizator zastrzega sobie prawo do odmowy realizacji
                  konsultacji w przypadku braku zgodności z zakresem
                  działalności lub rażącego naruszenia zasad współpracy.
                </p>
                <p>
                  7. W przypadku spóźnienia powyżej 10 minut bez uprzedzenia –
                  konsultacja może zostać anulowana.
                </p>
              </div>
              <div className={styles.actions}>
                <button onClick={() => nextFromStep1(false)}>
                  Nie zgadzam się
                </button>
                <button onClick={() => nextFromStep1(true)}>Zgadzam się</button>
              </div>
            </div>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <div className={styles.description}>
              <h2 className={styles.header}>RODO</h2>
              <div className={styles.scrollBox}>
                <p>Treść obowiązku informacyjnego</p>
                <ul>Na podstawie art. 13 ust. 1 i 2 RODO informuję, że:</ul>

                <li>
                  1. Administratorem danych osobowych jest Uszyński Consulting,
                  NIP: 6922384466.
                </li>

                <li>
                  2. Cel: Dane przetwarzane są w celu organizacji spotkania
                  konsultacyjnego oraz kontaktu związanego z usługą.
                </li>

                <li>
                  3. Podstawa prawna: Podstawą prawną przetwarzania danych jest
                  art. 6 ust. 1 lit. b RODO (działania zmierzające do zawarcia
                  umowy) oraz art. 6 ust. 1 lit. f RODO (prawnie uzasadniony
                  interes administratora polegający na kontakcie z osobą
                  zgłaszającą).
                </li>

                <li>
                  4. Dobrowolność: Podanie danych osobowych jest dobrowolne,
                  jednak niezbędne do realizacji kontaktu.
                </li>

                <li>
                  5. Długość przechowywania: Dane osobowe będą przechowywane
                  przez okres niezbędny do realizacji celu kontaktu, a następnie
                  mogą być archiwizowane zgodnie z obowiązującymi przepisami
                  prawa.
                </li>

                <li>
                  6. Prawa: Osobie, której dane dotyczą, przysługuje prawo
                  dostępu do danych, ich sprostowania, ograniczenia
                  przetwarzania, usunięcia oraz wniesienia sprzeciwu.
                </li>

                <li>
                  7. Informacja: Przysługuje również prawo wniesienia skargi do
                  Prezesa Urzędu Ochrony Danych Osobowych.
                </li>

                <li>
                  8. Bezpieczeństwo: Dane nie będą udostępniane osobom trzecim.
                </li>

                <div className={styles.actions}>
                  <button onClick={() => nextFromStep2(false)}>
                    Nie zgadzam się
                  </button>
                  <button onClick={() => nextFromStep2(true)}>
                    Zgadzam się
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <div className={styles.form}>
              <h2 className={styles.header}>Informacje do konsultacji</h2>

              <input
                className={styles.textbox}
                type="text"
                name="firstName"
                placeholder="Imię"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <p className={styles.error}>{errors.firstName}</p>
              )}

              <input
                className={styles.textbox}
                type="text"
                name="lastName"
                placeholder="Nazwisko"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <p className={styles.error}>{errors.lastName}</p>
              )}

              <input
                className={styles.textbox}
                type="tel"
                name="phone"
                placeholder="Telefon (opcjonalnie)"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className={styles.error}>{errors.phone}</p>}

              <textarea
                className={styles.notes}
                name="details"
                placeholder="Opisz krótko potrzeby współpracy"
                value={formData.details}
                onChange={handleChange}
              />
              {errors.details && (
                <p className={styles.error}>{errors.details}</p>
              )}

              <input
                className={styles.textbox}
                type="datetime-local"
                name="dateTime"
                value={formData.dateTime}
                onChange={handleChange}
              />
              {errors.dateTime && (
                <p className={styles.error}>{errors.dateTime}</p>
              )}

              <select
                className={styles.notes}
                name="meetingType"
                value={formData.meetingType}
                onChange={handleChange}
              >
                <option value="">Forma spotkania</option>
                <option value="Google Meet">Google Meet</option>
                <option value="Telefon">Telefon</option>
                <option value="Spotkanie osobiste">Spotkanie osobiste</option>
              </select>
              {errors.meetingType && (
                <p className={styles.error}>{errors.meetingType}</p>
              )}

              <textarea
                className={styles.notes}
                name="notes"
                placeholder="Uwagi (opcjonalnie)"
                value={formData.notes}
                onChange={handleChange}
              />

              <button disabled={loading} onClick={handleSubmit}>
                {loading ? "Wysyłanie..." : "Wyślij"}
              </button>
            </div>
          </>
        )}

        {/* STEP 4 — SUCCESS */}
        {step === 4 && (
          <>
            <h2 className={styles.header}>Dziękujemy!</h2>
            <p>
              Twoje zgłoszenie zostało wysłane. Skontaktujemy się z Tobą
              wkrótce.
            </p>
            <button onClick={closeModal}>Zamknij</button>
          </>
        )}

        {/* STEP 5 — CANCEL */}
        {step === 5 && (
          <>
            <h2 className={styles.header}>Brak zgody</h2>
            <p>
              Brak akceptacji regulaminu lub RODO uniemożliwia realizację
              bezpłatnej konsultacji.
            </p>
            <button onClick={closeModal}>Zamknij</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ConsultationModal;
