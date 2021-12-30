import Navbar from "../components/Navbar";
import bg from "../assets/bg-practice.svg";
import search from "../assets/search.svg";
import rightt from "../assets/rightt.svg";
import right from "../assets/right.svg";
import left from "../assets/left.svg";
import practice from "../assets/practice.svg";
import Dropdown from "../components/Dropdown";
import Breadcrumbs from "../components/Breadcrumbs";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Practice = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[486px]"
      >
        <div className="bg-white">
          <Navbar profile />
        </div>
        <div className="container mx-auto">
          <Breadcrumbs />
          <h2 className="mt-[40px] text-[40px] font-semibold w-2/5 text-colorHeading">
            Dapatkan <span className="text-primaryColor">Ilmu</span> Baru Hari
            ini! <span className="font-normal">🔥</span>
          </h2>

          <p className="mt-4 w-1/3 text-base text-colorParagraph">
            Selesaikan beberapa practice dan dapatkan ilmu baru yang bermanfaat
            untukmu.
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-4">
        {/* Section 2 */}
        <div className="flex ">
          <h3 className="flex-1 text-[28px] font-semibold text-colorHeading">
            Problem Solving Practice
          </h3>
          <div className="flex flex-1 gap-4">
            <div className="flex flex-1 items-center h-[50px] bg-[#F5F6FB] text-[#54586F] rounded-full ">
              <img src={search} alt="search" className="w-5 h-5 ml-3" />
              <input
                className="rounded-full h-full focus:outline-none focus:border-none w-full outline-none border-none bg-[#F5F6FB] text-[#54586F] focus:ring-0"
                type="text"
                placeholder="Search any Practice ..."
              />
            </div>
            <Dropdown />
          </div>
        </div>
        {/* Section 3 */}
        <ul className="flex items-center justify-between mt-[45px]">
          <li>
            <a
              className="hover:text-primaryColor text-[#54586F] transition ease-in-out duration-500"
              href="#"
            >
              All Practice
            </a>
          </li>
          <li>
            <a
              className="hover:text-primaryColor text-[#54586F] transition ease-in-out duration-500"
              href="#"
            >
              Personality
            </a>
          </li>
          <li>
            <a
              className="hover:text-primaryColor text-[#54586F] transition ease-in-out duration-500"
              href="#"
            >
              Vission & Mission
            </a>
          </li>
          <li>
            <a
              className="hover:text-primaryColor text-[#54586F] transition ease-in-out duration-500"
              href="#"
            >
              Management Skill
            </a>
          </li>
          <li>
            <a
              className="hover:text-primaryColor text-[#54586F] transition ease-in-out duration-500"
              href="#"
            >
              Problem Solving
            </a>
          </li>
          <li>
            <a
              className="hover:text-primaryColor text-[#54586F] transition ease-in-out duration-500"
              href="#"
            >
              Self Discipline
            </a>
          </li>
          <li>
            <a
              className="hover:text-primaryColor text-[#54586F] transition ease-in-out duration-500"
              href="#"
            >
              Quality Management
            </a>
          </li>
        </ul>

        {/* Section 4 */}
        <div className="grid grid-cols-4 gap-5 mt-[60px]">
          {Array(4)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="flex-1 bg-white border-[1px] border-[#DFDFDF] hover:shadow-2xl p-4 rounded-xl hover:border-primaryColor hover:border-[1px] transition duration-300 relative"
              >
                <div className="flex items-center ">
                  <img src={practice} alt="" />
                  <p className="ml-3 text-lg font-medium">15 Challenge</p>
                </div>
                <p className="text-base mt-[20px] text-colorParagraph">
                  141 solved 11+ Maths Past Papers with detailed Answers and
                  downloadable PDF Question Papers.
                </p>
                <button className="bg-white flex justify-between underline transition duration-500   text-primaryColor border-none py-2 w-full 2xl:text-base lg:text-sm font-medium mt-[32px]">
                  Kerjakan Practice
                  <img src={right} alt="right" />
                </button>
                <span className="absolute -top-3 -right-3 px-3 font-medium py-1 bg-[#FFCCCC] text-[#F03027] rounded-md">
                  New
                </span>
              </div>
            ))}
          {Array(4)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="flex-1 bg-white border-[1px] border-[#DFDFDF] hover:shadow-2xl p-4 rounded-xl hover:border-primaryColor hover:border-[1px] transition duration-300 relative"
              >
                <div className="flex items-center ">
                  <img src={practice} alt="" />
                  <p className="ml-3 text-lg font-medium">15 Challenge</p>
                </div>
                <p className="text-base mt-[20px] text-colorParagraph">
                  141 solved 11+ Maths Past Papers with detailed Answers and
                  downloadable PDF Question Papers.
                </p>
                <button className="bg-white flex justify-between underline transition duration-500   text-primaryColor border-none py-2 w-full 2xl:text-base lg:text-sm font-medium mt-[32px]">
                  Kerjakan Practice
                  <img src={right} alt="right" />
                </button>
              </div>
            ))}
          {Array(4)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="flex-1 bg-white border-[1px] border-[#DFDFDF] hover:shadow-2xl p-4 rounded-xl hover:border-primaryColor hover:border-[1px] transition duration-300 relative"
              >
                <div className="flex items-center ">
                  <img src={practice} alt="" />
                  <p className="ml-3 text-lg font-medium">15 Challenge</p>
                </div>
                <p className="text-base mt-[20px] text-colorParagraph">
                  141 solved 11+ Maths Past Papers with detailed Answers and
                  downloadable PDF Question Papers.
                </p>
                <button className="bg-white flex justify-between underline transition duration-500   text-primaryColor border-none py-2 w-full 2xl:text-base lg:text-sm font-medium mt-[32px]">
                  Kerjakan Practice
                  <img src={right} alt="right" />
                </button>
                <span className="absolute -top-3 -right-3 px-3 font-medium py-1 bg-[#E1FFC2] text-[#588926] rounded-md">
                  Done
                </span>
              </div>
            ))}
        </div>

        {/* Section 5 */}
        <div class="flex justify-center mt-[64px] mb-[100px]">
          <nav aria-label="Page navigation example">
            <ul class="flex list-style-none">
              <li class="page-item bg-[#F5F6FB] rounded-full">
                <a
                  class="page-link  relative block py-1.5 px-1.5 rounded-sm border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 focus:shadow-none"
                  href="#"
                >
                  <img src={left} alt="left" />
                </a>
              </li>
              <li class="page-item">
                <a
                  class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-sm text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  1
                </a>
              </li>
              <li class="page-item">
                <a
                  class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-sm text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  2
                </a>
              </li>
              <li class="page-item">
                <a
                  class="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded-sm text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  3
                </a>
              </li>
              <li class="page-item">
                <a
                  class="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded-sm text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  ...
                </a>
              </li>
              <li class="page-item">
                <a
                  class="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded-sm text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  52
                </a>
              </li>
              <li class="page-item bg-primaryColor  text-white rounded-full">
                <a
                  class="page-link relative block py-1.5 px-1.5 border-0 bg-transparent outline-none transition-all duration-300 rounded-sm text-white  focus:shadow-none"
                  href="#"
                >
                  <img className="" src={rightt} alt="right" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Section 6 */}
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Practice;
