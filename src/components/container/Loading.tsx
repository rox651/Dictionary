import { BiLoaderAlt } from "react-icons/bi";

const Loading = () => {
   return (
      <section className=" mx-auto min-h-[400px] max-w-7xl grid place-items-center">
         <BiLoaderAlt className=" animate-spin text-5xl" />
      </section>
   );
};

export default Loading;
