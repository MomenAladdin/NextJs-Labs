"use client";

import { useRouter } from "next/navigation";

import { useState } from "react";

const Card = ({ title, image, description, id }) => {
  const [count, setCount] = useState(0);
  const router = useRouter();

  const handleLikeInc = () => {
    setCount(count + 1);
  };

  const handleLikeDec = () => {
    setCount(count - 1);
  };

  const handleClick = (id) => {
    router.push(`explore/${id}`);
  };

  return (
    <div className="flex flex-col rounded-2xl w-64 h-[400px] bg-[#ffffff] shadow-xl cursor-pointer">
      <figure
        className="flex justify-center items-center rounded-t-2xl h-1/2"
        onClick={() => handleClick(id)}
      >
        <img
          src={image}
          alt="game-img"
          className="rounded-t-2xl w-full h-full object-cover"
        />
      </figure>
      <div className="flex flex-col p-6 h-1/2 flex-grow">
        <div className="text-2xl font-bold text-[#374151] pb-4 truncate">
          {title}
        </div>
        <div className="text-lg text-[#374151] h-24 overflow-hidden">
          <p className="h-full overflow-hidden text-ellipsis">{description}</p>
        </div>
        <div className="flex justify-end pt-4">
          <button
            className="bg-[#7e22ce] text-[#ffffff] font-bold text-base p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform"
            onClick={handleLikeInc}
          >
            Like
          </button>
          <button
            className="bg-[#7e22ce] ms-3 text-[#ffffff] font-bold text-base p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform"
            onClick={count !== 0 ? handleLikeDec : null}
          >
            Dislike
          </button>
          <span className="text-[#374151] font-bold text-sm ms-3 bg-gray-200 border border-gray-400 rounded-lg py-1 px-2 shadow-md hover:bg-gray-300 transition-all">
            {count}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
