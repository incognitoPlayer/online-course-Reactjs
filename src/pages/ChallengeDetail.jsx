import Pattern2 from "../assets/Pattern-purple.svg";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import icon1 from "../assets/iconPoint.svg";
import icon2 from "../assets/practiceIcon.svg";
import icon3 from "../assets/checklistIcon.svg";
import icon4 from "../assets/videoIcon.svg";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

const ChallengeDetail = () => {
  return (
    <>
      <div className="bg-[#F5F6FB]">
        <div className="bg-[#D1F1FF] h-[486px]">
          <div className="bg-white">
            <Navbar profile />
          </div>
          <img
            src={Pattern2}
            alt="patern"
            className="absolute top-[260px] right-0 z-0"
          />
          <div className="container mx-auto">
            <Breadcrumbs
              link1="Challenge"
              link2="Ketidakmerataan Akses dan Fasilitas Pendidikan"
              url="challenge"
            />
            <div className="flex pt-[40px]">
              <div className="flex-1">
                <h2 className="text-[35px] font-semibold text-colorHeading">
                  Ketidakmerataan Akses dan Fasilitas Pendidikan
                </h2>
              </div>
              <div className="flex-1 grid gap-4 grid-cols-2">
                <div>
                  <div className="flex">
                    <img src={icon1} />
                    <span className="ml-3 text-[15px]">
                      300 Point total yang di dapat
                    </span>
                  </div>
                  <div className="flex mt-[64px]">
                    <img src={icon2} />
                    <span className="ml-3 text-[15px]">
                      Challenge Pulau Pendidikan
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <img src={icon3} />
                    <span className="ml-3 text-[15px]">
                      200 Orang mengerjakan
                    </span>
                  </div>
                  <div className="flex mt-[64px]">
                    <img src={icon4} />
                    <span className="ml-3 text-[15px]">
                      12 Video materi practice
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className="relative z-10 pb-[130px]">
          <div className="mt-[-96px] container rounded-3xl bg-white px-5 py-8">
            <div className="flex">
              <div className="w-[70%]">
                <iframe
                  className="w-full aspect-video rounded-2xl mb-4"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                ></iframe>
                <span className="text-[22px] font-medium text-colorHeading">
                  Ketidakmerataan Akses dan Fasilitas Pendidikan
                </span>
              </div>
              <div className="w-[30%] ml-4">
                <span className="text-xl font-medium">Video Playlist</span>
                <div className="overflow-y-auto h-[425px] mt-3 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-gray-100 scrollbarRounded">
                  <ul className="mr-4">
                    <li className="">
                      <div className="flex border-[1px] bg-white border-[#DFDFDF] p-2 rounded-xl hover:shadow-cardShadow hover:border-primaryColor hover:border-[1px] transition duration-300 cursor-pointer">
                        <iframe
                          className="w-[30%] aspect-video rounded-lg"
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        ></iframe>
                        <div className="flex flex-col">
                          <a className="ml-3">Maths - Introduction</a>
                          <a className="ml-3 mt-[5px] text-sm text-primaryColor">
                            5:20 Mins
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="mt-3">
                      <div className="flex border-[1px] bg-white border-[#DFDFDF] p-2 rounded-xl hover:shadow-cardShadow hover:border-primaryColor hover:border-[1px] transition duration-300 cursor-pointer">
                        <iframe
                          className="w-[30%] aspect-video rounded-lg"
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        ></iframe>
                        <div className="flex flex-col">
                          <a className="ml-3">Maths - Introduction</a>
                          <a className="ml-3 mt-[5px] text-sm text-primaryColor">
                            5:20 Mins
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="mt-3">
                      <div className="flex border-[1px] bg-white border-[#DFDFDF] p-2 rounded-xl hover:shadow-cardShadow hover:border-primaryColor hover:border-[1px] transition duration-300 cursor-pointer">
                        <iframe
                          className="w-[30%] aspect-video rounded-lg"
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        ></iframe>
                        <div className="flex flex-col">
                          <a className="ml-3">Maths - Introduction</a>
                          <a className="ml-3 mt-[5px] text-sm text-primaryColor">
                            5:20 Mins
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="mt-3">
                      <div className="flex border-[1px] bg-white border-[#DFDFDF] p-2 rounded-xl hover:shadow-cardShadow hover:border-primaryColor hover:border-[1px] transition duration-300 cursor-pointer">
                        <iframe
                          className="w-[30%] aspect-video rounded-lg"
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        ></iframe>
                        <div className="flex flex-col">
                          <a className="ml-3">Maths - Introduction</a>
                          <a className="ml-3 mt-[5px] text-sm text-primaryColor">
                            5:20 Mins
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="mt-3">
                      <div className="flex border-[1px] bg-white border-[#DFDFDF] p-2 rounded-xl hover:shadow-cardShadow hover:border-primaryColor hover:border-[1px] transition duration-300 cursor-pointer">
                        <iframe
                          className="w-[30%] aspect-video rounded-lg"
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        ></iframe>
                        <div className="flex flex-col">
                          <a className="ml-3">Maths - Introduction</a>
                          <a className="ml-3 mt-[5px] text-sm text-primaryColor">
                            5:20 Mins
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="mt-3">
                      <div className="flex border-[1px] bg-white border-[#DFDFDF] p-2 rounded-xl hover:shadow-cardShadow hover:border-primaryColor hover:border-[1px] transition duration-300 cursor-pointer">
                        <iframe
                          className="w-[30%] aspect-video rounded-lg"
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        ></iframe>
                        <div className="flex flex-col">
                          <a className="ml-3">Maths - Introduction</a>
                          <a className="ml-3 mt-[5px] text-sm text-primaryColor">
                            5:20 Mins
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="mt-3">
                      <div className="flex border-[1px] bg-white border-[#DFDFDF] p-2 rounded-xl hover:shadow-cardShadow hover:border-primaryColor hover:border-[1px] transition duration-300 cursor-pointer">
                        <iframe
                          className="w-[30%] aspect-video rounded-lg"
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        ></iframe>
                        <div className="flex flex-col">
                          <a className="ml-3">Maths - Introduction</a>
                          <a className="ml-3 mt-[5px] text-sm text-primaryColor">
                            5:20 Mins
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="mt-3">
                      <div className="flex border-[1px] bg-white border-[#DFDFDF] p-2 rounded-xl hover:shadow-cardShadow hover:border-primaryColor hover:border-[1px] transition duration-300 cursor-pointer">
                        <iframe
                          className="w-[30%] aspect-video rounded-lg"
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        ></iframe>
                        <div className="flex flex-col">
                          <a className="ml-3">Maths - Introduction</a>
                          <a className="ml-3 mt-[5px] text-sm text-primaryColor">
                            5:20 Mins
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="mt-3">
                      <div className="flex border-[1px] bg-white border-[#DFDFDF] p-2 rounded-xl hover:shadow-cardShadow hover:border-primaryColor hover:border-[1px] transition duration-300 cursor-pointer">
                        <iframe
                          className="w-[30%] aspect-video rounded-lg"
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        ></iframe>
                        <div className="flex flex-col">
                          <a className="ml-3">Maths - Introduction</a>
                          <a className="ml-3 mt-[5px] text-sm text-primaryColor">
                            5:20 Mins
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="mt-3">
                      <div className="flex border-[1px] bg-white border-[#DFDFDF] p-2 rounded-xl hover:shadow-cardShadow hover:border-primaryColor hover:border-[1px] transition duration-300 cursor-pointer">
                        <iframe
                          className="w-[30%] aspect-video rounded-lg"
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        ></iframe>
                        <div className="flex flex-col">
                          <a className="ml-3">Maths - Introduction</a>
                          <a className="ml-3 mt-[5px] text-sm text-primaryColor">
                            5:20 Mins
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Tab.Group>
              <Tab.List className="mt-[64px] pr-4 border-b-[1px]">
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "text-primaryColor pb-2 w-1/5 border-b-2 border-primaryColor"
                      : "w-1/5 pb-2 border-b-1"
                  }
                >
                  Overview Challenge
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "text-primaryColor pb-2 w-1/5 border-b-2 border-primaryColor"
                      : "w-1/5 pb-2 border-b-1"
                  }
                >
                  Challenge Guide
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "text-primaryColor pb-2 w-1/5 border-b-2 border-primaryColor"
                      : "w-1/5 pb-2 border-b-1"
                  }
                >
                  Kerjakan Challenge
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "text-primaryColor pb-2 w-1/5 border-b-2 border-primaryColor"
                      : "w-1/5 pb-2 border-b-1"
                  }
                >
                  Share Practice
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel className="mt-[48px]">
                  <h3 className="text-colorHeading text-2xl mt-[56px]">
                    Kategori Masalah
                  </h3>
                  <p className="mt-3 text-sm leading-6 max-w-5xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                  </p>
                  <h3 className="text-colorHeading text-2xl mt-4">
                    Latar Belakang Masalah
                  </h3>
                  <p className="mt-3 text-sm leading-6 max-w-5xl">
                    Suppose you had a bunch of DVDs at home that you wanted to
                    arrange neatly. What would be the ideal choice for storing
                    such a thing? You could find a cardboard box (or some other
                    box) big enough to arrange all of the DVDs neatly, right?
                    It's as simple as that. However, you might want to add a new
                    DVD to the box, or you might want to get rid of the old ones
                    that you've watched a million times over in the past. An
                    important consideration for this box would be that you would
                    only place DVDs in it and nothing else; you wouldn't place
                    your clothes in it, for example. The box would contain
                    multiple items, but all of them would be of the same type.
                    In this case, that type is DVD. Items of the same type share
                    properties. For DVDs, those properties include:
                    <li className="mt-4 marker:text-gray-300">
                      All the DVDs would be inside a plastic cover.
                    </li>
                    <li className="marker:text-gray-300">
                      The cover would have the name of the movie, the cast, and
                      all sorts of other details.
                    </li>
                    <li className="mb-4 marker:text-gray-300">
                      All the covers would be of exactly the same size and would
                      contain just one, and only one, DVD.
                    </li>
                    You might not actually name the DVD box, but when you want
                    your sister to fetch a DVD, you'd tell her that the DVD is
                    inside your "DVD box", and she would instantly know where to
                    find the box. This is a very simple yet realistic scenario
                    that is easy to understand and relate to. So, now let us
                    move over to the world of computers and port this example to
                    programming.
                  </p>
                </Tab.Panel>
                <Tab.Panel className="mt-[48px]">
                  <h3 className="text-colorHeading text-2xl mt-4">
                    Petunjuk Task
                  </h3>
                  <p className="mt-3 text-sm leading-6 max-w-5xl">
                    You might not actually name the DVD box, but when you want
                    your sister to fetch a DVD, you'd tell her that the DVD is
                    inside your "DVD box", and she would instantly know where to
                    find the box. This is a very simple yet realistic scenario
                    that is easy to understand and relate to. So, now let us
                    move over to the world of computers and port this example to
                    programming:
                    <ul className="mt-3 text-sm list-disc list-inside marker:text-gray-300 leading-6 max-w-5xl">
                      <li className="mt-4 marker:text-gray-300">
                        All the DVDs would be inside a plastic cover.
                      </li>
                      <li className="marker:text-gray-300">
                        The cover would have the name of the movie, the cast,
                        and all sorts of other details.
                      </li>
                      <li className="mb-4 marker:text-gray-300">
                        All the covers would be of exactly the same size and
                        would contain just one, and only one, DVD.
                      </li>
                    </ul>
                  </p>
                </Tab.Panel>
                <Tab.Panel className="mt-[48px]">
                  <h3 className="text-colorHeading text-2xl mt-4">
                    Kerjakan Challenge
                  </h3>
                  <ul className="list-decimal px-3 mt-5">
                    <li className="font-medium text-base text-colorHeading">
                      Bagaimana kita cara mengatasi masalah tersebut? sebutkan
                      langkah langkah yang harus kita lakukan dari awal hingga
                      akhir sampai semuanya terjelaskan dan terselesaikan
                      masalahnya
                    </li>
                  </ul>
                  <textarea
                    type="text"
                    className="h-[350px] pt-[24px] pl-[24px] w-full mt-4 rounded-[20px] border-[1px] border-[#efefef] bg-[#FAFBFD] text-[#54586F]"
                    placeholder="Ketik Jawabanmu disini..."
                  />
                  <Link
                    className="text-white bg-primaryColor inline-block mt-[40px] lg:text-sm lg:px-8 lg:py-2 2xl:px-[40px] 2xl:py-[18px] rounded-full"
                    to="/register"
                  >
                    Submit Jawaban
                  </Link>
                </Tab.Panel>
                <Tab.Panel className="mt-[64px]">
                  <h3 className="text-colorHeading text-2xl mt-[56px] mb-3">
                    Share Challenge ini Keteman Kamu!
                  </h3>
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
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <Newsletter />
      <Footer />
    </>
  );
};

export default ChallengeDetail;
