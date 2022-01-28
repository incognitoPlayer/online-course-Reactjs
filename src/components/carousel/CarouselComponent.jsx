import Slider from "react-slick";
import pendidikan from "../../assets/challenge/pendidikan.svg";
import kesehatan from "../../assets/challenge/kesehatan.svg";
import kesejahteraan from "../../assets/challenge/kesejahteraan.svg";
import right from "../../assets/challenge/right.svg";
import left from "../../assets/challenge/left.svg";
import "./carouselcomponent.css";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={`${className} w-[64px] h-[64px]  `}
      src={right}
      alt="right"
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={`${className} w-[64px] h-[64px] z-10  `}
      src={left}
      alt="left"
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    />
  );
}

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    dotsClass: "slick-dots line-indicator",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div
        style={{
          position: "absolute",
          width: "100%",
          top: "-10px",
          opacity: 0,
        }}
      >
        {i}
      </div>
    ),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="text-center rounded-[48px] px-6 flex flex-col items-center h-[700px]  bg-[#D1F1FF] pt-[40px]">
          <h1 className="text-[32px] font-semibold text-colorHeading mb-[32px] ">
            Challenge Pulau Pendidikan
          </h1>
          <Link to="/challenge/detail">
            <img src={pendidikan} alt="pendidkan" />
          </Link>
        </div>
        <div className="text-center rounded-[48px] px-6 flex flex-col items-center h-[700px] bg-[#FEF7EC] pt-[40px]">
          <h1 className="text-[32px] font-semibold text-colorHeading mb-[32px] ">
            Challenge Pulau Kesehatan
          </h1>
          <Link to="/challenge/detail">
            <img src={kesehatan} alt="kesehatan" />
          </Link>
        </div>
        <div className="text-center rounded-[48px] px-6 flex flex-col items-center h-[700px]  bg-[#D1F1FF] pt-[40px]">
          <h1 className="text-[32px] font-semibold text-colorHeading mb-[32px] ">
            Challenge Pulau Kesejahteraan
          </h1>
          <Link to="/challenge/detail">
            <img src={kesejahteraan} alt="kesejahteraan" />
          </Link>
        </div>
      </Slider>
    </div>
  );
};
export default CarouselComponent;
