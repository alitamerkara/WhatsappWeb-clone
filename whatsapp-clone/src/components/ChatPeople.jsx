import React from "react";
import { FaSearch } from "react-icons/fa";

const ChatPeople = () => {
  return (
    <div className="mt-4">
      <div className="w-full flex border w-1/3 justify-between align-center px-2 py-2 mb-3 text-m rounded-3xl gap-3">
        <FaSearch className="mt-1 ml-1 cursor-pointer" />
        <input
          type="text"
          className="border-none focus:outline-0 w-11/12 mx-2"
          placeholder="Search a chat or start the new one..."
        />
      </div>
      <div className="border p-2 w-full">
        {/* PEOPLE */}
        <div className="flex gap-3 cursor-pointer">
          <img
            src="https://i.pinimg.com/474x/70/01/0d/70010df057bb304649da087fa4966bf0.jpg"
            class="w-16 h-16 rounded-full object-cover"
          />
          <div className="mt-2">
            <h2 className="font-bold">Leo Messi</h2>
            <p>Hello World!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPeople;
