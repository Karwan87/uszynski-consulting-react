import styles from "../Contact/Contact.module.css";
import React, { useState } from "react";
import RODOContact from "../RODO/RODOContact";

const Contact = () => {
  const [gdprAccepted, setGdprAccepted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // 1. Walidacja Imienia i Nazwiska
    if (name === "firstName" || name === "lastName") {
      const regex = /^[A-Za-zÀ-žąćęłńóśżźĄĆĘŁŃÓŚŻŹ\s-]*$/;
      if (!regex.test(value)) {
        setErrors((prev) => ({
          ...prev,
          [name]: "Użyto niedozwolonego znaku",
        }));
        return; // Blokuje wpisanie znaku
      } else {
        // Jeśli znak jest poprawny, czyścimy komunikat o błędzie
        setErrors((prev) => ({ ...prev, [name]: null }));
      }
    }
    // 2. Walidacja Telefonu
    if (name === "phone") {
      // A. Wymuszamy "+" na początku. Jeśli użytkownik usunie wszystko, przywracamy "+"
      let formattedValue = value;
      if (!formattedValue.startsWith("+")) {
      }
      // B. Dozwolone tylko "+" na początku i cyfry (usuwamy spacje/myślniki do walidacji surowych danych)
      const rawNumbers = formattedValue.slice(1).replace(/\D/g, ""); // same cyfry po plusie

      // C. Ograniczamy do 11 cyfr (2 kierunkowy + 9 numer)
      const limitedNumbers = rawNumbers.substring(0, 11);

      // D. Budujemy formatowanie: +XX XXX-XXX-XXX
      let finalDisplay = "+";
      if (limitedNumbers.length > 0) {
        const partCountry = limitedNumbers.substring(0, 2); // pierwsze dwie
        const partRest = limitedNumbers.substring(2); // reszta

        finalDisplay += partCountry;

        if (partRest.length > 0) {
          finalDisplay += " " + partRest.substring(0, 3); // Spacja po kierunkowym i pierwsze 3 cyfry
          if (partRest.length > 3) {
            finalDisplay += "-" + partRest.substring(3, 6); // Myślnik
          }
          if (partRest.length > 6) {
            finalDisplay += "-" + partRest.substring(6, 9); // Myślnik
          }
        }
      }

      setFormData((prevState) => ({ ...prevState, [name]: finalDisplay }));

      // Prosta walidacja długości dla komunikatu błędu
      if (limitedNumbers.length < 11) {
        setErrors((prev) => ({
          ...prev,
          [name]: "Wymagane 11 cyfr",
        }));
      } else {
        setErrors((prev) => ({ ...prev, [name]: null }));
      }
      return; // Kończymy tutaj, bo sami zaktualizowaliśmy stan powyżej
    }

    // 3. Dla pozostałych pól (email, message) też czyścimy błędy przy zmianie
    if (name === "email" || name === "message") {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }

    // Zawsze aktualizujemy stan, jeśli funkcja nie została przerwana przez "return" powyżej
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleFocus = (e) => {
    const { name, value } = e.target;
    // Jeśli użytkownik kliknie w pole telefonu i jest ono puste, wstawiamy "+"
    if (name === "phone" && value === "") {
      setFormData((prevState) => ({ ...prevState, [name]: "+" }));
    }
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    // Jeśli użytkownik wyjdzie z pola, a tam jest tylko sam "+", czyścimy pole
    if (name === "phone" && value === "+") {
      setFormData((prevState) => ({ ...prevState, [name]: "" }));
      // Opcjonalnie: czyścimy błąd "Wymagane 11 cyfr", żeby nie straszył po wyjściu z pola
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!/^[A-Za-zÀ-žąćęłńóśżźĄĆĘŁŃÓŚŻŹ\s-]{2,}$/.test(formData.firstName)) {
      newErrors.firstName = "Błędne dane.";
    }

    if (!/^[A-Za-zÀ-žąćęłńóśżźĄĆĘŁŃÓŚŻŹ\s-]{2,}$/.test(formData.lastName)) {
      newErrors.lastName = "Błędne dane.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // 1. Walidacja przed wysyłką
    if (!validate()) return;

    try {
      // 2. Używamy Twojej prawdziwej domeny
      const response = await // fetch(`${API_URL}/api/contact`);
      fetch(
        //do testu lokalnego
        // "http://localhost:3000/api/contact",
        //do pracy na stronie
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      // 3. Sprawdzenie, czy serwer w ogóle odpowiedział (np. czy nie ma 404)
      if (!response.ok) {
        throw new Error(
          "Serwer nie odpowiada (status: " + response.status + ")"
        );
      }

      const result = await response.json();

      if (result.status === "success") {
        alert("Wiadomość została wysłana!");
        // Czyszczenie formularza po sukcesie
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        // Opcjonalnie: wyczyść błędy
        setErrors({});
      } else {
        alert("Błąd serwera: " + result.message);
      }
    } catch (error) {
      // 4. Obsługa błędów sieciowych lub braku połączenia
      console.error("Szczegóły błędu:", error);
      alert(
        "Nie udało się wysłać wiadomości. Jeśli problem się powtarza, spróbuj później."
      );
    }
  };

  return (
    <>
      {" "}
      <div className={styles.contactcontainer}>
        <div className={styles.infocontainer}>
          <div className={styles.titlecontainer}>Znajdziesz nas tutaj</div>
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
        <div className={styles.contactsection}>
          <h1 className={styles.title}>Napisz do nas</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.wrap}>
              <div className={styles.form_group}>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Imię*"
                    value={formData.firstName}
                    onChange={handleChange}
                    pattern="[A-Za-zĄąĆćĘęŁłŃńÓóŚśŻżŹź\s\-]+"
                    title="Pole może zawierać tylko litery"
                    required
                  />
                  {errors.firstName && (
                    <span className={styles.error}>{errors.firstName}</span>
                  )}
                </div>
              </div>

              <div className={styles.form_group}>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Nazwisko*"
                    value={formData.lastName}
                    onChange={handleChange}
                    pattern="[A-Za-zĄąĆćĘęŁłŃńÓóŚśŻżŹź\s\-]+"
                    title="Pole może zawierać tylko litery"
                    required
                  />
                  {errors.lastName && (
                    <span className={styles.error}>{errors.lastName}</span>
                  )}
                </div>
              </div>

              <div className={styles.form_group}>
                <div className={styles.inputWrapper}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <span className={styles.error}>{errors.email}</span>
                  )}
                </div>
              </div>

              <div className={styles.form_group}>
                <div className={styles.inputWrapper}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Nr tel: +01 123456789* "
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    title="Podaj numer z kierunkowym kraju, np. +48 123456789"
                    required
                  />
                  {errors.phone && (
                    <span className={styles.error}>{errors.phone}</span>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.form_msg}>
                <textarea
                  name="message"
                  placeholder="Wiadomość - maksymalnie 2000 znaków*"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={2000}
                  required
                />
                {errors.message && (
                  <span className={styles.error}>{errors.message}</span>
                )}
              </div>
              <div
                className={styles.gdprContainer}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  textAlign: "left",
                }}
              >
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id="gdpr"
                  checked={gdprAccepted}
                  onChange={(e) => setGdprAccepted(e.target.checked)}
                  style={{ cursor: "pointer" }}
                  required
                />
                <label
                  className={styles.label}
                  htmlFor="gdpr"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  Akceptuję przetwarzanie moich danych osobowych w celu
                  kontaktu.
                  <span
                    onClick={() => setIsModalOpen(true)}
                    style={{
                      color: "#ffffffff",
                      textDecoration: "underline",
                      cursor: "pointer",
                      marginLeft: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    Pełna treść obowiązku informacyjnego.
                  </span>
                </label>
              </div>
              <div className={styles.buttonContainer}>
                <button type="submit" className={styles.send_btn}>
                  Wyślij wiadomość
                </button>
              </div>
            </div>
            <RODOContact
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
