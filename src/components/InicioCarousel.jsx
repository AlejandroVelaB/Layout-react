import Imagen1 from "../assets/1.jpg";
import Imagen2 from "../assets/2.jpg";
import Imagen3 from "../assets/3.jpg";

const InicioCarousel = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide text-center">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Imagen1} className="d-block" width="65%;" />
          </div>
          <div className="carousel-item">
            <img src={Imagen2} className="d-block" width="65%;" />
          </div>
          <div className="carousel-item">
            <img src={Imagen3} className="d-block" width="65%;" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default InicioCarousel;
