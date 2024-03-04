import { useState, useEffect } from "react";
import { designCrochet } from "../../service/imageLoader";
import "./DesignCarousel.css";

const DesignCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const nextPage = () => {
    setCurrentPage(
      (currentPage) =>
        (currentPage + 1) % Math.ceil(designCrochet.length / itemsPerPage)
    );
  };

  const prevPage = () => {
    setCurrentPage((currentPage) =>
      currentPage === 0
        ? Math.ceil(designCrochet.length / itemsPerPage) - 1
        : currentPage - 1
    );
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 400) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="designInstagram" className="designInstagram">
      <h1 className="title-general">Diseños</h1>
      <div className="feed">
        {designCrochet
          .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
          .map((picture) => (
            <div className="foto" key={picture.id}>
              <img
                src={picture.src}
                alt={picture.alt}
                className="carousel-image"
              />
            </div>
          ))}
      </div>

      <div className="paginator">
        <button id="previous" onClick={prevPage}>
          &lt;
        </button>
        <span>&nbsp; &nbsp;</span>
        <button id="next" onClick={nextPage}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default DesignCarousel;
