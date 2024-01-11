import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-60 px-8">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="w-1/3 my-2 text-lg font-medium">{overview}</p>
      <div className="my-6">
        <button className="px-5 text-xl rounded-sm py-2 bg-gray-500  text-white font-semibold">
          ▶️ Play
        </button>
        <button className="mx-4 px-5 text-xl rounded-sm py-2 bg-gray-500 bg-opacity-50 text-white font-semibold">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
