import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openAi";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const handleForm = (e) => {
    e.preventDefault();
  };

  const handleGptSearchClick = async () => {
    const query =
      "acts as a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      "only give me five movies, comma seperated like the example result given ahead. Example Result : Gadar, Sholay, Golmaal, Phir Hera Pheri, Hangama";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResults.choices);
  };

  return (
    <div className="px-[20%] py-[8%]">
      <form className="flex items-center" onSubmit={handleForm}>
        <input
          ref={searchText}
          className="text-2xl py-[13px] w-2/3  outline-none px-4"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          type="submit"
          className="text-xl py-4 w-1/6 px-6 bg-red-600 text-white"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
