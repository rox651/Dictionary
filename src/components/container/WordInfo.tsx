import { getWordInfo } from "../../api";
import { useSearchStore } from "../../store/";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import Title from "./Title";
import Meanings from "./Meanings";

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
      <section className="px-2 pb-10">
         <div className=" mx-auto mt-10 max-w-7xl ">
            <Title wordInformation={wordInformation} />
            <div className=" space-y-10 mt-12">
               {wordInformation?.meanings.map(meaning => (
                  <Meanings key={meaning.partOfSpeech} meaning={meaning} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default WordInfo;
