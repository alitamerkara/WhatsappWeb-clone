import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChatPeople = ({ id, name, randomPhoto }) => {
  // const category = ["nature", "car", "flower", "people", "baby"];
  // const randomCategory = () => Math.floor(Math.random() * 5);

  return (
    <div>
      <Link to={`/rooms/${id}`}>
        <div className="border p-2 w-full">
          {/* PEOPLE */}
          <div className="flex gap-3 cursor-pointer">
            <img
              src={`https://picsum.photos/seed/${randomPhoto}/200/300`}
              class="w-16 h-16 rounded-full object-cover"
            />
            <div className="mt-2">
              <h2 className="font-bold">{name}</h2>
              <p>Hello World!</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChatPeople;
