import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import demoslide from "../certTemplate.jpeg";
import { useState } from "react";
import ImageWithEditButton from "./ImageWithEditButton";
const FocusSlider = () => {

  const images = [demoslide, demoslide, demoslide, demoslide]

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    autoplay: true,
    variableWidth: true,
    centerMode: true,
    arrows: false,
    slidesToShow: 1,
    autoplaySpeed: 1500,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          variableWidth: false
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      {images.map((img, idx) => (
        <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
          <ImageWithEditButton image={img} />
        </div>
      ))}
    </Slider>
  );
};

export default FocusSlider