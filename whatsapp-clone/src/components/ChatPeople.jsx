import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChatPeople = ({ id, name }) => {
  return (
    <div>
      <Link to={`/rooms/${id}`}>
        <div className="border p-2 w-full">
          {/* PEOPLE */}
          <div className="flex gap-3 cursor-pointer">
            <img
              src="https://i.pinimg.com/474x/70/01/0d/70010df057bb304649da087fa4966bf0.jpg"
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
