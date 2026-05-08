import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import stylesHome from "./Home.module.css";
import stylesWhyus from "./Whyus.module.css";
import ConsultationModal from "../ConsultationModal/ConsultationModal";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const timer = setTimeout(() => {
        document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: "smooth" });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Uszyński Consulting — Fractional COO i automatyzacja procesów</title>
        <meta name="description" content="Automatyzuję procesy operacyjne firm e-commerce. Buduję systemy raportowania, integracje i automatyzacje które działają bez codziennego nadzoru. Fractional COO w modelu B2B." />
      </Helmet>
      <div className={stylesHome.home}>
        <div className={stylesHome.container}>
          <h1 className={stylesHome.banner}>Operacje. Dane. Decyzje.</h1>
        </div>
        <p className={stylesHome.description}>
          Automatyzuję procesy operacyjne firm e-commerce. Buduję systemy które
          działają bez Ciebie — i dają Ci dane do podejmowania lepszych decyzji.
        </p>
      </div>
      <div className={stylesHome.container_btn}>
        <button
          className={stylesHome.contact_btn}
          onClick={() => setModalOpen(true)}
        >
          UMÓW BEZPŁATNĄ ROZMOWĘ
        </button>
      </div>

      <section className={stylesWhyus.whyussection}>
        <h2 className={stylesWhyus.sectiontitle}>DLACZEGO USZYŃSKI CONSULTING?</h2>
        <p className={stylesWhyus.sectionintro}>
          Łączę wiedzę ekonomiczną z kompetencjami technicznymi. Rozumiem jakie
          wskaźniki są istotne w e-commerce i potrafię zbudować narzędzia które
          je dostarczają automatycznie.
        </p>
        <div className={stylesWhyus.featureitem}>
          <div className={stylesWhyus.contenttext}>
            <h3>Wsparcie operacyjne firm</h3>
            <p>
              Przejmuję bieżące wsparcie operacyjne firmy e-commerce. Porządkuję
              procesy, buduję dokumentację roboczą i organizuję przepływ danych
              między systemami — odciążając właściciela i zespół od codziennego
              chaosu informacyjnego.
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
              Opracowuję praktyczną dokumentację wykorzystywaną w codziennej
              pracy firmy: instrukcje operacyjne, opisy procesów, regulaminy i
              materiały wewnętrzne. Dbam o jasność i możliwość realnego
              zastosowania w organizacji.
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
              Buduję raporty i systemy raportowania sprzedaży, marży, zwrotów i
              cash flow. Wiem jakie wskaźniki są istotne w e-commerce — i
              dostarczam je w formie gotowej do podjęcia decyzji, nie do dalszej
              analizy.
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
              Wspieram firmy w obsłudze procesów e-commerce: zarządzanie
              magazynem, planowanie zapasów, monitoring zwrotów i organizacja
              kompletacji zamówień. 7 lat w operacjach logistycznych dało mi
              wiedzę jak te procesy działają od środka.
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

      <section id="o-mnie" className={stylesWhyus.aboutsection}>
        <h2 className={stylesWhyus.abouttitle}>O mnie</h2>
        <p className={stylesWhyus.aboutparagraph}>
          Jestem Damian Uszyński — praktyk operacyjny z 7-letnim doświadczeniem
          w logistyce i e-commerce. Działam jako Fractional COO: dostarczam
          kompetencje dyrektora operacyjnego w modelu B2B, bez kosztów pełnego
          etatu.
        </p>
        <p className={stylesWhyus.aboutparagraph}>
          Łączę wiedzę ekonomiczną z umiejętnościami technicznymi — rozumiem
          procesy biznesowe od środka i potrafię je zautomatyzować. Buduję
          systemy raportowania, automatyzacje przepływu danych i panele
          operacyjne które działają bez codziennego nadzoru.
        </p>
        <p className={stylesWhyus.aboutparagraph}>
          Pracuję z firmami e-commerce które chcą podejmować decyzje w oparciu
          o dane — nie o przeczucia.
        </p>
        <div className={stylesWhyus.aboutcontact}>
          <p>
            <Link to="/contact">
              d.uszynski@uszynskiconsulting.pl
            </Link>
          </p>
          <p>
            <a href="tel:+48884519407">+48 884 519 407</a>
          </p>
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
        <button
          className={stylesWhyus.order_btn}
          onClick={() => setModalOpen(true)}
        >
          UMÓW BEZPŁATNĄ ROZMOWĘ
        </button>

        <ConsultationModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </section>
    </>
  );
};

export default Home;
