import { useEffect, useState } from "react";
import Slider from "react-slick";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { ArrowNext, ArrowPrev, Wrapper, SlideImg, Slide} from "./SliderHome.style";
import { getTrandingMovies } from "services/api";
import { Box } from "components/Box";
import { NavLink } from "react-router-dom";

export const SliderHome = () => {

  const [trandingImg, setTrandingImg] = useState([]);

  useEffect(()=>{
    getTrandingMovies().then(data => {
      setTrandingImg(data.results);
    });
  },[]);

  const NextArrow = ({ onClick }) => {
    return (
      <ArrowNext onClick={onClick}>
        <BsArrowRightCircle />
      </ArrowNext>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <ArrowPrev onClick={onClick}>
        <BsArrowLeftCircle />
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
          <Slide   
            key={img.id} 
            active={idx === imageIndex ?? true}
          >
            <NavLink to={`/moviespage/${img.id}`}>
              <SlideImg src={`https://image.tmdb.org/t/p/w500${img.poster_path}`} alt={img} />
            </NavLink>
          </Slide>   
        ))}
      </Slider>
    </Wrapper>
    </Box>
  );
}
export default SliderHome;