import "./Header.css";
import logo from "../../assets/logo.svg";
import logoInstagram from "../../assets/logoInstagram.svg";

const Header = () => {
  return (
    <div id="inicio" className="section1">
      <div className="container-send-colombia">
        <p>📍Envios nacionales - Colombia📍</p>
      </div>
      <div className="containerNavbar">
        <nav className="navbar">
          <a href="#inicio">Inicio</a>
          <a href="#designInstagram">Diseños</a>
          <a href="#contacto">Sobre Nosotros</a>
        </nav>
      </div>
      <div className="portada">
        <img src={logo} alt="Logo" className="logo" />
        <p>¡Tejidos Creativos y Personalizados! Crochet, Macramé y Letras</p>
        <button
          onClick={() =>
            (window.location.href =
              "https://www.instagram.com/tejiendo__palabras/")
          }
        >
          Contactanos{" "}
          <img
            src={logoInstagram}
            alt="Logo Instagram"
            className="logoInstagram"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
