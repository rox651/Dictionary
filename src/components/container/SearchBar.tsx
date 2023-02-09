import { FormEvent } from "react";

const SearchBar = () => {
   const onSubmit = (e: FormEvent) => {
      e.preventDefault();
   };
   return (
      <form className=" mx-auto max-w-7xl" onSubmit={onSubmit}>
         <fieldset>
            <input
               type="text"
               className="w-full rounded-3xl bg-gray-100 py-6 px-5 text-xl outline-none"
            />
         </fieldset>
      </form>
   );
};

export default SearchBar;
