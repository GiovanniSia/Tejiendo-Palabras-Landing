import "./MainContent.css";
import Separator from "../../global/Separator";
import Carousel from "./Carousel";

const MainContent = () => {
  return (
    <>
      <Separator />

      <div className="whatDoing">
        <h1 className="title-general">¿Qué hacemos?</h1>
        <div className="points">
          <p>🧶Tejidos hechos a mano</p>
          <p>🧸 Amigurumis</p>
          <p>📿 Accesorios personalizados</p>
        </div>
      </div>

      <Separator />

      <Carousel />

      <Separator />
    </>
  );
};
export default MainContent;
