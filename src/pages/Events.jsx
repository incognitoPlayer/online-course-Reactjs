import bg from "../assets/bg-events.svg";
import Breadcrumbs from "../components/Breadcrumbs";
import Navbar from "../components/Navbar";
import lead from "../assets/lead.png";
import event3 from "../assets/event3.svg";
import date from "../assets/date.svg";
import people from "../assets/people.svg";
import left from "../assets/left.svg";
import rightt from "../assets/rightt.svg";
import Dropdown from "../components/Dropdown";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100vw",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[486px]"
      >
        <div className="bg-white">
          <Navbar profile />
        </div>
        <div className="container mx-auto">
          <Breadcrumbs practice />
          <h2 className="mt-[40px] text-[40px] font-semibold max-w-lg text-colorHeading">
            Kembangkan Skillmu dari Pemateri{" "}
            <span className="text-primaryColor">Terbaik!</span>
          </h2>

          <p className="mt-4 w-1/3 text-base text-colorParagraph">
            Selesaikan beberapa practice dan dapatkan ilmu baru yang bermanfaat
            untukmu.
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <h3 className=" text-[28px] font-semibold text-colorHeading">
            All Events
          </h3>
          <Dropdown />
        </div>
        <div className="grid grid-cols-3 gap-5 mt-[60px]">
          {Array(3)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="flex-1 bg-white border-[1px] border-[#DFDFDF] hover:shadow-cardShadow rounded-2xl hover:border-primaryColor hover:border-[1px] transition duration-300 relative"
              >
                <img
                  width="100%"
                  src={lead}
                  alt="lead"
                  className="rounded-t-2xl"
                />
                <div className="p-4 relative">
                  <div className=" w-max rounded-md absolute -top-12 left-5 p-1">
                    <img src={event3} alt="personality" />
                  </div>
                  <h3 className="text-base mt-[30px] text-colorHeading font-medium">
                    Menjadi Pemimpin yang Mampu Membuat Perubahan Terhadap
                    Negara
                  </h3>
                  <p className="text-xs text-[#54586F] mt-2">
                    Tidak mudah untuk menjadi seorang pemimpin. Ada banyak hal
                    yang harus direncanakan, maupun diterapkan agar seseorang
                    layak
                  </p>
                  <div className="flex justify-between mt-[20px]">
                    <div className="flex items-center">
                      <img src={date} alt="date" />
                      <span className="text-xs ml-1 text-[#54586F] font-medium">
                        1 Januari 2022
                      </span>
                    </div>
                    <div className="flex items-center">
                      <img src={people} alt="people" />
                      <span className="text-xs ml-1 text-[#54586F] font-medium">
                        500 orang yang mengikuti
                      </span>
                    </div>
                  </div>
                  <button
                    className="bg-white transition duration-500 hover:bg-[#f05d27] hover:text-white text-primaryColor border-primaryColor border-[1px] py-2 px-4 rounded-full w-full 2xl:text-base lg:text-sm font-medium mt-[32px]"
                    onClick={() => navigate("/events/detail")}
                  >
                    Lihat Event
                  </button>
                </div>
                <span className="absolute -top-3 -right-3 px-3 font-medium py-1 bg-[#FFCCCC] text-[#F03027] rounded-lg">
                  New
                </span>
              </div>
            ))}
          {Array(3)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="flex-1 bg-white border-[1px] border-[#DFDFDF] hover:shadow-cardShadow rounded-2xl hover:border-primaryColor hover:border-[1px] transition duration-300 relative"
              >
                <img
                  width="100%"
                  src={lead}
                  alt="lead"
                  className="rounded-t-2xl"
                />
                <div className="p-4 relative">
                  <div className=" w-max rounded-md absolute -top-12 left-5 p-1">
                    <img src={event3} alt="personality" />
                  </div>
                  <h3 className="text-base mt-[30px] text-colorHeading font-medium">
                    Menjadi Pemimpin yang Mampu Membuat Perubahan Terhadap
                    Negara
                  </h3>
                  <p className="text-xs text-[#54586F] mt-2">
                    Tidak mudah untuk menjadi seorang pemimpin. Ada banyak hal
                    yang harus direncanakan, maupun diterapkan agar seseorang
                    layak
                  </p>
                  <div className="flex justify-between mt-[20px]">
                    <div className="flex items-center">
                      <img src={date} alt="date" />
                      <span className="text-xs ml-1 text-[#54586F] font-medium">
                        1 Januari 2022
                      </span>
                    </div>
                    <div className="flex items-center">
                      <img src={people} alt="people" />
                      <span className="text-xs ml-1 text-[#54586F] font-medium">
                        500 orang yang mengikuti
                      </span>
                    </div>
                  </div>
                  <button
                    className="bg-white transition duration-500 hover:bg-[#f05d27] hover:text-white text-primaryColor border-primaryColor border-[1px] py-2 px-4 rounded-full w-full 2xl:text-base lg:text-sm font-medium mt-[32px]"
                    onClick={() => navigate("/events/detail")}
                  >
                    Lihat Event
                  </button>
                </div>
              </div>
            ))}
          {Array(3)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="flex-1 bg-white border-[1px] border-[#DFDFDF] hover:shadow-cardShadow rounded-2xl hover:border-primaryColor hover:border-[1px] transition duration-300 relative"
              >
                <img
                  width="100%"
                  src={lead}
                  alt="lead"
                  className="rounded-t-2xl"
                />
                <div className="p-4 relative">
                  <div className=" w-max rounded-md absolute -top-12 left-5 p-1">
                    <img src={event3} alt="personality" />
                  </div>
                  <h3 className="text-base mt-[30px] text-colorHeading font-medium">
                    Menjadi Pemimpin yang Mampu Membuat Perubahan Terhadap
                    Negara
                  </h3>
                  <p className="text-xs text-[#54586F] mt-2">
                    Tidak mudah untuk menjadi seorang pemimpin. Ada banyak hal
                    yang harus direncanakan, maupun diterapkan agar seseorang
                    layak
                  </p>
                  <div className="flex justify-between mt-[20px]">
                    <div className="flex items-center">
                      <img src={date} alt="date" />
                      <span className="text-xs ml-1 text-[#54586F] font-medium">
                        1 Januari 2022
                      </span>
                    </div>
                    <div className="flex items-center">
                      <img src={people} alt="people" />
                      <span className="text-xs ml-1 text-[#54586F] font-medium">
                        500 orang yang mengikuti
                      </span>
                    </div>
                  </div>
                  <button
                    className="bg-white transition duration-500 hover:bg-[#f05d27] hover:text-white text-primaryColor border-primaryColor border-[1px] py-2 px-4 rounded-full w-full 2xl:text-base lg:text-sm font-medium mt-[32px]"
                    onClick={() => navigate("/events/detail")}
                  >
                    Lihat Event
                  </button>
                </div>
                <span className="absolute -top-3 -right-3 px-3 font-medium py-1 bg-[#E1FFC2] text-[#588926] rounded-lg">
                  Done
                </span>
              </div>
            ))}
        </div>

        <div className="flex justify-center mt-[64px] mb-[100px]">
          <nav aria-label="Page navigation example">
            <ul className="flex list-style-none">
              <li className="page-item bg-[#F5F6FB] rounded-full">
                <a
                  className="page-link relative block py-1.5 px-1.5 rounded-sm border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 focus:shadow-none"
                  href="#"
                >
                  <img src={left} alt="left" />
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  1
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  2
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  3
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  ...
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  52
                </a>
              </li>
              <li className="page-item bg-primaryColor  text-white rounded-full">
                <a
                  className="page-link relative block py-1.5 px-1.5 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-white  focus:shadow-none"
                  href="#"
                >
                  <img className="" src={rightt} alt="right" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Events;
