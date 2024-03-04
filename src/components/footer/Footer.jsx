import "./Footer.css";
import ImgLogoInstagram from "../../assets/logoInstagram.svg";
import ImgLogoWhatsapp from "../../assets/logoWhatsappWhite.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-footer">
        <h1>Contacto</h1>
        <div>
          <a href="https://www.instagram.com/tejiendo__palabras/">
            <img className="img-footer" src={ImgLogoInstagram} alt="" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=573214833948">
            <img className="img-footer" src={ImgLogoWhatsapp} alt="" />
          </a>
        </div>
      </div>
      <div className="by-footer">
        <p className="text-footer">
          Hecho por &lt;{" "}
          <a href="https://giovannisia.github.io/portfolio/">Your Software</a>{" "}
          &gt;
        </p>
      </div>
    </div>
  );
};
export default Footer;
