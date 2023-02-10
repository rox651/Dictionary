import { useSearchStore } from "../../store/";
import { FormEvent, useRef, useState } from "react";

const SearchBar = () => {
   const { searchText, updateSearchText } = useSearchStore();
   const input = useRef<HTMLInputElement>(null);
   const [error, setError] = useState<string>("");
   const onSubmit = (e: FormEvent) => {
      e.preventDefault();
      setError("");
      if (!input.current?.value.trim()) {
         setError("You have to write something budy");
         return;
      }

      updateSearchText(input.current?.value.trim());
   };
   return (
      <form className=" mx-auto max-w-7xl" onSubmit={onSubmit}>
         <fieldset>
            <input
               ref={input}
               placeholder="Write a word"
               type="text"
               defaultValue={searchText}
               className="w-full rounded-3xl bg-gray-100 py-6 px-5 text-xl outline-none"
            />
            {error && <span className="text-red-500">{error}</span>}
         </fieldset>
      </form>
   );
};

export default SearchBar;
