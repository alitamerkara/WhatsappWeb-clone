import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdDonutLarge } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import ChatPeople from "./ChatPeople";

const Sidebar = () => {
  return (
    <div className="w-1/3  h-full border-r">
      <div className="flex p-3 justify-between">
        <div>
          <CgProfile className=" text-5xl" />
        </div>
        <div className="flex gap-3 mt-2">
          <MdDonutLarge className=" text-3xl" />
          <MdMessage className=" text-3xl" />
          <IoMdMore className=" text-3xl" />
        </div>
      </div>
      <ChatPeople />
    </div>
  );
};

export default Sidebar;
