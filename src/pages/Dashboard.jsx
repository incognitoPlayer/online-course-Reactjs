import Logo from "../components/Logo";
import avatar from "../assets/avatar.svg";
import practice from "../assets/practice.svg";
import challenge from "../assets/challenge.svg";
import event from "../assets/event.svg";
import tree from "../assets/tree.svg";
import mail from "../assets/mail.svg";
import notif from "../assets/notif.svg";
import adam from "../assets/adam.svg";
import rank from "../assets/rank.svg";
import iconChallenge from "../assets/iconChallenge.svg";

const Dashboard = () => {
  return (
    <div className="bg-no-repeat bg-center h-screen">
      <div className="container mx-auto flex justify-between items-center py-5 h-[80px]">
        <Logo />
        <div className="flex justify-center items-center ">
          <a
            className="px-10 py-4 text-base lg:text-sm font-medium text-colorHeading"
            href="/"
          >
            My Dashboard
          </a>
          <div class="px-10 group inline-block relative">
            <a class=" py-4 text-base lg:text-sm text-colorParagraph inline-flex items-center">
              Productivity
              <svg
                class="fill-current h-3 w-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </a>
            <ul class="absolute hidden text-colorParagraph pt-1 group-hover:block">
              <li class="">
                <a
                  class="rounded-t lg:text-sm hover:text-[#00004A] bg-white hover:bg-[#FEF7EC] py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Practice
                </a>
              </li>
              <li class="">
                <a
                  class="bg-white lg:text-sm hover:text-[#00004A] hover:bg-[#FEF7EC] py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Challenge
                </a>
              </li>
              <li class="">
                <a
                  class="rounded-b lg:text-sm hover:text-[#00004A] bg-white hover:bg-[#FEF7EC] py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>
          <a
            className="px-10 py-4 text-base lg:text-sm text-colorParagraph "
            href="/"
          >
            Leaderboard
          </a>
        </div>
        <div className="flex items-center w-1/5 justify-between">
          <img src={mail} alt="mail" />
          <img src={notif} alt="mail" />
          <img src={avatar} alt="avatar" />
          <p>Adam Smith</p>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]  ">
        <div
          style={{
            backgroundImage: `url(${tree})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundColor: "#F5F6FB",
          }}
          className="w-3/4 px-[5rem]"
        >
          <h1
            className="lg:text-[30px] 2xl:text-[56px] text-colorHeading mt-3 font-medium text-title"
            style={{ lineHeight: 1.2 }}
          >
            Halo, Selamat Pagi!
          </h1>
          <h1
            className="lg:text-[30px] 2xl:text-[56px] text-primaryColor mt-2 font-medium text-title"
            style={{ lineHeight: 1.2 }}
          >
            Adam Smith 👋
          </h1>

          <p className="mt-4 mb-5 lg:mb-4 lg:mt-2 text-lg lg:text-[16px] 2xl:text-base text-colorParagraph ">
            Mau belajar apa kamu hari ini?
          </p>

          <div className="flex mt-[30px] lg:mt-[20px] gap-10">
            <div className="flex-1 bg-white border-[1px] border-transparent hover:shadow-2xl p-4 rounded-xl hover:border-primaryColor hover:border-[1px] transition duration-300">
              <div className="flex items-center ">
                <img src={practice} alt="" />
                <p className="ml-3 text-lg font-medium">30+ Practice</p>
              </div>
              <p className="text-base mt-[20px] text-colorParagraph">
                Tersedia 30+ Practice yang bisa kamu kerjakan sekarang
              </p>
              <button className="bg-white transition duration-500 hover:bg-[#f05d27] hover:text-white text-primaryColor border-primaryColor border-[1px] py-2 px-4 rounded-full w-full 2xl:text-base lg:text-sm font-medium mt-[32px]">
                Mulai Kerjakan
              </button>
            </div>
            <div className="flex-1 bg-white border-[1px] border-transparent hover:shadow-2xl p-4 rounded-xl hover:border-primaryColor hover:border-[1px] transition duration-300">
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
            <div className="flex-1 bg-white border-[1px] border-transparent hover:shadow-2xl p-4 rounded-xl hover:border-primaryColor hover:border-[1px] transition duration-300">
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
        <div className="w-1/4 flex flex-col space-y-4 items-center px-3 pt-2  ">
          <img className="w-[120px] h-[120px]" src={adam} alt="mahasiswa" />
          <p>Adam Smith</p>
          <p>@freakScobedo</p>
          <p>Institut Teknologi Bandung</p>
          <div className="flex gap-2">
            <div
              style={{ backgroundColor: "#F5F6FB" }}
              className="p-2 flex flex-col rounded-lg items-center"
            >
              <img src={rank} alt="rank" />
              <p className="py-1 font-bold text-lg">30/85</p>
              <p className="text-center text-sm text-colorParagraph font-medium">
                Practice Complete
              </p>
            </div>
            <div
              style={{ backgroundColor: "#F5F6FB" }}
              className="p-2 flex flex-col rounded-lg items-center"
            >
              <img src={iconChallenge} alt="rank" />
              <p className="py-1 font-bold text-lg">10/320</p>
              <p className="text-center text-sm text-colorParagraph font-medium">
                Challenge Complete
              </p>
            </div>
          </div>
          <p style={{ color: "#F03027" }} className="text-sm font-medium ">
            Total Score Kamu :
          </p>
          <p style={{ color: "#F03027" }} className="text-3xl font-bold">
            240
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// container mx-auto mr-0 px-0
