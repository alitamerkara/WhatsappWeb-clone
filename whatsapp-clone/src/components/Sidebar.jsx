import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdDonutLarge } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import ChatPeople from "./ChatPeople";
import { FaSearch } from "react-icons/fa";
import db from "../firebase";

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  const [newChat, setNewChat] = useState(false);
  const startChat = (e) => {
    e.preventDefault();
    const roomName = prompt("pls enter a name");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };
  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    (error) => {
      console.error("Error fetching rooms:", error);
    };

    return () => unsubscribe();
  }, []);
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
      <div className="mt-4">
        <div
          className="font-bold text-center cursor-pointer"
          onClick={startChat}
        >
          <h1>ADD NEW CHAT</h1>
        </div>
        <div className="w-full flex border w-1/3 justify-between align-center px-2 py-2 mb-3 text-m rounded-3xl gap-3">
          <FaSearch className="mt-1 ml-1 cursor-pointer" />
          <input
            type="text"
            className="border-none focus:outline-0 w-11/12 mx-2"
            placeholder="Search a chat or start the new one..."
          />
        </div>
      </div>
      {rooms.map((room) => (
        <ChatPeople key={room.id} id={room.id} name={room.data.name} />
      ))}
    </div>
  );
};

export default Sidebar;
