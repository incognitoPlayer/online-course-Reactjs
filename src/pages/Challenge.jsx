import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import pendidikan from "../assets/challenge/pendidikan.svg";
import kesehatan from "../assets/challenge/kesehatan.svg";
import kesejahteraan from "../assets/challenge/kesejahteraan.svg";
import CarouselComponent from "../components/carousel/CarouselComponent";

const Challenge = () => {
  return (
    <>
      <div>
        <div className="bg-white">
          <Navbar profile />
        </div>
        <div className="container mx-auto">
          <Breadcrumbs practice link="Challenge" />
          <h2 className="mt-[55px] text-[40px] text-center mx-auto font-semibold max-w-lg text-colorHeading">
            Tantang dirimu agar bisa lebih{" "}
            <span className="text-primaryColor">berkembang!</span>
          </h2>

          <p className="mt-3 w-1/3 text-base text-colorParagraph mx-auto text-center">
            Selesaikan beberapa Challenge dan dapatkan banyak point untuk
            mengikuti event.
          </p>
        </div>
      </div>
      <div className="container mx-auto pb-[100px] mt-[80px]">
        <CarouselComponent />
      </div>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Challenge;
