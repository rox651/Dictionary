import axios from "axios";
import { WordInformation } from "../types";

const instance = axios.create({
   baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en",
   timeout: 1000,
   headers: { "X-Custom-Header": "foobar" },
});

export const getWordInfo = async (word: string): Promise<WordInformation> => {
   const response = await instance.get(`/${word}`);

   return response.data[0];
};
