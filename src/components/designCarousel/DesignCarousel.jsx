import { useState } from "react";
import Picture1 from "../../assets/imgDesigns/picture1.jpeg";
import Picture3 from "../../assets/imgDesigns/picture3.jpeg";
import Picture2 from "../../assets/imgDesigns/picture2.jpeg";
import Picture4 from "../../assets/imgDesigns/picture4.jpeg";
import Picture5 from "../../assets/imgDesigns/picture5.jpeg";
import Picture6 from "../../assets/imgDesigns/picture6.jpeg";
import Picture7 from "../../assets/imgDesigns/picture7.jpeg";
import Picture8 from "../../assets/imgDesigns/picture8.jpeg";

const DesignCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const picturesDesigns = [
    { id: 1, src: Picture1, alt: "Picture 1" },
    { id: 2, src: Picture2, alt: "Picture 2" },
    { id: 3, src: Picture3, alt: "Picture 3" },
    { id: 4, src: Picture4, alt: "Picture 4" },
    { id: 5, src: Picture5, alt: "Picture 5" },
    { id: 6, src: Picture6, alt: "Picture 6" },
    { id: 7, src: Picture7, alt: "Picture 7" },
    { id: 8, src: Picture8, alt: "Picture 8" },
  ];

  const nextPage = () => {
    setCurrentPage(
      (currentPage) =>
        (currentPage + 1) % Math.ceil(picturesDesigns.length / itemsPerPage)
    );
  };

  const prevPage = () => {
    setCurrentPage((currentPage) =>
      currentPage === 0
        ? Math.ceil(picturesDesigns.length / itemsPerPage) - 1
        : currentPage - 1
    );
  };

  return (
    <div className="designInstagram">
      <h1 className="title-general">Diseños</h1>
      <div className="feed">
        {picturesDesigns
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
