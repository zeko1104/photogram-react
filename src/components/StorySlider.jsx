import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const stories = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "User 1",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "User 2",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "User 3",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "User 4",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "User 5",
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "User 6",
  },
  {
    id: 7,
    image:
      "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "User 7",
  },
  {
    id: 8,
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "User 8",
  },
];

function StorySlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: true,
    variableWidth: true,
  };

  return (
    <div className="w-full ">
      <Slider {...settings}>
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center mx-2">
            <div
              className="w-20 h-20 rounded-full border-2 border-blue-500 bg-cover bg-center"
              style={{ backgroundImage: `url(${story.image})` }}
            ></div>
            <div className="text-center text-sm mt-2">
              <span className="">{story.name}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default StorySlider;
