import "./App.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";

function App() {
  return (
    <>
      <div className="containerMain">
        <Header />
        <main>
          <MainContent />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
