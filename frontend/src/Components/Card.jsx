import React from "react";

export default function Card({ title, author }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white cursor-pointer">
      <img
        className="w-full"
        src="./marvels_spider_man_miles_morales_ps4_and_ps5_video_game_2-wallpaper-1366x768.jpg"
        alt="Book_image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{author}</p>
      </div>
    </div>
  );
}
