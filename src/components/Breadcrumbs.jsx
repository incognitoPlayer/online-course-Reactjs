import { Link } from "react-router-dom";

const breadcrumbs = ({ practice }) => {
  return (
    <>
      {practice ? (
        <div>
          <nav className="bg-grey-light rounded-md w-full mt-[48px]">
            <ol className="list-reset flex items-center ">
              <li>
                <Link to="/dashboard" className="text-primaryColor">
                  My Dashboard
                </Link>
              </li>

              <li>
                <div className="w-[7px] h-[7px] bg-[#787889] mx-1 rounded-full" />
              </li>

              <li>
                <Link
                  to="/practice"
                  className="text-[#787889] hover:text-colorParagraph"
                >
                  Practice
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      ) : (
        <div>
          <nav className="bg-grey-light rounded-md w-full mt-[48px]">
            <ol className="list-reset flex items-center ">
              <li>
                <Link to="/dashboard" className="text-primaryColor">
                  My Dashboard
                </Link>
              </li>

              <li>
                <div className="w-[7px] h-[7px] bg-[#787889] mx-1 rounded-full" />
              </li>

              <li>
                <Link to="/practice" className="text-primaryColor">
                  Practice
                </Link>
              </li>

              <li>
                <div className="w-[7px] h-[7px] bg-[#787889] mx-1 rounded-full" />
              </li>

              <li>
                <Link
                  to="/practicedetail"
                  className="text-[#787889] hover:text-colorParagraph"
                >
                  11+ Maths Solved Past Papers
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      )}
    </>
  );
};

export default breadcrumbs;
