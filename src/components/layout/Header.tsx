import clsx from "clsx";
import { useState } from "react";
import { BiBookBookmark } from "react-icons/bi";
import { BsMoon } from "react-icons/bs";
const Header = () => {
   const [activeDarkButton, setActiveDarkButton] = useState<boolean>(false);
   return (
      <header className="px-5 py-8">
         <div className=" mx-auto grid max-w-7xl grid-cols-[2fr_0.7fr] items-center  dark:text-white">
            <a href="/">
               <BiBookBookmark className=" text-4xl" />
            </a>
            <nav className="grid grid-cols-2 items-center">
               <div className="flex  items-center justify-center border-r-[1px] border-black">
                  Serif
               </div>
               <div className=" flex pl-5   items-center justify-center gap-5 border-l-[1px] border-black">
                  <button
                     className={clsx(
                        !activeDarkButton && "bg-gray-500",
                        "relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-[#f544e5]  transition-colors duration-200 ease-in-out "
                     )}
                     role="switch"
                     onClick={() => setActiveDarkButton(!activeDarkButton)}
                  >
                     <span className="sr-only">Use setting</span>
                     <span
                        className={clsx(
                           activeDarkButton && " translate-x-6",
                           "pointer-events-none inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                        )}
                     />
                  </button>
                  <BsMoon className=" text-2xl" />
               </div>
            </nav>
         </div>
      </header>
   );
};

export default Header;
