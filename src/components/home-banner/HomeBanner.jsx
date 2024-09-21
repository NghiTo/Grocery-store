import Slider from "react-slick";

function HomeBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="homeBannerSection">
      <Slider {...settings}>
        <div className="item">
          <img
            src="/src/assets/images/home-banner-1.webp"
            alt=""
            className="w-100"
          />
        </div>
        <div className="item">
          <img
            src="/src/assets/images/home-banner-1.webp"
            alt=""
            className="w-100"
          />
        </div>
        <div className="item">
          <img
            src="/src/assets/images/home-banner-1.webp"
            alt=""
            className="w-100"
          />
        </div>
      </Slider>
    </div>
  );
}

export default HomeBanner;
