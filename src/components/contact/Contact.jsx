import "./Contact.css";
import ImgLogoInstagram from "../../assets/logoInstagramBlue.svg";
import ImgLogoWhatsapp from "../../assets/logoWhatsapp.svg";

const Contact = () => {
  return (
    <div id="contacto" className="contact-section">
      <h1 className="title-general">Sobre nosotros</h1>
      <div className="contact-inside">
        <div className="contact">
          <h2>Contactanos</h2>
          <div className="contact-info">
            <div
              className="contact-item"
              onClick={() =>
                (window.location.href =
                  "https://www.instagram.com/tejiendo__palabras/")
              }
            >
              <img className="img-contact" src={ImgLogoInstagram} alt="" />
              <span>tejiendo__palabras</span>
            </div>
            <div
              className="contact-item"
              onClick={() =>
                (window.location.href =
                  "https://api.whatsapp.com/send?phone=573214833948")
              }
            >
              <img className="img-contact" src={ImgLogoWhatsapp} alt="" />
              <span>+57 321 4833948</span>
            </div>
          </div>
        </div>
        <div className="delivery">
          <h2>Métodos de entrega</h2>
          <div className="delivery-info">
            <div className="delivery-item">
              <strong className="img-contact">🏡</strong>
              <span>A domicilio en Neiva y Palermo</span>
            </div>
            <div className="delivery-item">
              <strong className="img-contact">🚛</strong>
              <span>Servientrega</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
