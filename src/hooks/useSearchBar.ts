import { useSearchStore } from "../store/";
import { FormEvent, useEffect, useRef, useState } from "react";

const useSearchBar = () => {
   const { searchText, updateSearchText } = useSearchStore();

   const inputRef = useRef<HTMLInputElement>(null);

   const [errorInput, setErrorInput] = useState<string>("");

   const onSubmit = (e: FormEvent) => {
      e.preventDefault();
      setErrorInput("");
      if (!inputRef.current?.value.trim()) {
         setErrorInput("You have to write something budy");
         return;
      }

      updateSearchText(inputRef.current?.value.trim());
   };

   useEffect(() => {
      if (inputRef.current?.value) inputRef.current.value = searchText;
   }, [searchText]);
   return { inputRef, onSubmit, searchText, errorInput };
};

export default useSearchBar;
