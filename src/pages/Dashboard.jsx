import practice from "../assets/practice.svg";
import challenge from "../assets/challenge.svg";
import event from "../assets/event.svg";
import tree from "../assets/tree.svg";
import adam from "../assets/adam.svg";
import rank from "../assets/rank.svg";
import iconChallenge from "../assets/iconChallenge.svg";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-no-repeat bg-center h-screen">
      <Navbar profile />

      <div className="flex lg:h-[calc(100vh-80px)] h-[calc(100vh-104px)]">
        <div
          style={{
            backgroundImage: `url(${tree})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundColor: "#F5F6FB",
          }}
          className="w-3/4 lg:px-[5rem] 2xl:px-[7rem]"
        >
          <h1
            className="lg:text-[30px] 2xl:text-[40px] text-colorHeading mt-[64px] font-medium text-title"
            style={{ lineHeight: 1.2 }}
          >
            Halo, Selamat Pagi!
          </h1>
          <h1
            className="lg:text-[30px] 2xl:text-[40px] text-primaryColor mt-2 mb-4 font-medium text-title"
            style={{ lineHeight: 1.2 }}
          >
            Adam Smith 👋
          </h1>

          <p className="2xl:mb-10 lg:mb-4 lg:mt-2 text-lg lg:text-[16px] 2xl:text-base text-colorParagraph ">
            Mau belajar apa kamu hari ini?
          </p>

          <div className="flex mt-[30px] lg:mt-[20px] gap-10">
            <div className="flex-1 bg-white border-[1px] border-transparent hover:shadow-cardShadow p-4 rounded-3xl hover:border-primaryColor hover:border-[1px] transition duration-300">
              <div className="flex items-center ">
                <img src={practice} alt="" />
                <p className="ml-3 text-lg font-medium">30+ Practice</p>
              </div>
              <p className="text-base mt-[20px] text-colorParagraph">
                Tersedia 30+ Practice yang bisa kamu kerjakan sekarang
              </p>
              <button
                className="bg-white transition duration-500 hover:bg-[#f05d27] hover:text-white text-primaryColor border-primaryColor border-[1px] py-2 px-4 rounded-full w-full 2xl:text-base lg:text-sm font-medium mt-[32px]"
                onClick={() => navigate("/practice")}
              >
                Mulai Kerjakan
              </button>
            </div>
            <div className="flex-1 bg-white border-[1px] border-transparent hover:shadow-cardShadow p-4 rounded-3xl hover:border-primaryColor hover:border-[1px] transition duration-300">
              <div className="flex items-center ">
                <img src={challenge} alt="" />
                <p className="ml-3 text-lg font-medium">15 Challenge</p>
              </div>
              <p className="text-base mt-[20px] text-colorParagraph">
                Tersedia 5 Challenge yang bisa kamu kerjakan sekarang
              </p>
              <button className="bg-white transition duration-500 hover:bg-[#f05d27] hover:text-white text-primaryColor border-primaryColor border-[1px] py-2 px-4 rounded-full w-full 2xl:text-base lg:text-sm font-medium mt-[32px]">
                Mulai Kerjakan
              </button>
            </div>
            <div className="flex-1 bg-white border-[1px] border-transparent hover:shadow-cardShadow p-4 rounded-3xl hover:border-primaryColor hover:border-[1px] transition duration-300">
              <div className="flex items-center ">
                <img src={event} alt="" />
                <p className="ml-3 text-lg font-medium">20+ Event</p>
              </div>
              <p className="text-base mt-[20px] text-colorParagraph">
                Tersedia 20 lebih Event yang bisa kamu kerjakan sekarang
              </p>
              <button className="bg-white transition duration-500 hover:bg-[#f05d27] hover:text-white text-primaryColor border-primaryColor border-[1px] py-2 px-4 rounded-full w-full 2xl:text-base lg:text-sm font-medium mt-[32px]">
                Ikuti Event
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/4 flex flex-col items-center px-3 pt-8">
          <img className="w-[150px] h-[150px]" src={adam} alt="mahasiswa" />
          <p className="mt-10">Adam Smith</p>
          <p className="mt-2">@freakScobedo</p>
          <p className="lg:mt-4 lg:mb-4 2xl:mt-10 2xl:mb-10">
            Institut Teknologi Bandung
          </p>
          <div className="flex gap-2">
            <div
              style={{ backgroundColor: "#F5F6FB" }}
              className="p-2 flex flex-col rounded-lg items-center"
            >
              <img src={rank} alt="rank" />
              <p className="py-3 font-bold text-lg">30/85</p>
              <p className="px-1 text-center text-sm text-colorParagraph font-medium">
                Practice Complete
              </p>
            </div>
            <div
              style={{ backgroundColor: "#F5F6FB" }}
              className="p-2 flex flex-col rounded-lg items-center"
            >
              <img src={iconChallenge} alt="rank" />
              <p className="py-3 font-bold text-lg">10/320</p>
              <p className="px-1 text-center text-sm text-colorParagraph font-medium">
                Challenge Complete
              </p>
            </div>
          </div>
          <p
            style={{ color: "#F03027" }}
            className="mt-10 text-sm font-medium "
          >
            Total Score Kamu :
          </p>
          <p
            style={{ color: "#F03027" }}
            className="lg:mt-2 2xl:mt-2 text-3xl font-bold"
          >
            240
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// container mx-auto mr-0 px-0
