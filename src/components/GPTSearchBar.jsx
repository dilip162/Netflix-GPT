import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="px-[20%] py-[8%]">
      <form className="flex items-center" onSubmit={handleForm}>
        <input
          className="text-2xl py-[13px] w-2/3  outline-none px-4"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          type="submit"
          className="text-xl py-4 w-1/6 px-6 bg-red-600 text-white"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
