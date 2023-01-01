import { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import "../SliderHome/SliderHome.css";
import { getTrandingMovies } from "services/api";


function SliderHome() {

  const [trandingImg, setTrandingImg] = useState([]);

  useEffect(()=>{
    getTrandingMovies().then(data => {
      setTrandingImg(data.results);
    });
  },[]);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="A">
      <Slider {...settings}>
        {trandingImg.map((img, idx) => (
          <div key={img.id} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={`https://image.tmdb.org/t/p/w500${img.backdrop_path}`} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderHome;