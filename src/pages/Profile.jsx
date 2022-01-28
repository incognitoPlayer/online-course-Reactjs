import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import avatar from "../assets/avatar-profile.svg";
import practice from "../assets/profile/practice.svg";
import challenge from "../assets/profile/challenge.svg";
import calendar from "../assets/profile/calendar.svg";
import events from "../assets/profile/events.svg";
import search from "../assets/search.svg";
import edit from "../assets/profile/edit.svg";
import left from "../assets/left.svg";
import rightt from "../assets/rightt.svg";
import { Tab } from "@headlessui/react";
import Dropdown from "../components/Dropdown";
import { Link } from "react-router-dom";
import right from "../assets/right.svg";
import PasswordForm from "../components/PasswordForm";
import { useEffect, useState } from "react";
import Checkbox from "../components/Checkbox";
import InputForm from "../components/InputForm";

const Profile = () => {
  const [input, setInput] = useState({
    password: "",
    newPassword: "",
  });
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(false);
  const [editAccount, setEditAccount] = useState(false);
  const [drop, setDrop] = useState(false);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name !== "confirmPassword") {
      setInput({ ...input, [name]: value });
    } else {
      setPasswordConfirmation(value);
    }
  };

  const information = [
    {
      title: "Nama Lengkap",
      desc: "Adam Smith",
    },
    {
      title: "Username",
      desc: "@freakScobedo",
    },
    {
      title: "Email",
      desc: "adamsmith@gmail.com",
    },
    {
      title: "Phone Number",
      desc: "+62 896 666 666",
    },
    {
      title: "Asal Kota/Kabupaten/Provinsi",
      desc: "Sukabumi, Jawa Barat",
    },
    {
      title: "Tanggal Lahir",
      desc: "29 December 1996",
    },
    {
      title: "Jenis Kelamin",
      desc: "Laki Laki",
    },
    {
      title: "Asal Kampus",
      desc: "Institut Teknologi Bandung",
    },
    {
      title: "NIM (Nomor Induk Kampus)",
      desc: "1234 5678 8910",
    },
    {
      title: "Kota/Kabupaten/Provinsi Kampus",
      desc: "Bandung, Jawa Barat",
    },
    {
      title: "Jurusan",
      desc: "Sastra Bahasa Jepang",
    },
    {
      title: "Tahun Masuk Kuliah",
      desc: "2018",
    },
  ];
  console.log(editAccount);
  return (
    <>
      <div className="bg-white">
        <Navbar profile />
      </div>
      <div className="bg-[#F5F6FB]">
        <div className="container mx-auto ">
          <Breadcrumbs practice link="Profile" />
          <div className="grid grid-cols-3 gap-3 mt-[40px] pb-[110px]">
            <Tab.Group>
              <div className="bg-white px-3 h-full rounded-3xl flex flex-col text-center">
                <img
                  src={avatar}
                  alt="avatar"
                  className="mt-[40px] w-[130px] h-[130px] mx-auto"
                />
                <p className="mt-[20px] text-lg font-medium text-colorHeading">
                  Adam Smith
                </p>
                <p className="mt-3 text-colorParagraph text-base">
                  @freakScobedo
                </p>
                <Tab.List
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 40,
                    position: "relative",
                  }}
                >
                  <Tab
                    className={({ selected }) =>
                      selected
                        ? "text-primaryColor bg-[#F5F6FB] rounded-xl py-3 pl-[24px]"
                        : "py-3 pl-[24px] text-[#6B6B81]"
                    }
                  >
                    <div className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.845 21.6633C8.153 21.6633 5 21.0883 5 18.7883C5 16.4873 8.133 14.3633 11.845 14.3633C15.536 14.3633 18.689 16.4663 18.689 18.7673C18.689 21.0673 15.556 21.6633 11.845 21.6633Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.8372 11.1744C13.0007 11.1744 14.1166 10.7122 14.9393 9.88947C15.762 9.06675 16.2242 7.9509 16.2242 6.78739C16.2242 5.62389 15.762 4.50804 14.9393 3.68531C14.1166 2.86259 13.0007 2.40039 11.8372 2.40039C10.6738 2.40066 9.5581 2.86294 8.73544 3.68561C7.91278 4.50827 7.45049 5.62397 7.45022 6.78739C7.44812 7.36148 7.55913 7.93037 7.77691 8.46155C7.9947 8.99274 8.31499 9.47582 8.71949 9.8832C9.124 10.2906 9.60479 10.6143 10.1344 10.8358C10.664 11.0574 11.2321 11.1724 11.8062 11.1744H11.8372Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p className="text-base ml-1">Account Information</p>
                    </div>
                  </Tab>
                  <div
                    className={`text-[#6B6B81] rounded-xl py-3 pl-[24px] ${
                      drop ? "bg-[#F5F6FB] " : "bg-white"
                    }`}
                  >
                    <div
                      className="flex cursor-pointer items-center justify-between "
                      onClick={() => setDrop(!drop)}
                    >
                      <div className="flex items-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.3916 17.5349V15.6719"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M12 17.5346V13.8086"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M16.6084 17.5355V11.9375"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M16.6076 6.46484L16.1936 6.95084C13.8959 9.63358 10.8192 11.5336 7.3916 12.3868"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M13.9717 6.46484H16.6087V9.09284"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.3 21H14.7C19.2 21 21 19.2 21 14.7V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3V14.7C3 19.2 4.8 21 9.3 21Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <p className="text-base ml-1">My Productivity</p>
                      </div>
                      <svg
                        className="h-4 w-4 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {drop && (
                      <>
                        <div>
                          <Tab
                            className={({ selected }) =>
                              selected
                                ? "text-primaryColor text-left ml-4 bg-[#F5F6FB] block rounded-xl py-3 "
                                : "py-3 block text-left ml-4 text-[#6B6B81]"
                            }
                          >
                            <p className="text-base ml-1">Practice</p>
                          </Tab>
                        </div>
                        <div>
                          <Tab
                            className={({ selected }) =>
                              selected
                                ? "text-primaryColor text-left ml-4 bg-[#F5F6FB] block rounded-xl py-3 "
                                : "py-3 block text-left ml-4 text-[#6B6B81]"
                            }
                          >
                            <p className="text-base ml-1">Challenge</p>
                          </Tab>
                        </div>
                        <div>
                          <Tab
                            className={({ selected }) =>
                              selected
                                ? "text-primaryColor text-left ml-4 bg-[#F5F6FB] block rounded-xl py-3 "
                                : "py-3 block text-left ml-4 text-[#6B6B81]"
                            }
                          >
                            <p className="text-base ml-1">Events</p>
                          </Tab>
                        </div>
                      </>
                    )}
                  </div>
                  <Tab
                    className={({ selected }) =>
                      selected
                        ? "text-primaryColor bg-[#F5F6FB] rounded-xl py-3 pl-[24px]"
                        : "py-3 pl-[24px] text-[#6B6B81]"
                    }
                  >
                    <div className="flex items-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.334 0.75H5.665C2.645 0.75 0.75 2.89 0.75 5.916V14.084C0.75 17.111 2.635 19.25 5.665 19.25H14.333C17.364 19.25 19.25 17.111 19.25 14.084V5.916C19.25 2.89 17.364 0.75 14.334 0.75Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.69033 10.0004C8.69033 10.3667 8.58174 10.7247 8.37828 11.0293C8.17482 11.3338 7.88564 11.5712 7.54729 11.7114C7.20894 11.8516 6.83661 11.8883 6.47739 11.8169C6.11816 11.7455 5.78817 11.5693 5.52912 11.3104C5.27007 11.0514 5.09361 10.7215 5.02204 10.3624C4.95046 10.0032 4.987 9.63083 5.12702 9.2924C5.26704 8.95397 5.50426 8.66466 5.80869 8.46104C6.11311 8.25742 6.47108 8.14864 6.83733 8.14844H6.84033C7.33116 8.14897 7.80171 8.34432 8.1486 8.69158C8.49548 9.03884 8.69033 9.5096 8.69033 10.0004V10.0004Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.69238 10H15.0104V11.852"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.1816 11.852V10"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p className="text-base ml-1">Change Password</p>
                    </div>
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      selected
                        ? "text-primaryColor bg-[#F5F6FB] rounded-xl py-3 pl-[24px]"
                        : "py-3 pl-[24px] text-[#6B6B81]"
                    }
                  >
                    <div className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 17.848C17.64 17.848 20.248 17.124 20.5 14.221C20.5 11.319 18.681 11.505 18.681 7.945C18.681 5.165 16.045 2 12 2C7.955 2 5.319 5.164 5.319 7.945C5.319 11.505 3.5 11.32 3.5 14.221C3.753 17.135 6.362 17.848 12 17.848V17.848Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.3886 20.8574C13.0246 22.3724 10.8966 22.3904 9.51855 20.8574"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p className="text-base ml-1">Newslatter Notification</p>
                    </div>
                  </Tab>

                  <div
                    className={`flex items-center text-[#6B6B81] w-full rounded-xl py-3 pl-[24px] absolute ${
                      drop ? "-bottom-[100px]" : "-bottom-[270px]"
                    }`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5714 4H5C3.89543 4 3 4.89543 3 6V17.4286C3 18.5331 3.89543 19.4286 5 19.4286H11.0739"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.4688 11.3348H19.2783"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.4783 6.57227L20.2402 11.3342L15.4783 16.0961"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="text-base ml-1">Logout</p>
                  </div>
                </Tab.List>
              </div>
              <div className="bg-white col-span-2 rounded-3xl pt-5 px-[40px] h-[800px]">
                <Tab.Panels>
                  <Tab.Panel>
                    <h3 className="text-colorHeading text-xl border-b-[1px] pb-3 border-[#DCDCDC]">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-2 mt-4">
                      {information.map((item, i) => (
                        <>
                          <p
                            key={i}
                            className="pb-4 text-[#3A395B] font-medium text-base"
                          >
                            {item.title}
                          </p>
                          {editAccount ? (
                            <input
                              placeholder="Masukan nomer hp/email"
                              name={item.title}
                              value={item.desc}
                              className="bg-[#FAFAFA] border rounded-lg mb-1 2xl:text-sm lg:text-xs font-regular py-1 px-3 text-colorHeading leading-tight focus:outline-none focus:shadow-outline focus:border-primaryColor border-[#e4e4e4] focus:ring-0 "
                            />
                          ) : (
                            <p className="text-colorParagraph text-base">
                              {item.desc}
                            </p>
                          )}
                        </>
                      ))}
                    </div>
                    {editAccount ? (
                      <>
                        <button className="bg-primaryColor text-white py-2 px-2 rounded-lg 2xl:text-base lg:text-sm mt-[32px]">
                          Save Changes
                        </button>
                        <button
                          onClick={() => setEditAccount(false)}
                          className="bg-white text-primaryColor border-primaryColor border-[1px] ml-4 py-2 px-2 rounded-lg 2xl:text-base lg:text-sm mt-[32px]"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setEditAccount(true)}
                        className="bg-white flex items-center text-primaryColor border-primaryColor border-[1px] py-2 pl-[20px] rounded-lg w-1/4 2xl:text-base lg:text-sm font-medium mt-[32px]"
                      >
                        <img src={edit} className="mr-1" alt="edit" />
                        Edit Information
                      </button>
                    )}
                  </Tab.Panel>
                  {drop && (
                    <>
                      <Tab.Panel>
                        <h3 className="text-colorHeading text-xl border-b-[1px] pb-3 border-[#DCDCDC]">
                          Practices Already Done
                        </h3>
                        <div className="flex justify-between mt-4">
                          <div className="flex w-1/2 items-center h-[50px] bg-[#F5F6FB] text-[#54586F] rounded-full ">
                            <img
                              src={search}
                              alt="search"
                              className="w-5 h-5 ml-3"
                            />
                            <input
                              className="rounded-full h-full text-sm focus:outline-none focus:border w-full outline-none border-none bg-[#F5F6FB] text-[#54586F] focus:ring-0"
                              type="text"
                              placeholder="Search Practice ..."
                            />
                          </div>
                          <Dropdown />
                        </div>
                        {/* table */}
                        <div className="mt-5">
                          <table className="w-full">
                            <tbody>
                              {Array(8)
                                .fill()
                                .map((_, i) => (
                                  <tr key={i} className=" h-[70px]">
                                    <td className="text-colorHeading">
                                      {i + 1}.
                                    </td>
                                    <td>
                                      <div className="flex  items-center">
                                        <img src={practice} alt="avatar" />
                                        <div className="ml-3">
                                          <p className="text-sm text-colorHeading font-medium">
                                            11+ Maths Solved Past Papers
                                          </p>
                                          <p className="text-[#72778B] text-xs">
                                            Telah di selesaikan pada 17:38 - 19
                                            January 2021
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <button className="bg-white justify-end flex items-center underline transition duration-500 text-primaryColor border-none py-2 w-full 2xl:text-base lg:text-sm font-medium ">
                                        Kerjakan Practice
                                        <img src={right} alt="right" />
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="flex justify-center mt-[10px] mb-[100px]">
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
                      </Tab.Panel>
                      <Tab.Panel>
                        <h3 className="text-colorHeading text-xl border-b-[1px] pb-3 border-[#DCDCDC]">
                          Challenge Already Done
                        </h3>
                        <div className="flex justify-between mt-4">
                          <div className="flex w-1/2 items-center h-[50px] bg-[#F5F6FB] text-[#54586F] rounded-full ">
                            <img
                              src={search}
                              alt="search"
                              className="w-5 h-5 ml-3"
                            />
                            <input
                              className="rounded-full h-full text-sm focus:outline-none focus:border w-full outline-none border-none bg-[#F5F6FB] text-[#54586F] focus:ring-0"
                              type="text"
                              placeholder="Search Practice ..."
                            />
                          </div>
                          <Dropdown />
                        </div>
                        {/* table */}
                        <div className="mt-5">
                          <table className="w-full">
                            <tbody>
                              {Array(8)
                                .fill()
                                .map((_, i) => (
                                  <tr key={i} className=" h-[70px]">
                                    <td className="text-colorHeading">
                                      {i + 1}.
                                    </td>
                                    <td>
                                      <div className="flex  items-center">
                                        <img src={challenge} alt="avatar" />
                                        <div className="ml-3">
                                          <p className="text-sm text-colorHeading font-medium">
                                            Ketidakmerataan Akses dan Fasilitas
                                            Pendidikan
                                          </p>
                                          <p className="text-[#72778B] text-xs">
                                            Telah di selesaikan pada 17:38 - 19
                                            January 2021
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <button className="bg-white justify-end flex items-center underline transition duration-500 text-primaryColor border-none py-2 w-full 2xl:text-base lg:text-sm font-medium ">
                                        Lihat Challenge
                                        <img src={right} alt="right" />
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="flex justify-center mt-[10px] mb-[100px]">
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
                      </Tab.Panel>
                      <Tab.Panel>
                        <h3 className="text-colorHeading text-xl border-b-[1px] pb-3 border-[#DCDCDC]">
                          Events Already Done
                        </h3>
                        <div className="flex justify-between mt-4">
                          <div className="flex w-1/2 items-center h-[50px] bg-[#F5F6FB] text-[#54586F] rounded-full ">
                            <img
                              src={search}
                              alt="search"
                              className="w-5 h-5 ml-3"
                            />
                            <input
                              className="rounded-full h-full text-sm focus:outline-none focus:border w-full outline-none border-none bg-[#F5F6FB] text-[#54586F] focus:ring-0"
                              type="text"
                              placeholder="Search Practice ..."
                            />
                          </div>
                          <Dropdown />
                        </div>
                        {/* table */}
                        <div className="mt-5">
                          <table className="w-full">
                            <tbody>
                              {Array(8)
                                .fill()
                                .map((_, i) => (
                                  <tr key={i} className=" h-[70px]">
                                    <td className="text-colorHeading">
                                      {i + 1}.
                                    </td>
                                    <td>
                                      <div className="flex  items-center">
                                        <img src={events} alt="avatar" />
                                        <div className="ml-3">
                                          <p className="text-sm text-colorHeading font-medium">
                                            Menjadi Pemimpin yang Mampu Membuat
                                            Perubahan Terhadap Negeri
                                          </p>
                                          <div className="flex items-center">
                                            <img
                                              src={calendar}
                                              alt="calendar"
                                            />
                                            <p className="text-[#72778B] text-sm ml-1">
                                              1 Januari 2022, 13:00 WIB - 1
                                              Januari 2022, 16:00 WIB
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <button className="bg-white justify-end flex items-center underline transition duration-500 text-primaryColor border-none py-2 w-full 2xl:text-base lg:text-sm font-medium ">
                                        Lihat Event
                                        <img src={right} alt="right" />
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="flex justify-center mt-[10px] mb-[100px]">
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
                      </Tab.Panel>
                    </>
                  )}
                  <Tab.Panel>
                    <h3 className="text-colorHeading text-xl border-b-[1px] pb-3 border-[#DCDCDC]">
                      Ganti Kata Sandi
                    </h3>
                    <div className="grid grid-cols-2 mt-4 items-center">
                      <p className="font-medium">Masukan Kata Sandi Lama</p>
                      <PasswordForm
                        desc="Masukan kata sandi"
                        name="password"
                        min="8"
                        value={input.password}
                        show={show}
                        onChange={handleInput}
                        onClick={() => setShow(!show)}
                      />
                    </div>
                    <div className="grid grid-cols-2 mt-1 items-center">
                      <p className="font-medium">Masukan Kata Sandi Baru</p>
                      <PasswordForm
                        desc="Masukan kata sandi"
                        name="newPassword"
                        min="8"
                        show={show}
                        value={input.newPassword}
                        onChange={handleInput}
                        onClick={() => setShow(!show)}
                      />
                    </div>
                    <div className="grid grid-cols-2 mt-1 items-center">
                      <p className="font-medium">Konfirmasi Kata Sandi Baru</p>
                      <PasswordForm
                        desc="Masukan kata sandi"
                        name="confirmPassword"
                        min="8"
                        show={show}
                        value={passwordConfirmation}
                        onChange={handleInput}
                        onClick={() => setShow(!show)}
                      />
                    </div>
                    {input.password ? (
                      <>
                        <button className="bg-primaryColor text-white py-2 px-2 rounded-lg 2xl:text-base lg:text-sm mt-[32px]">
                          Save Changes
                        </button>
                        <button className="bg-white text-primaryColor border-primaryColor border-[1px] ml-4 py-2 px-2 rounded-lg 2xl:text-base lg:text-sm mt-[32px]">
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button className="bg-white flex items-center text-primaryColor border-primaryColor border-[1px] py-2 pl-[10px] rounded-lg w-1/4 2xl:text-base lg:text-sm font-medium mt-[32px]">
                        <img src={edit} className="mr-1" alt="edit" />
                        Change Password
                      </button>
                    )}
                  </Tab.Panel>
                  <Tab.Panel>
                    <h3 className="text-colorHeading text-xl border-b-[1px] pb-3 border-[#DCDCDC]">
                      Newsletter Notification
                    </h3>
                    <div className="mt-4">
                      <Checkbox
                        titleStyle="text-base"
                        title="Kirim saya notifikasi email jika ada info apapun dari Tokoh Muda Indonesia"
                        onChange={() => setChecked(!checked)}
                      />
                      <Checkbox
                        titleStyle="text-base"
                        title="Kirim saya email jika ada update Practice baru"
                        onChange={() => setChecked(!checked)}
                      />
                      <Checkbox
                        titleStyle="text-base"
                        title="Kirim saya email jika ada update Challenge baru"
                        onChange={() => setChecked(!checked)}
                      />
                      <Checkbox
                        titleStyle="text-base"
                        title="Kirim saya email jika ada update Events baru"
                        onChange={() => setChecked(!checked)}
                      />
                    </div>
                    {checked && (
                      <>
                        <button className="bg-primaryColor text-white py-2 px-2 rounded-lg 2xl:text-base lg:text-sm mt-[32px]">
                          Save Changes
                        </button>
                        <button className="bg-white text-primaryColor border-primaryColor border-[1px] ml-4 py-2 px-2 rounded-lg 2xl:text-base lg:text-sm mt-[32px]">
                          Cancel
                        </button>
                      </>
                    )}
                  </Tab.Panel>
                </Tab.Panels>
              </div>
            </Tab.Group>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
