import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import bg from "../assets/bg-leaderboard.svg";
import trophy from "../assets/trophy.svg";
import sarah from "../assets/sarah.svg";
import siti from "../assets/siti.svg";
import emma from "../assets/emma.svg";
import crown from "../assets/crown.svg";
import avatar from "../assets/avatar-2.svg";
import left from "../assets/left.svg";
import rightt from "../assets/rightt.svg";

const Leaderboard = () => {
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
          <Breadcrumbs practice link="Leaderboard" />
          <h2 className="mt-[26px] text-[40px] text-center mx-auto font-semibold max-w-lg text-colorHeading">
            Posisi berapakah kamu{" "}
            <span className="text-primaryColor">Saat ini!</span>
          </h2>

          <p className="mt-3 w-1/3 text-base text-colorParagraph mx-auto text-center">
            Selesaikan beberapa Practice dan Challenge untuk mendapatkan posisi
            pertama
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex items-center justify-center mt-[60px]">
          <h3 className="text-colorHeading font-medium text-[32px] mr-3">
            Leaderboard
          </h3>
          <img src={trophy} alt="trophy" />
        </div>

        {/* section-2 */}
        <div className="flex items-center justify-center mt-[40px]">
          <ul className="flex items-center">
            <li className="py-[12px] px-[60px] border-[1px] border-primaryColor rounded-l-[10px]">
              <a className="text-primaryColor text-sm" href="#">
                This Week
              </a>
            </li>
            <li className="py-[12px] px-[60px] border-[1px] border-primaryColor bg-primaryColor">
              <a className="text-white text-sm" href="#">
                This Month
              </a>
            </li>
            <li className="py-[12px] px-[60px] border-[1px] border-primaryColor rounded-r-[10px]">
              <a className="text-primaryColor text-sm" href="#">
                This Month
              </a>
            </li>
          </ul>
        </div>

        {/* section-3 */}
        <div className="flex items-end justify-evenly mt-[48px]">
          <div className="items-center flex flex-col">
            <p className="text-base font-normal text-colorHeading">2nd</p>
            <img className="mt-2" src={sarah} alt="sarah" />
            <p className="mt-4 text-[18px] font-medium text-colorHeading">
              Neng Sarah
            </p>
            <p className="mt-3 text-[#54586F] text-base font-normal">UGM</p>
            <p className="mt-2 text-primaryColor font-medium text-[20px]">
              4500 pts
            </p>
          </div>

          {/* item-2 */}
          <div className="items-center flex flex-col">
            <img src={crown} alt="crown" />
            <p className="text-base font-normal text-colorHeading mt-1">1st</p>
            <img className="mt-2" src={siti} alt="siti" />
            <p className="mt-4 text-[18px] font-medium text-colorHeading">
              SIti Maemunah
            </p>
            <p className="mt-3 text-[#54586F] text-base font-normal">UNIKOM</p>
            <p className="mt-2 text-primaryColor font-medium text-[20px]">
              4500 pts
            </p>
          </div>

          {/* item-3 */}
          <div className="items-center flex flex-col">
            <p className="text-base font-normal text-colorHeading">3rd</p>
            <img className="mt-2" src={emma} alt="emma" />
            <p className="mt-4 text-[18px] font-medium text-colorHeading">
              Emma Welly
            </p>
            <p className="mt-3 text-[#54586F] text-base font-normal">UNPAD</p>
            <p className="mt-2 text-primaryColor font-medium text-[20px]">
              4500 pts
            </p>
          </div>
        </div>

        {/* section-4 */}
        <div className="mt-[40px] border-[1px] border-[#DFDFDF] rounded-[32px] p-5">
          <table className="w-full">
            <thead className="h-[50px]">
              <tr>
                <th>Rank</th>
                <th>Username</th>
                <th>Asal Kampus</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center border-b-[1px] border-[#EFEFEF] h-[70px]">
                <td>4</td>
                <td>
                  <div className="flex items-center justify-center">
                    <img src={avatar} alt="avatar" />
                    <span className="ml-3">Udin Saepuloh</span>
                  </div>
                </td>
                <td>UNIKOM</td>
                <td>4300 pts</td>
              </tr>
              <tr className="text-center border-b-[1px] border-[#EFEFEF] h-[70px]">
                <td>5</td>
                <td>
                  <div className="flex items-center justify-center">
                    <img src={avatar} alt="avatar" />
                    <span className="ml-3">Udin Saepuloh</span>
                  </div>
                </td>
                <td>UNIKOM</td>
                <td>4300 pts</td>
              </tr>
              <tr className="text-center border-b-[1px] border-[#EFEFEF] h-[70px]">
                <td>6</td>
                <td>
                  <div className="flex items-center justify-center">
                    <img src={avatar} alt="avatar" />
                    <span className="ml-3">Udin Saepuloh</span>
                  </div>
                </td>
                <td>UNIKOM</td>
                <td>4300 pts</td>
              </tr>
              <tr className="text-center border-b-[1px] border-[#EFEFEF] h-[70px]">
                <td>7</td>
                <td>
                  <div className="flex items-center justify-center">
                    <img src={avatar} alt="avatar" />
                    <span className="ml-3">Udin Saepuloh</span>
                  </div>
                </td>
                <td>UNIKOM</td>
                <td>4300 pts</td>
              </tr>
              <tr className="text-center border-b-[1px] border-[#EFEFEF] h-[70px]">
                <td>8</td>
                <td>
                  <div className="flex items-center justify-center">
                    <img src={avatar} alt="avatar" />
                    <span className="ml-3">Udin Saepuloh</span>
                  </div>
                </td>
                <td>UNIKOM</td>
                <td>4300 pts</td>
              </tr>
              <tr className="text-center border-b-[1px] border-[#EFEFEF] h-[70px]">
                <td>9</td>
                <td>
                  <div className="flex items-center justify-center">
                    <img src={avatar} alt="avatar" />
                    <span className="ml-3">Udin Saepuloh</span>
                  </div>
                </td>
                <td>UNIKOM</td>
                <td>4300 pts</td>
              </tr>
              <tr className="text-center  h-[70px]">
                <td>10</td>
                <td>
                  <div className="flex items-center justify-center">
                    <img src={avatar} alt="avatar" />
                    <span className="ml-3">Udin Saepuloh</span>
                  </div>
                </td>
                <td>UNIKOM</td>
                <td>4300 pts</td>
              </tr>
              <tr className="text-center h-[400px]"></tr>
              <tr className="text-center h-[70px]">
                <td>2134</td>
                <td>
                  <div className="flex items-center justify-center">
                    <img src={avatar} alt="avatar" />
                    <span className="ml-3">Udin Saepuloh</span>
                  </div>
                </td>
                <td>UNIKOM</td>
                <td>300 pts</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* section-5 */}
        <div className="flex justify-center mt-[40px] mb-[100px]">
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

export default Leaderboard;
