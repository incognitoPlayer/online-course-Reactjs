import { useState } from "react";

const Dropdown = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div class="relative inline-block text-left ">
        <div>
          <button
            type="button"
            class="inline-flex justify-center items-center w-full rounded-full border border-[#D6D9E4] shadow-sm px-4 py-1 bg-white text-sm font-medium text-[#54586F] hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-2"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setShow(!show)}
          >
            Uncomplete
            <svg
              class="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        {show && (
          <div
            class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1" role="none">
              <a
                href="#"
                class="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                Uncomplete
              </a>
              <a
                href="#"
                class="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                Complete
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
