/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import cs from "classnames";
import { unAuthorizedRoute } from "../../../routes/Routes";
import { useLocation } from "react-router-dom";

interface Props {
  show: boolean;
  toggle: VoidFunction;
  children: React.ReactNode;
  overlay?: boolean;
}
export const SlideOver = (props: Props) => {
  const { show, toggle, children, overlay = false } = props;
  const { pathname } = useLocation();
  return (
    <Transition.Root show={show}>
      <Dialog
        as="div"
        className="fixed inset-0 right-0 left-auto z-20 overflow-auto w-[70%]"
        onClose={toggle}
      >
        <div className="absolute inset-0 h-screen overflow-auto">
          <Transition.Child
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 transition-opacity bg-opacity-75" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 w-[70%] h-full max-w-full pl-10 ">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-full h-full mr-auto">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute flex top-0  left-0 md:left-[60%] -ml-6 pt-4 pr-2 lg:hidden sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className={cs({
                        "text-gray-300 bg-[#1D1D1D] rounded-full hover:text-white focus:outline-none focus:ring-0 p-1":
                          true,
                        hidden: unAuthorizedRoute.includes(pathname),
                      })}
                      onClick={toggle}
                    >
                      <XIcon className="w-10 text-white transition-all duration-75 ease-in-out hover:cursor-pointer hover:text-opacity-90" />
                    </button>
                  </div>
                </Transition.Child>
                {children}
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
