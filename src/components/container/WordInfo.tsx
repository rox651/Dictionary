import { getWordInfo } from "../../api";
import { useSearchStore } from "../../store/";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import Title from "./Title";

const WordInfo = () => {
   const { searchText } = useSearchStore();
   const {
      data: wordInformation,
      error,
      isLoading,
   } = useQuery({
      queryKey: ["word", searchText],
      queryFn: ({ queryKey }) => getWordInfo(queryKey[1]),
   });

   if (isLoading) return <Loading />;

   if (error instanceof AxiosError) return <ErrorMessage message={error.response?.data?.message} />;

   return (
      <section className="px-2">
         <div className=" mx-auto mt-10 max-w-7xl "><Title wordInformation={wordInformation}/></div>
      </section>
   );
};

export default WordInfo;
