import Navbar from "../components/Navbar";
import bg from "../assets/background.png";
import mhs from "../assets/mhs.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const LandingPage = () => {
  const [statistic, setStatistic] = useState([]);
  useEffect(() => {
    const getStatistic = async () => {
      try{
        const res = await axios.get('https://tmi-indo.herokuapp.com/landing-page')
        setStatistic(res.data)
      }
      catch (err){
        console.log(err);
      }
    }
    getStatistic()
  }, [])
  // console.log(statistic);

  return (
    <div
      className="bg-no-repeat bg-center h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "100vw 100vh",
        overflowY: "scroll",
      }}
    >
      <Navbar />
      <div className="container mx-auto flex 2xl:mt-[50px] lg:mt-[30px]">
        <div className="flex-1">
          <h1
            className="lg:text-[55px] 2xl:text-[56px] text-colorHeading font-medium text-title"
            style={{ lineHeight: 1.2 }}
          >
            Komunitas <span className="text-tertiaryColor">Belajar</span> Bagi
            Pemuda dan Mahasiswa{" "}
            <span className="text-primaryColor">Indonesia</span>
          </h1>
          <p className="2xl:mt-4 2xl:mb-5 lg:mb-4 lg:mt-2 lg:text-sm 2xl:text-base text-colorParagraph ">
            Kami membantu meningkatkan self-development anda untuk mengurangi
            jumlah pengangguran pemuda di indonesia. Ayok bergabung bersama kami
            agar anda tidak menganggur lagi.
          </p>
          <Link
            className=" text-white bg-primaryColor inline-block lg:text-sm lg:px-8 lg:py-2 2xl:px-[40px] 2xl:py-[18px] rounded-full"
            to="/register"
          >
            Daftar Disini
          </Link>
          <div className="flex 2xl:mt-[40px] lg:mt-[20px]">
            <div className="flex-1">
              <h3 className="2xl:text-[40px] lg:text-3xl font-semibold text-secondaryColor 2xl:mb-1">
                {statistic[0]?.id}
              </h3>
              <p className="2xl:text-base lg:text-sm text-colorParagraph">Member Count</p>
            </div>
            <div className="flex-1">
              <h3 className="2xl:text-[40px] lg:text-3xl font-semibold text-secondaryColor 2xl:mb-1">
              {statistic[0]?.asal_kampus}
              </h3>
              <p className="2xl:text-base lg:text-sm text-colorParagraph">Universities</p>
            </div>
            <div className="flex-1">
              <h3 className="2xl:text-[40px] lg:text-3xl font-semibold text-secondaryColor 2xl:mb-1">
              {statistic[0]?.tantangan}
              </h3>
              <p className="2xl:text-base lg:text-sm text-colorParagraph">Practice Kit</p>
            </div>
            <div className="flex-1">
              <h3 className="2xl:text-[40px] lg:text-3xl font-semibold text-secondaryColor 2xl:mb-1">
              {statistic[0]?.silabus}
              </h3>
              <p className="2xl:text-base lg:text-sm text-colorParagraph">Challenges</p>
            </div>
          </div>
        </div>
        <div className="flex-1 ">
          <img
            className="2xl:mt-[70px] lg:mt-1  pl-1"
            src={mhs}
            height="100%"
            alt="mahasiswa"
          />
        </div>
      </div>
    </div>
  );
};
export default LandingPage;