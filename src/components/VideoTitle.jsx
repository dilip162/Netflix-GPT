import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-60 px-8 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl mb-4 font-semibold">{title}</h1>
      <p className="w-1/4 my-2 text-lg ">{overview}</p>
      <div className="my-6">
        <button className="px-6 text-md rounded-lg py-2 bg-white hover:bg-opacity-70  text-black font-semibold">
          ▶️ Play
        </button>
        <button className="mx-6 px-4 text-md rounded-lg py-2 bg-gray-300 bg-opacity-50 text-white font-semibold">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
