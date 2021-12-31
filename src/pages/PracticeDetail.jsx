import Pattern2 from "../assets/Pattern-purple.svg";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";

const PracticeDetail = () => {
  return (
    <div className="bg-[#FBE5FF] h-[486px]">
      <img
        src={Pattern2}
        alt="patern"
        className="absolute top-[260px] right-0"
      />
      <div className="bg-white">
        <Navbar profile />
      </div>
      <div className="container mx-auto">
        <Breadcrumbs />
        <h2 className="mt-[40px] text-[40px] font-semibold text-colorHeading">
          11+ Maths Solved Past Papers
        </h2>

        <p className="mt-4 w-1/3 text-base text-colorParagraph">
          141 solved 11+ Maths Past Papers with detailed Answers and
          downloadable PDF Question Papers.
        </p>
      </div>
    </div>
  );
};

export default PracticeDetail;
