import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function StorySlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8, // Eyni anda neçə story göstəriləcəyini tənzimləyir
    slidesToScroll: 1,
    arrows: true, // Sosial şəbəkə story-lərində oxlar olmur
    centerMode: true,
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Slider {...settings}>
        <div className="w-20 h-20 rounded-[50%] bg-cover bg-center border-2 border-blue-500"></div>
        <div className="w-20 h-20 rounded-full bg-cover bg-center border-2 border-red-500"></div>
        <div className="w-20 h-20 rounded-full bg-cover bg-center border-2 border-green-500"></div>
        <div className="w-20 h-20 rounded-full bg-cover bg-center border-2 border-yellow-500"></div>
        <div className="w-20 h-20 rounded-full bg-cover bg-center border-2 border-purple-500"></div>
        <div className="w-20 h-20 rounded-full bg-cover bg-center border-2 border-pink-500"></div>
      </Slider>
    </div>
  );
}

export default StorySlider;
