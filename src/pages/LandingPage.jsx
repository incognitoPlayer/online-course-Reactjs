import Navbar from "../components/Navbar";
import bg from "../assets/background.png";
import mhs from "../assets/mhs.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import practice2 from "../assets/practice2.svg";
import challenge2 from "../assets/challenge2.svg";
import event2 from "../assets/event2.svg";
import activity from "../assets/activity.svg";
import sosmed from "../assets/sosmed.svg";
import petik from "../assets/petik.svg";
import raisa from "../assets/raisa.svg";
import alicia from "../assets/alicia.svg";
import eliza from "../assets/eliza.svg";

import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

const LandingPage = () => {
  const [statistic, setStatistic] = useState([]);
  useEffect(() => {
    const getStatistic = async () => {
      try {
        const res = await axios.get(
          "https://tokoh-muda-indonesia.herokuapp.com/landing-page"
        );
        setStatistic(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getStatistic();
  }, []);

  return (
    <>
      <div
        className="bg-no-repeat bg-center h-screen overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100vw 100vh",
        }}
      >
        <Navbar />
        <div className="container mx-auto flex 2xl:mt-[50px] lg:mt-[30px]">
          <div className="flex-1 mt-3">
            <h1
              className="lg:text-[55px] 2xl:text-[56px] text-colorHeading font-medium text-title"
              style={{ lineHeight: 1.2 }}
            >
              Komunitas <span className="text-tertiaryColor">Belajar</span> Bagi
              Pemuda dan Mahasiswa{" "}
              <span className="text-primaryColor">Indonesia</span>
            </h1>
            <p className="2xl:mt-4 2xl:mb-5 lg:mb-5 lg:mt-4 lg:text-sm 2xl:text-base text-colorParagraph ">
              Kami membantu meningkatkan self-development anda untuk mengurangi
              jumlah pengangguran pemuda di indonesia. Ayok bergabung bersama
              kami agar anda tidak menganggur lagi.
            </p>
            <Link
              className=" text-white bg-primaryColor inline-block lg:text-sm lg:px-8 lg:py-2 2xl:px-[40px] 2xl:py-[18px] rounded-full"
              to="/register"
            >
              Daftar Disini
            </Link>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              className="2xl:mt-[70px] lg:mt-1  pl-1"
              src={mhs}
              height="100%"
              alt="mahasiswa"
            />
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div
        className="flex flex-col justify-center items-center h-[450px]"
        style={{
          background:
            "linear-gradient(180deg, #FEF5EB 0%, rgba(254, 245, 235, 0) 100%)",
        }}
      >
        <h2 className="text-[44px] font-semibold text-colorHeading">
          Mereka semua membutuhkan kami
        </h2>
        <p className="text-base w-1/2 text-center mt-3 text-colorParagraph">
          Banyak sekali mahasiswa yang menjadi bagian dari kami untuk melatih
          pengembangan diri mereka.
        </p>
        <div className="flex 2xl:mt-[40px] lg:mt-[60px]">
          <div className="w-[250px] text-center border-r-[1px] border-[#ECE0CD]">
            <h3 className="2xl:text-[40px] lg:text-3xl font-semibold text-secondaryColor 2xl:mb-1">
              {statistic[0]?.jumlah_member}
            </h3>
            <p className="2xl:text-base lg:text-sm text-colorParagraph">
              Member Count
            </p>
          </div>
          <div className="w-[250px] text-center border-r-[1px] border-[#ECE0CD]">
            <h3 className="2xl:text-[40px] lg:text-3xl font-semibold text-secondaryColor 2xl:mb-1">
              {statistic[0]?.jumlah_universitas}
            </h3>
            <p className="2xl:text-base lg:text-sm text-colorParagraph">
              Universities
            </p>
          </div>
          <div className="w-[250px] text-center border-r-[1px] border-[#ECE0CD]">
            <h3 className="2xl:text-[40px] lg:text-3xl font-semibold text-secondaryColor 2xl:mb-1">
              {statistic[0]?.jumlah_practice}
            </h3>
            <p className="2xl:text-base lg:text-sm text-colorParagraph">
              Practice Kit
            </p>
          </div>
          <div className="w-[250px] text-center">
            <h3 className="2xl:text-[40px] lg:text-3xl font-semibold text-secondaryColor 2xl:mb-1">
              {statistic[0]?.jumlah_challange}
            </h3>
            <p className="2xl:text-base lg:text-sm text-colorParagraph">
              Challenges
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex container mx-auto">
        <div className="flex-1 mt-5">
          <h2 className="text-[32px] font-semibold text-colorHeading w-3/4">
            Dalam satu platform kamu dapat mempelajari banyak hal menarik
          </h2>
          <p className="2xl:mt-4 2xl:mb-5 lg:mb-5 lg:mt-4 lg:text-sm 2xl:text-base text-colorParagraph w-3/4">
            Kami menyediakan practice berupa text materi, video materi dan juga
            beberapa challenge, event yang bisa membantu meningkatkan soft skill
            kamu.
          </p>
          <Link
            className=" text-white bg-primaryColor inline-block lg:text-sm lg:px-8 lg:py-2 2xl:px-[40px] 2xl:py-[18px] rounded-full"
            to="/register"
          >
            Kenali Kami lebih lanjut
          </Link>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2">
            <div>
              <img src={practice2} alt="practice" />
              <h3 className="text-colorHeading text-lg font-semibold mt-4">
                Good Practice
              </h3>
              <p className="text-colorParagraph text-base mt-2 w-3/4">
                Ada banyak sekali task practice yang kami sediakan untuk kamu
              </p>
            </div>
            <div>
              <img src={challenge2} alt="practice" />
              <h3 className="text-colorHeading text-lg font-semibold mt-4">
                Interesting Challenge
              </h3>
              <p className="text-colorParagraph text-base mt-2 w-3/4">
                Banyak sekali tantangan menarik buat melatih apa yang sudah kamu
                pelajari
              </p>
            </div>
            <div className="mt-[72px]">
              <img src={event2} alt="practice" />
              <h3 className="text-colorHeading text-lg font-semibold mt-4">
                More Event
              </h3>
              <p className="text-colorParagraph text-base mt-2 w-3/4">
                Banyak sekali event menarik juga yang kami sediakan untuk kamu
              </p>
            </div>
            <div className="mt-[72px]">
              <img src={activity} alt="practice" />
              <h3 className="text-colorHeading text-lg font-semibold mt-4">
                Report Activity
              </h3>
              <p className="text-colorParagraph text-base mt-2 w-3/4">
                Kamu juga bisa melihat report aktifitas kamu untuk bahan menjadi
                evaluasimu
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex container mx-auto mt-[178px] items-center ">
        <div className="flex-1">
          <img src={sosmed} alt="sosmed" />
        </div>
        <div className="flex-1 ml-5">
          <h2 className="text-[35px] font-semibold text-colorHeading w-3/4">
            Berkolaborasi dengan mitra ternama
          </h2>
          <p className="2xl:mt-4 ml-auto 2xl:mb-5 lg:mb-5 lg:mt-4 lg:text-base 2xl:text-base text-colorParagraph ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link
            className=" text-white bg-primaryColor inline-block lg:text-sm lg:px-8 lg:py-2 2xl:px-[40px] 2xl:py-[18px] rounded-full"
            to="/register"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Section 5 */}
      <div
        className="h-[678px] mt-[150px]"
        style={{
          background:
            "linear-gradient(360deg, #FEF5EB 0%, rgba(254, 245, 235, 0) 100%)",
        }}
      >
        <div className="container mx-auto">
          <div className="flex pt-[100px]">
            <h2 className="flex-1 text-[35px] text-colorHeading font-semibold">
              Pendapat menarik dari Mahasiswa
            </h2>
            <div className="flex-1">
              <p className="ml-5 w-3/4 text-base text-colorParagraph">
                Ini adalah pendapat mereka sebagai mahasiswa dari seluruh
                indonesia yang telah bergabung bersama kami menjadi pengguna
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-[80px]">
            <div className="bg-white  p-5 rounded-2xl">
              <img src={petik} alt="petik" />
              <p className="pt-5 text-colorParagraph text-base">
                Ajib sih ie mah wa urangge kakeun bingung make na kumaha, tapi
                lumayan lah tamah teing cicing
              </p>
              <div className="flex gap-3 items-center pt-5">
                <img src={raisa} alt="raisa" />
                <div>
                  <h4 className="text-colorHeading text-base font-semibold">
                    Raisa Anggiani
                  </h4>
                  <p className="text-colorParagraph text-[14px]">
                    Mahasiswa ITB
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl">
              <img src={petik} alt="petik" />
              <p className="pt-5 text-colorParagraph text-base">
                Bisa kapikiran kitu nyien nu kie euy, pokoknamah ngabantu pisan
                lah dari pada nganggur di imah cicing.
              </p>
              <div className="flex gap-3 items-center pt-5">
                <img src={alicia} alt="raisa" />
                <div>
                  <h4 className="text-colorHeading text-base font-semibold">
                    Alicia Agatha
                  </h4>
                  <p className="text-colorParagraph text-[14px]">
                    Mahasiswa UNPAD
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl">
              <img src={petik} alt="petik" />
              <p className="pt-5 text-colorParagraph text-base">
                Keren Boy, mun bisamah tambahan fitur Time tracking meh gampang
                deks mun gagawe teh tangkurak
              </p>
              <div className="flex gap-3 items-center pt-5">
                <img src={eliza} alt="raisa" />
                <div>
                  <h4 className="text-colorHeading text-base font-semibold">
                    Eliza Maharani
                  </h4>
                  <p className="text-colorParagraph text-[14px]">
                    Mahasiswa TELKOM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6 */}

      <Newsletter />
      <Footer />
    </>
  );
};
export default LandingPage;
