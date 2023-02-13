import { Meaning } from "@/src/types";
import SimilarWords from "./SimilarWords";

const Meanings = ({ meaning }: { meaning: Meaning | undefined }) => {
   const lengthSyn = !!meaning?.synonyms.length;
   const lengthAnt = !!meaning?.antonyms.length;
   return (
      <article className=" mx-auto grid max-w-7xl gap-4  ">
         <div className="flex items-center gap-3 ">
            <h3 className=" text-3xl font-semibold">{meaning?.partOfSpeech}</h3>
            <span className=" h-[2px] w-full bg-gray-200"></span>
         </div>
         <h4 className=" text-2xl text-gray-400 ">Meaning</h4>
         <ul className="pl-16 ">
            {meaning?.definitions.map(definition => (
               <li key={definition.definition} className="list-disc text-xl marker:text-[#f544e5] ">
                  {definition.definition}
               </li>
            ))}
         </ul>
         <div className="mt-2 flex gap-4 text-lg">
            <h4 className="">Synonyms:</h4>
            <SimilarWords isThereWords={lengthSyn} words={meaning?.synonyms} />
         </div>
         <div className="flex gap-4 text-lg ">
            <h4 className="">Antonyms:</h4>
            <SimilarWords isThereWords={lengthAnt} words={meaning?.antonyms} />
         </div>
      </article>
   );
};

export default Meanings;
