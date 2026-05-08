import styles from "../Services/Services.module.css";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Usługi — Uszyński Consulting</title>
        <meta name="description" content="Wsparcie operacyjne, automatyzacja procesów, analizy danych, panele operacyjne i Fractional COO dla firm e-commerce. Sprawdź pełną ofertę." />
      </Helmet>
      <div className={styles.servicescontainer}>
        <div className={styles.servicesdescription}>
          <h1 className={styles.servicestitle}>Operacje. Dane. Decyzje.</h1>
          <p className={styles.servicesdetails}>
            Sprawnie zorganizowane procesy i uporządkowane dane operacyjne dają
            przedsiębiorcy realną podstawę do podejmowania decyzji opartych na
            faktach, a nie domysłach.
          </p>
        </div>
        <div className={styles.servicesoffers}>
          <div className={styles.box}>
            <div className={styles.boximg}>
              <svg
                className={styles.svg}
                viewBox="0 0 800 545"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                <use href="/sprite.svg#ideas-flow" />
              </svg>
            </div>
            <div className={styles.boxdescription}>
              <h2>Operacje</h2>
              Zapewniamy wsparcie w bieżącej organizacji pracy firmy. Obejmuje
              ono porządkowanie procesów operacyjnych, przygotowanie
              dokumentacji roboczej, organizację zadań zespołów oraz
              usprawnienie codziennych działań administracyjnych i operacyjnych.
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.boximg}>
              <svg
                className={styles.svg}
                viewBox="0 0 800 671"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                <use href="/sprite.svg#data-processing" />
              </svg>
            </div>
            <div className={styles.boxdescription}>
              <h2>Dane</h2>
              Przygotowujemy arkusze, zestawienia i raporty operacyjne
              wspierające codzienną pracę firmy. Porządkujemy dane, tworzymy
              czytelne struktury raportowe i wizualizacje umożliwiające ich
              praktyczne wykorzystanie.
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.boximg}>
              <svg
                className={styles.svg}
                viewBox="0 0 800 600"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                <use href="/sprite.svg#thought-process" />
              </svg>
            </div>
            <div className={styles.boxdescription}>
              <h2>Analizy operacyjne</h2>
              Wykonujemy analizy danych operacyjnych, porównania kosztów,
              zestawienia wariantów oraz opracowania pomocnicze wykorzystywane
              przy bieżących decyzjach organizacyjnych i zakupowych.
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.boximg}>
              <svg
                className={styles.svg}
                viewBox="0 0 1000 500"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                <use href="/sprite.svg#code-thinking" />
              </svg>
            </div>
            <div className={styles.boxdescription}>
              <h2>Automatyzacja procesów</h2>
              Projektuję i wdrażam automatyzacje które eliminują ręczną pracę.
              Łączę systemy i przepływy danych używając Make.com, Google Apps
              Script i narzędzi no-code/low-code dopasowanych do realnych
              potrzeb operacyjnych firmy.
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.boximg}>
              <svg
                className={styles.svg}
                viewBox="0 0 670 800"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                <use href="/sprite.svg#inflation" />
              </svg>
            </div>
            <div className={styles.boxdescription}>
              <h2>Analizy rynku</h2>
              Zbieram i porównuję dane rynkowe wspierające bieżące decyzje
              biznesowe: wyceny usług, analizy kosztów, porównania ofert
              dostawców i zestawienia pomocne przy planowaniu zakupów.
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.boximg}>
              <svg
                className={styles.svg}
                viewBox="0 0 800 800"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                <use href="/sprite.svg#task_mngmt" />
              </svg>
            </div>
            <div className={styles.boxdescription}>
              <h2>Fractional COO</h2>
              Działam jako zewnętrzny dyrektor operacyjny — bez kosztów pełnego
              etatu. Wchodzę do firmy, diagnozuję procesy i wdrażam zmiany które
              można realnie utrzymać. Dla firm e-commerce, które potrzebują
              kogoś z kompetencjami COO, ale nie chcą tworzyć nowego stanowiska.
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.boximg}>
              <svg
                className={styles.svg}
                viewBox="0 0 888 711"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                <use href="/sprite.svg#server-cluster" />
              </svg>
            </div>
            <div className={styles.boxdescription}>
              <h2>Wdrożenia i integracje systemów</h2>
              Łączę systemy używane w firmie e-commerce: platformy sprzedażowe,
              hurtownie, systemy magazynowe i narzędzia do obsługi zamówień.
              Wdrażam integracje które redukują ręczną pracę i eliminują błędy
              wynikające z przepisywania danych.
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.boximg}>
              <svg
                className={styles.svg}
                viewBox="0 0 800 600"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                <use href="/sprite.svg#operation_data" />
              </svg>
            </div>
            <div className={styles.boxdescription}>
              <h2>Panele operacyjne i dashboardy</h2>
              Buduję czytelne panele operacyjne w Looker Studio i Google Sheets,
              dostosowane do codziennego zarządzania firmą e-commerce. Właściciel
              lub manager widzi kluczowe wskaźniki w jednym miejscu — bez
              ręcznego zbierania danych co poniedziałek.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
