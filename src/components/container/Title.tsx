import { useMemo, useState } from "react";
import { BiPlay } from "react-icons/bi";
import { WordInformation } from "@/src/types";

const Title = ({ wordInformation }: { wordInformation: WordInformation | undefined }) => {
   const audioSrc = wordInformation?.phonetics.filter(phoneticElement => phoneticElement.audio)[0];

   const audio = useMemo(() => new Audio(audioSrc?.audio), [wordInformation]);

   const handlePlay = () => {
      audio.play();
   };

   return (
      <div className="flex items-center justify-between">
         <div>
            <h2 className="text-7xl font-bold capitalize">{wordInformation?.word}</h2>
            <h2 className=" mt-2 text-3xl font-medium text-[#f544e5]">
               {wordInformation?.phonetic}
            </h2>
         </div>
         {audioSrc?.audio && (
            <button
               onClick={handlePlay}
               className=" grid  h-32 w-32 place-items-center rounded-full bg-[#f544e5]/30 disabled:opacity-50"
            >
               <BiPlay className="text-7xl text-[#f544e5]" />
            </button>
         )}
      </div>
   );
};

export default Title;
