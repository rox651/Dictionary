import { useSearchBar } from "../../hooks";

const SearchBar = () => {
   const { inputRef, onSubmit, searchText, errorInput } = useSearchBar();

   return (
      <form className=" mx-auto max-w-7xl" onSubmit={onSubmit}>
         <fieldset>
            <input
               ref={inputRef}
               placeholder="Write a word"
               type="text"
               defaultValue={searchText}
               className="w-full rounded-3xl bg-gray-100 py-6 px-5 text-xl outline-none"
            />
            {errorInput && <span className="text-red-500">{errorInput}</span>}
         </fieldset>
      </form>
   );
};

export default SearchBar;
