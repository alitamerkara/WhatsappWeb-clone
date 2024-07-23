import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { GoPaperclip } from "react-icons/go";
import { IoMdMore } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { useParams } from "react-router-dom";
import db from "../firebase";

const ChatScreen = ({ randomPhoto }) => {
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  useEffect(() => {
    db.collection("rooms")
      .doc(roomId)
      .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
  }, [roomId]);
  return (
    <div className="w-2/3 bg-gradient-to-r from-blue-100 to-blue-300 flex flex-col justify-between h-full">
      <div>
        <div className="bg-gray-100 flex p-3 justify-between">
          <div className="flex gap-4">
            <img
              src={`https://picsum.photos/seed/${randomPhoto}/200/300`}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="mt-2">
              <h2 className="font-bold">{roomName}</h2>
              <p className="text-neutral-500">Last seen at ...</p>
            </div>
          </div>
          <div className="flex gap-5 text-3xl pt-4 text-neutral-500">
            <IoSearchSharp />
            <GoPaperclip />
            <IoMdMore />
          </div>
        </div>
        <div>
          {/* CHAT SCREEN */}
          <div className="flex gap-3 bg-orange-100 w-48 px-4 py-2 m-8 rounded-3xl">
            <p>Hello World!</p>
            <p className="text-xs pt-2">3:52pm</p>
          </div>
        </div>
      </div>
      <div className="w-full flex border w-1/3 justify-between align-center px-2 py-2 mb-3 text-m rounded-3xl gap-3 bg-white self-end">
        <MdOutlineEmojiEmotions className="mt-1 ml-1 text-3xl cursor-pointer" />
        <input
          type="text"
          className="border-none focus:outline-0 w-11/12 mx-2"
          placeholder="Type Something"
        />
        <FaMicrophone className="mt-1 mr-1 text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default ChatScreen;
