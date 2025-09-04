import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/301/200",
  "https://picsum.photos/302/200",
  "https://picsum.photos/303/200",
];

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
  };

  return (
    <Slider {...settings}>
      {images.map((img, idx) => (
        <div key={idx}>
          <img src={img} alt={`Gallery ${idx}`} className="rounded" />
        </div>
      ))}
    </Slider>
  );
};

export default Gallery;
