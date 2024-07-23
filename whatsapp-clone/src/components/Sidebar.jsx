import React, { useEffect, useState } from "react";
import { MdDonutLarge } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import ChatPeople from "./ChatPeople";
import { FaSearch } from "react-icons/fa";
import db from "../firebase";
import { CgProfile } from "react-icons/cg";

const Sidebar = ({ user }) => {
  const [rooms, setRooms] = useState([]);
  const [photo, setPhoto] = useState(null);
  const photoURL =
    "https://lh3.googleusercontent.com/a/ACg8ocI5kO1H4WOLPu7XFVZ9kh9Ig0KAlhy1bpB6F7wRmzddQ0iuVgF9=s96-c";
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
          {photoURL ? (
            <img
              src={photoURL}
              className="w-12 h-12 rounded-full object-cover mt-1"
              alt="profile-picture"
            />
          ) : (
            <CgProfile className="text-4xl mt-2" />
          )}
        </div>
        <div className="flex gap-4 mt-2">
          <MdDonutLarge className=" text-4xl" />
          <MdMessage className=" text-4xl" />
          <IoMdMore className=" text-4xl" />
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
        <ChatPeople
          key={room.id}
          id={room.id}
          name={room.data.name}
          category={room.category}
        />
      ))}
    </div>
  );
};

export default Sidebar;
