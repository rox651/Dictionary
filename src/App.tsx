import { useEffect } from "react";
import { Header, SearchBar, WordInfo } from "./components";
import { useSearchStore } from "./store";

const App = () => {
   const { searchText } = useSearchStore();
   useEffect(() => {
      window.scrollTo({
         top: 100,
         left: 100,
         behavior: "smooth",
      });
   }, [searchText]);

   return (
      <main className="min-h-screen bg-white dark:bg-[#050505]">
         <Header />
         <div className="px-5">
            <SearchBar />
            <WordInfo />
         </div>
      </main>
   );
};

export default App;
