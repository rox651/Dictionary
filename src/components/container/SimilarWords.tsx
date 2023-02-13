import { useSearchStore } from "../../store";

const SimilarWords = ({
   words,
   isThereWords,
}: {
   words: string[] | undefined;
   isThereWords: boolean;
}) => {
   const { updateSearchText } = useSearchStore();
   return (
      <>
         {isThereWords
            ? words?.map(word => (
                 <span
                    onClick={() => updateSearchText(word)}
                    key={word}
                    className="cursor-pointer  text-[#f544e5] hover:text-[#ae30a3] transition-all hover:font-black"
                 >
                    {word}
                 </span>
              ))
            : "None"}
      </>
   );
};

export default SimilarWords;
