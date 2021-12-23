import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import success from "../assets/success.svg";

const Modal = ({ isOpen, closeModal, openModal }) => {
  // let [isOpen, setIsOpen] = useState(true);

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // function openModal() {
  //   setIsOpen(true);
  // }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-black/60"
          onClose={openModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <img src={success} alt="s" className="mx-auto" />
                <Dialog.Title
                  as="h3"
                  className="text-3xl  font-medium leading-6 mt-10 text-gray-900"
                >
                  Kamu Berhasil Daftar!
                </Dialog.Title>
                <div className="mt-6">
                  <p className="text-base w-4/5 text-center mx-auto text-gray-500">
                    Silahkan login dengan akun yang sudah kamu buat
                  </p>
                </div>

                <div className="mt-10">
                  <button
                    type="button"
                    className="block w-full justify-center px-4 py-2 text-sm font-medium  border border-transparent rounded-full bg-[#f05d27] text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Login Sekarang
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
