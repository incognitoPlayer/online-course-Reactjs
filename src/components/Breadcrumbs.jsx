import { Link } from "react-router-dom";

const breadcrumbs = () => {
  return (
    <nav class="bg-grey-light rounded-md w-full mt-[48px]">
      <ol class="list-reset flex items-center ">
        <li>
          <Link to="/dashboard" class="text-primaryColor">
            My Dashboard
          </Link>
        </li>
        <li>
          <div className="w-[7px] h-[7px] bg-[#787889] mx-1 rounded-full" />
        </li>
        <li>
          <a href="#" class="text-[#787889] hover:text-colorParagraph">
            Practice
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default breadcrumbs;
