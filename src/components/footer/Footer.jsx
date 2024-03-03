import "./Footer.css";
import ImgLogoInstagram from "../../assets/logoInstagram.svg";
import ImgLogoWhatsapp from "../../assets/logoWhatsappWhite.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-footer">
        <h1>Contacto</h1>
        <div>
          <a href="">
            <img className="img-footer" src={ImgLogoInstagram} alt="" />
          </a>
          <a href="">
            <img className="img-footer" src={ImgLogoWhatsapp} alt="" />
          </a>
        </div>
      </div>
      <div className="by-footer">
        <p className="text-footer">
          Hecho por &lt; <a href="">Your Software</a> &gt;
        </p>
      </div>
    </div>
  );
};
export default Footer;
