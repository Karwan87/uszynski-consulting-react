import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "./components/AnimatedPage/AnimatedPage";

function App() {
  const location = useLocation();
  return (
    <>
      <Background />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <AnimatedPage>
                <Home />
              </AnimatedPage>
            }
          />
          <Route
            path="/services"
            element={
              <AnimatedPage>
                <Services />
              </AnimatedPage>
            }
          />
          <Route
            path="/contact"
            element={
              <AnimatedPage>
                <Contact />
              </AnimatedPage>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
