import { useMemo } from "react";
import { WordInformation } from "@/src/types";
import { BiPlay } from "react-icons/bi";
import { useState, useEffect } from "react";

const Title = ({ wordInformation }: { wordInformation: WordInformation | undefined }) => {
   const [isPlaying, setIsPlaying] = useState<boolean>(false);
   const audioSrc = wordInformation?.phonetics.filter(phoneticElement => phoneticElement.audio)[0];

   const audio = useMemo(() => new Audio(audioSrc?.audio), [wordInformation]);

   const handlePlay = () => {
      setIsPlaying(true);
      audio.play();
   };


   return (
      <div className="flex items-center justify-between">
         <h2 className=" text-5xl font-bold">{wordInformation?.word}</h2>
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
