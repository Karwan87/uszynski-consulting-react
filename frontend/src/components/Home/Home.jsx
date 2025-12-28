import { Link } from "react-router-dom";
import stylesHome from "./Home.module.css";
import stylesWhyus from "./Whyus.module.css";

const Home = () => {
  return (
    <>
      <div className={stylesHome.home}>
        <div className={stylesHome.container}>
          <p className={stylesHome.banner}>TWOJA FIRMA.</p>
          <p className={stylesHome.banner}>NASZE WSPARCIE.</p>
          <p className={stylesHome.banner}>WSPÓLNY KIERUNEK.</p>
        </div>
        <p className={stylesHome.description}>Mały Biznes, Duży wpływ.</p>
      </div>
      <div className={stylesHome.container_btn}>
        <Link to="/contact" className={stylesHome.contact_btn}>
          ZAPYTAJ O SZCZEGÓŁY
        </Link>
      </div>

      <section className={stylesWhyus.whyussection}>
        <h2 className={stylesWhyus.sectiontitle}>Dlaczego My?</h2>
        <div className={stylesWhyus.featureitem}>
          <div className={stylesWhyus.contenttext}>
            <h3>Wsparcie operacyjne firm</h3>
            <p>
              Zapewniamy bieżące wsparcie w organizacji pracy przedsiębiorstw.
              Przejmujemy obsługę wybranych procesów operacyjnych, przygotowanie
              materiałów roboczych oraz porządkowanie dokumentów i systemów
              (CRM, e-commerce, arkusze danych, systemy logistyczne), odciążając
              zespoły wewnętrzne.
            </p>
          </div>
          <div className={stylesWhyus.contentimage}>
            <svg
              className={stylesWhyus.svg}
              viewBox="0 0 800 800"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <use href="/sprite.svg#task_mngmt" />
            </svg>
          </div>
        </div>

        <div className={`${stylesWhyus.featureitem} ${stylesWhyus.reverse}`}>
          <div className={stylesWhyus.contenttext}>
            <h3>Procedury i dokumentacja operacyjna</h3>
            <p>
              Opracowujemy praktyczną dokumentację wykorzystywaną w codziennej
              pracy firmy: instrukcje operacyjne, opisy procesów, regulaminy,
              szablony i materiały wewnętrzne. Dbamy o jasność, spójność i
              możliwość realnego zastosowania w organizacji.
            </p>
          </div>
          <div className={stylesWhyus.contentimage}>
            <svg
              className={stylesWhyus.svg}
              viewBox="0 0 800 600"
              aria-hidden="true"
            >
              <use href="/sprite.svg#documentation" />
            </svg>
          </div>
        </div>

        <div className={stylesWhyus.featureitem}>
          <div className={stylesWhyus.contenttext}>
            <h3>Analizy danych operacyjnych</h3>
            <p>
              Przygotowujemy zestawienia, raporty i wizualizacje danych
              operacyjnych w oparciu o Excel, Google Sheets i podstawowe
              narzędzia BI. Nasze działania obejmują porządkowanie danych,
              monitorowanie wskaźników oraz techniczne przygotowanie materiałów
              wspierających bieżące zarządzanie.
            </p>
          </div>
          <div className={stylesWhyus.contentimage}>
            <svg
              className={stylesWhyus.svg}
              viewBox="0 0 800 600"
              aria-hidden="true"
            >
              <use href="/sprite.svg#operation_data" />
            </svg>
          </div>
        </div>
        <div className={`${stylesWhyus.featureitem} ${stylesWhyus.reverse}`}>
          <div className={stylesWhyus.contenttext}>
            <h3>Logistyka i e-commerce</h3>
            <p>
              Wspieramy firmy w obsłudze procesów logistycznych i e-commerce, w
              tym zwrotów, reklamacji, kompletacji zamówień oraz organizacji
              pracy magazynu. Skupiamy się na usprawnieniu codziennej obsługi i
              poprawie płynności operacyjnej.
            </p>
          </div>
          <div className={stylesWhyus.contentimage}>
            <svg
              className={stylesWhyus.svg}
              viewBox="0 0 800 400"
              aria-hidden="true"
            >
              <use href="/sprite.svg#logistics_operations" />
            </svg>
          </div>
        </div>
      </section>
      <section className={stylesWhyus.order}>
        <h2 className={stylesWhyus.invitation}>
          Uporządkuj działania swojej firmy
        </h2>
        <p className={stylesWhyus.invdscrp}>
          Pomagamy firmom działać sprawniej każdego dnia — bez korporacyjnych
          struktur i zbędnej teorii. Przejmujemy operacyjne wsparcie tam, gdzie
          liczy się porządek, dane i sprawna organizacja.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSel--4hU_OWLpNHjOtLW-MfS45yIlsl1s1kSBXO8fkAC4506w/viewform?usp=sharing&ouid=104054488937346203186"
          className={stylesWhyus.order_btn}
          target="_blank"
          rel="noopener noreferrer"
        >
          UMÓW BEZPŁATNĄ ROZMOWĘ
        </a>
      </section>
    </>
  );
};

export default Home;
