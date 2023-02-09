import axios from "axios";

const instance = axios.create({
   baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en",
   timeout: 1000,
   headers: { "X-Custom-Header": "foobar" },
});

export const getWordInfo = async (word: string) => {
   const response = await instance.get(`/${word}`);
   return response;
};
