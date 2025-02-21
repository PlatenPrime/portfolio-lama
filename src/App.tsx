import { Contact } from "./components/contact/Contact";
import { Hero } from "./components/hero/Hero";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Services } from "./components/services/Services";
import "./index.css";

function App() {
  return (
    <div className="container">
      <section className="#home">
        <Hero />
      </section>
      <section className="#services">
        <Services />
      </section>
      <section className="#portfolio">
        <Portfolio />
      </section>
      <section className="#contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
