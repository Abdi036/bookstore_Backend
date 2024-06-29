import React from "react";

export default function Card() {
  return (
    <div className="border w-full h-auto p-5 cursor-pointer">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full"
          src="./marvels_spider_man_miles_morales_ps4_and_ps5_video_game_2-wallpaper-1366x768.jpg"
          alt="Book_image"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Title</div>
          <p className="text-gray-700 text-base">Author</p>
        </div>
      </div>
    </div>
  );
}
