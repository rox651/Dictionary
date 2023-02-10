import { getWordInfo } from "../../api";
import { useSearchStore } from "../../store/";
import { useQuery } from "@tanstack/react-query";

const WordInfo = () => {
   const { searchText } = useSearchStore();
   const {
      data: wordInformation,
      isLoading,
      error,
   } = useQuery({
      queryKey: ["word", searchText],
      queryFn: ({ queryKey }) => getWordInfo(queryKey[1]),
   });

   if (isLoading) return <span>Loading</span>;

   if (error) return <span>Error</span>;

   return <section>{JSON.stringify(wordInformation)}</section>;
};

export default WordInfo;
