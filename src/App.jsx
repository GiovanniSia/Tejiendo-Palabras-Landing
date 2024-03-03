import "./App.css";
import WhatWeDo from "./components/whatWeDo/WhatWeDo";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import DesignCarousel from "./components/designCarousel/DesignCarousel";
import Separator from "./global/Separator";

function App() {
  return (
    <>
      <div className="containerMain">
        <Header />
        <main>
          <Separator />
          <WhatWeDo />
          <Separator />
          <DesignCarousel />
          <Separator />
          <Contact />
          <Separator />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
