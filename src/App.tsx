import { Header, SearchBar } from "./components";

const App = () => {
   return (
      <main className="min-h-screen bg-white dark:bg-[#050505]">
         <Header />
         <div className="px-5">
            <SearchBar />
         </div>
      </main>
   );
};

export default App;
