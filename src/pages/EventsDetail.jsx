import lead2 from "../assets/lead2.png";
import event3 from "../assets/event3.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import people from "../assets/people.svg";
import date from "../assets/date.svg";
import avatar from "../assets/avatar.svg";
import eliza from "../assets/eliza.svg";
import raisa from "../assets/raisa.svg";
import task from "../assets/task.svg";
import contact from "../assets/contact.svg";
import edit from "../assets/edit.svg";
import maill from "../assets/maill.svg";
import calendar from "../assets/calendar.svg";
import done from "../assets/done.svg";
import love from "../assets/love.svg";
import loves from "../assets/loves.svg";
import Navbar from "../components/Navbar";
import { Tab } from "@headlessui/react";

const EventsDetail = () => {
  return (
    <div className="pb-[50px]">
      <div className="bg-white">
        <Navbar profile />
      </div>
      <img src={lead2} alt="lead" className="h-[300px] w-full" />
      <div className="container mx-auto">
        {/* section 1 */}
        <div className="relative">
          <div className="bg-white flex p-3 items-center rounded-lg shadow-cardShadow -top-5 absolute w-full">
            <img src={event3} alt="event" />
            <div className="ml-5 w-full">
              <h2 className="text-4xl text-colorHeading">
                Menjadi Pemimpin yang Mampu Membuat Perubahan Terhadap Negeri
              </h2>
              <p className="text-primaryColor text-base mt-3">
                Minimal poin 500
              </p>
              <div className="flex justify-between mt-3">
                <div className="flex items-center">
                  <img src={date} alt="date" />
                  <span className="text-xs ml-1 font-medium text-[#54586F]">
                    1 Januari 2022, 13:00 WIB - 1 Januari 2022, 16:00 WIB
                  </span>
                </div>
                <div className="flex items-center">
                  <img src={people} alt="people" />
                  <span className="text-xs ml-1 font-medium text-[#54586F]">
                    500 orang yang mengikuti
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className="flex pt-[230px]">
          <div className="w-3/5">
            <Tab.Group>
              <Tab.List>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "text-primaryColor pb-2 w-1/4 border-b-2 border-primaryColor"
                      : "w-1/4 pb-2 border-b-2"
                  }
                >
                  Overview
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "text-primaryColor pb-2 w-1/4 border-b-2 border-primaryColor "
                      : "w-1/4 pb-2 border-b-2"
                  }
                >
                  Step by step
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "text-primaryColor pb-2 w-1/4 border-b-2 border-primaryColor "
                      : "w-1/4 pb-2 border-b-2"
                  }
                >
                  FAQs
                </Tab>
              </Tab.List>
              <Tab.Panels className="w-11/12">
                <Tab.Panel>
                  <h3 className="text-colorHeading text-3xl mt-4">
                    Deskripsi Practice
                  </h3>
                  <p className="mt-3 text-sm">
                    Tidak mudah untuk menjadi seorang pemimpin. Ada banyak hal
                    yang harus direncanakan, maupun diterapkan agar seseorang
                    layak untuk dianggap sebagai seorang pemimpin. Salah satu
                    cara untuk menjadi pemimpin yang layak adalah dengan
                    mempelajari prinsip-prinsip kepemimpinan. Dalam course ini,
                    peserta akan mempelajari prinsip-prinsip penting
                    kepemimpinan yang sangat esensial bagi kesuksesan dalam
                    pekerjaan. Setelah mempelajari Course ini, kalian diharapkan
                    mampu untuk memahami peranan seorang pemimpin dalam
                    organisasi, menerapkan prinsip yang diajarkan dalam Course,
                    serta membangun engagement tim yang baik
                  </p>
                  <h3 className="text-colorHeading text-3xl mt-4">
                    Kenapa kita harus ikut event ini?
                  </h3>
                  <p className="mt-3 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                  </p>
                  <h3 className="text-colorHeading text-3xl mt-4">
                    Apa yang kamu pelajari dari event ini?
                  </h3>
                  <ul className="mt-3 text-sm list-disc list-inside marker:text-primaryColor">
                    <li className="p-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </li>
                    <li className="p-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </li>
                    <li className="p-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </li>
                    <li className="p-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </li>
                    <li className="p-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </li>
                  </ul>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="flex items-center mt-4">
                    <img src={task} alt="task" />
                    <p className="ml-3">
                      Kerjakan Practice & Challenge sampai kamu mempunyai 500
                      pts
                    </p>
                  </div>
                  <div className="h-10 border-l-2 w-1 ml-3 border-dotted border-[#B2ACAC]"></div>
                  <div className="flex items-center -ml-[3px]">
                    <img src={contact} alt="task" />
                    <p className="ml-3">
                      Lalu kamu bisa Register jika minimal point sudah cukup
                    </p>
                  </div>
                  <div className="h-10 border-l-2 w-1 ml-3 border-dotted border-[#B2ACAC]"></div>
                  <div className="flex items-center ml-[4px]">
                    <img src={edit} alt="task" />
                    <p className="ml-3">
                      Mengisi Form Pendaftaran yang di sediakan oleh admin
                    </p>
                  </div>
                  <div className="h-10 border-l-2 w-1 ml-3 border-dotted border-[#B2ACAC]"></div>
                  <div className="flex items-center -ml-[2px]">
                    <img src={maill} alt="task" />
                    <p className="ml-3">
                      Cek Email untuk mendapatkan notifikasi lebih lanjut
                    </p>
                  </div>
                  <div className="h-10 border-l-2 w-1 ml-3 border-dotted border-[#B2ACAC]"></div>
                  <div className="flex items-center ml-[3px]">
                    <img src={calendar} alt="task" />
                    <p className="ml-3">
                      Datang ke acara dan mengikuti acara sampai selesai
                    </p>
                  </div>
                  <div className="h-10 border-l-2 w-1 ml-3 border-dotted border-[#B2ACAC]"></div>
                  <div className="flex items-center ">
                    <img src={done} alt="task" />
                    <p className="ml-3">Acara Selesai</p>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <h3 className="text-colorHeading text-xl mt-4">
                    Apakah Saya Bisa Mendaftar tapi belum menyelesaikan practice
                    & challenge?
                  </h3>
                  <p className="mt-3 text-sm px-4 py-2 rounded-xl bg-[#F5F6FB] text-[#54586F]">
                    Anda harus menyelesaikan beberapa practice & challenge
                    sampai point anda mencapai 500pts baru anda bisa mendaftar
                    event ini
                  </p>
                  <h3 className="text-colorHeading text-xl mt-4">
                    Apa Itu RSVP
                  </h3>
                  <p className="mt-3 text-sm px-4 py-2 rounded-xl bg-[#F5F6FB] text-[#54586F]">
                    Saat Anda telah mendaftar event ini akan ada sebuah
                    invitation dalam email anda. dalam invitation card tersebut
                    berisi detail event yang anda ikuti
                  </p>
                  <h3 className="text-colorHeading text-xl mt-4">
                    Pertanyaan lain
                  </h3>
                  <p className="mt-3 text-sm px-4 py-2 rounded-xl bg-[#F5F6FB] text-[#54586F]">
                    Saat Anda telah mendaftar event ini akan ada sebuah
                    invitation dalam email anda. dalam invitation card tersebut
                    berisi detail event yang anda ikuti
                  </p>
                  <h3 className="text-colorHeading text-xl mt-4">
                    Any Question
                  </h3>
                  <p className="mt-3 text-sm px-4 py-2 rounded-xl bg-[#F5F6FB] text-[#54586F]">
                    Saat Anda telah mendaftar event ini akan ada sebuah
                    invitation dalam email anda. dalam invitation card tersebut
                    berisi detail event yang anda ikuti
                  </p>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          <div className="w-2/5">
            <div className="bg-white border-[1px] rounded-md border-[#DFDFDF] p-4">
              <p className="text-xs">
                By registering, you agree to the Terms and Conditions & Privacy
                Policy of Tokoh Muda Indonesia
              </p>
              <button className="bg-primaryColor text-white  border-primaryColor  py-2 px-4 rounded-full w-full 2xl:text-base lg:text-sm font-medium mt-[24px]">
                Register Event
              </button>
              <div className="h-[2px] bg-[#dfdfdf] mt-4"></div>
              <p className="text-center text-sm mt-2 font-medium">
                Registrasi berakhir dalam
              </p>
              <p className="text-center text-sm font-medium">3 Hari Lagi</p>
            </div>

            {/* tags */}
            <div className="bg-white border-[1px] mt-4 rounded-md border-[#DFDFDF] ">
              <h3 className="text-base font-medium py-1 px-4">Tags</h3>
              <div className="h-[2px] bg-[#dfdfdf]"></div>
              <div className="flex items-center justify-around mt-4 mb-4">
                <div className="bg-[#FFECD7] px-2 py-0.5 rounded-lg">
                  <a className="text-xs font-medium text-[#DC7300] " href="/">
                    Personality
                  </a>
                </div>
                <div className="bg-[#FFECD7] hover:bg-[#dee3fc] px-2 py-0.5 rounded-lg">
                  <a className="text-xs font-medium text-[#DC7300]" href="/">
                    Vision & Mission
                  </a>
                </div>
                <div className="bg-[#FFECD7] hover:bg-[#dee3fc] px-2 py-0.5 rounded-lg">
                  <a className="text-xs font-medium text-[#DC7300]" href="/">
                    Problem Solving
                  </a>
                </div>
              </div>
            </div>

            {/* share */}
            <div className="bg-white border-[1px] mt-4 rounded-md border-[#DFDFDF] ">
              <h3 className="text-base font-medium py-1 px-4">
                Share Event Ini
              </h3>
              <div className="h-[2px] bg-[#dfdfdf]"></div>
              <div className="flex items-center justify-around mt-4 mb-4">
                <div className="bg-[#F5F6FB] hover:bg-[#dee3fc] rounded-full">
                  <a className="text-lg font-medium " href="/">
                    <img src={facebook} alt="facebook" width="50px" />
                  </a>
                </div>
                <div className="bg-[#F5F6FB] hover:bg-[#dee3fc]  rounded-full">
                  <a className="text-lg font-medium" href="/">
                    <img src={instagram} alt="instagram" width="50px" />
                  </a>
                </div>
                <div className="bg-[#F5F6FB] hover:bg-[#dee3fc]  rounded-full">
                  <a className="text-lg font-medium" href="/">
                    <img src={twitter} alt="twitter" width="50px" />
                  </a>
                </div>
                <div className="bg-[#F5F6FB] hover:bg-[#dee3fc]  rounded-full">
                  <a className="text-lg font-medium" href="/">
                    <img src={linkedin} alt="linkedin" width="50px" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* comments */}
        <div className="mt-5">
          <h3 className="text-xl">Comment</h3>
          <div className="flex p-2">
            <img src={avatar} alt="avatar" />
            <input
              type="text"
              className="border-b-[1px] border-r-0 border-l-0 border-t-0 w-full ml-3 text-sm border-[#7E7E7E] focus:border-primaryColor focus:ring-0"
              placeholder="Tambahkan komentar anda"
            />
          </div>
          <div className="flex p-3 mt-6 border-b-[1px] items-start border-[#DFDFDF]">
            <img src={avatar} alt="avatar" />
            <div className="ml-3">
              <p className="text-colorHeading text-sm">Tony Stark</p>
              <span className="text-xs">5 Jam lalu</span>
              <p className="mt-3 text-sm">
                Alus pisan euy eventna hayang deui ngiluan mun aya mah,
                narasumberna ge edan atuh ngundang mario teguh mativator edan di
                Indonesia. jadi lebih kabuka pikiran aing bagaimana cara menjadi
                seorang pemimpin jeung hayang di praktekeun langsung di kampus.
                pokonamah hade lah
              </p>
            </div>
            <button className="flex cursor-pointer px-2 py-1 rounded-full  items-center border-[1px] border-primaryColor">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 3C4.239 3 2 5.216 2 7.95C2 10.157 2.875 15.395 11.488 20.69C11.6423 20.7839 11.8194 20.8335 12 20.8335C12.1806 20.8335 12.3577 20.7839 12.512 20.69C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3C14.239 3 12 6 12 6C12 6 9.761 3 7 3Z"
                  fill="#FB6C37"
                  stroke="#FB6C37"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="ml-1">50</span>
            </button>
          </div>
          <div className="flex p-3 mt-6 border-b-[1px] items-start border-[#DFDFDF]">
            <img src={eliza} alt="avatar" />
            <div className="ml-3">
              <p className="text-colorHeading text-sm">Captain America</p>
              <span className="text-xs">5 Jam lalu</span>
              <p className="mt-3 text-sm">
                Alus pisan euy eventna hayang deui ngiluan mun aya mah,
                narasumberna ge edan atuh ngundang mario teguh mativator edan di
                Indonesia. jadi lebih kabuka pikiran aing bagaimana cara menjadi
                seorang pemimpin jeung hayang di praktekeun langsung di kampus.
                pokonamah hade lah
              </p>
            </div>
            <button className="flex cursor-pointer px-2 py-1 rounded-full  items-center border-[1px] border-primaryColor">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 3C4.239 3 2 5.216 2 7.95C2 10.157 2.875 15.395 11.488 20.69C11.6423 20.7839 11.8194 20.8335 12 20.8335C12.1806 20.8335 12.3577 20.7839 12.512 20.69C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3C14.239 3 12 6 12 6C12 6 9.761 3 7 3Z"
                  stroke="#FB6C37"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="ml-1">21</span>
            </button>
          </div>
          <div className="flex p-3 mt-6 border-b-[1px] items-start border-[#DFDFDF]">
            <img src={raisa} alt="avatar" />
            <div className="ml-3">
              <p className="text-colorHeading text-sm">Lili Kitty</p>
              <span className="text-xs">5 Jam lalu</span>
              <p className="mt-3 text-sm">
                Urang karek ngiluan euy acara nu kie, mantep euy. tibaheula
                neangan event siga kieu tapi hese. materina alus gampang nerep
                jeung bisa di praktekeun langsung. semoga event di lobakeun siga
                kieu. aing teh anak organisasi pisan lah pokona mah jadi cocok
                keur urang nu hayang jadi pemimpin di organisasi. pokonamah
                mantap edan lah
              </p>
            </div>
            <button className="flex cursor-pointer px-2 py-1 rounded-full  items-center border-[1px] border-primaryColor">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 3C4.239 3 2 5.216 2 7.95C2 10.157 2.875 15.395 11.488 20.69C11.6423 20.7839 11.8194 20.8335 12 20.8335C12.1806 20.8335 12.3577 20.7839 12.512 20.69C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3C14.239 3 12 6 12 6C12 6 9.761 3 7 3Z"
                  stroke="#FB6C37"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="ml-1">10</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsDetail;
