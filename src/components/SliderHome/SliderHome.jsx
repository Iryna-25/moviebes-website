import { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import { ArrowNext, ArrowPrev, Wrapper, SlideImg } from "./SliderHome.style";
import { getTrandingMovies } from "services/api";
import { Box } from "components/Box";

function SliderHome () {

  const [trandingImg, setTrandingImg] = useState([]);

  useEffect(()=>{
    getTrandingMovies().then(data => {
      setTrandingImg(data.results);
    });
  },[]);

  const NextArrow = ({ onClick }) => {
    return (
      <ArrowNext onClick={onClick}>
        <FaArrowRight />
      </ArrowNext>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <ArrowPrev onClick={onClick}>
        <FaArrowLeft />
      </ArrowPrev>
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
    <Box display='grid' gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gridGap="1rem">
      <Wrapper>
      <Slider {...settings}>
        {trandingImg.map((img, idx) => (
          <div key={img.id} 
          >
            {idx === imageIndex}
            <SlideImg src={`https://image.tmdb.org/t/p/w500${img.backdrop_path}`} alt={img} />
          </div>
        ))}
      </Slider>
    </Wrapper>
    </Box>
  );
}
export default SliderHome;