import React, { useEffect, useState } from "react";
import { MdDonutLarge } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import ChatPeople from "./ChatPeople";
import { FaSearch } from "react-icons/fa";
import db from "../firebase";
import { CgProfile } from "react-icons/cg";

const Sidebar = ({ randomPhoto, setScreen }) => {
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState([]);
  const currentRooms = newRoom.length > 0 ? newRoom : rooms;
  const photo =
    "https://lh3.googleusercontent.com/a/ACg8ocI5kO1H4WOLPu7XFVZ9kh9Ig0KAlhy1bpB6F7wRmzddQ0iuVgF9=s96-c";
  const startChat = (e) => {
    e.preventDefault();
    const roomName = prompt("pls enter a name");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
        photoUrl: `https://picsum.photos/seed/${randomPhoto}/200/300`,
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
  const handleChange = (e) => {
    console.log(e.target.value);
    const filteredRooms = rooms?.filter((room) =>
      room.data.name
        .toLowerCase()
        .trim()
        .includes(e.target.value.toLowerCase().trim())
    );
    if (filteredRooms.length == 0) {
      alert("sohbet bulunamadı");
    }
    setNewRoom(filteredRooms);
    console.log(filteredRooms);
  };

  return (
    <div className="w-1/3  h-full border-r overflow-auto">
      <div className="flex p-3 justify-between bg-gray-100">
        <div>
          <img
            src={photo}
            className="w-12 h-12 rounded-full object-cover mt-1"
            alt="profile-picture"
          />
        </div>
        <div className="flex gap-4 mt-2">
          <MdDonutLarge className=" text-4xl" />
          <MdMessage className=" text-4xl" />
          <IoMdMore className=" text-4xl" />
        </div>
      </div>
      <div className=" bg-gray-100">
        <div className=" bg-white w-auto flex border w-1/3 justify-between align-center px-5 py-2 text-m rounded-3xl gap-3">
          <FaSearch className="mt-1 ml-1 cursor-pointer" />
          <input
            // value={searchChat}
            // onChange={(e) => setSearchChat(e.target.value)}
            onKeyUp={handleChange}
            type="text"
            className="border-none focus:outline-0 w-11/12 mx-2 "
            placeholder="Search a chat or start the new one..."
          />
        </div>
        <div
          className="font-bold text-center cursor-pointer"
          onClick={startChat}
        >
          <h1 className="font-bold text-xl py-3 hover:bg-gray-100">
            ADD NEW CHAT
          </h1>
        </div>
      </div>
      {currentRooms.map((room) => (
        <ChatPeople
          key={room.id}
          id={room.id}
          name={room.data.name}
          photo={room.data.photoUrl}
          setScreen={setScreen}
        />
      ))}
    </div>
  );
};

export default Sidebar;
