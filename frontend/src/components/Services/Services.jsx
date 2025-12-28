import styles from "../Services/Services.module.css";

const Services = () => {
  return (
    <>
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
                viewBox="0 0 888 711"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                <use href="/sprite.svg#server-cluster" />
              </svg>
            </div>
            <div className={styles.boxdescription}>
              <h2>ERP/SAP EWM</h2>
              Posiadamy doświadczenie w pracy z systemami klasy ERP, w
              szczególności SAP EWM, w obszarze intralogistyki, gospodarki
              magazynowej oraz zarządzania zapasami.
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
              <h2>Systemy i narzędzia</h2>
              Wspieramy rozwój i usprawnianie systemów oraz narzędzi
              wykorzystywanych w firmach, łącząc wiedzę operacyjną z technologią
              (React, Node.js). Nasze działania koncentrują się na dopasowaniu
              rozwiązań do rzeczywistych procesów operacyjnych.
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
              Zbieramy, porządkujemy i porównujemy dane rynkowe, w tym wyceny
              usług oraz materiałów eksploatacyjnych. Przygotowujemy zestawienia
              pomocne w ocenie ofert i kosztów bieżących.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
