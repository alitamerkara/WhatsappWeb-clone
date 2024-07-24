import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { GoPaperclip } from "react-icons/go";
import { IoMdMore } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { useParams } from "react-router-dom";
import db from "../firebase";

const ChatScreen = ({ screen }) => {
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [roomPhoto, setRoomPhoto] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      timestamp: new Date(),
    });
    setInput("");
  };
  useEffect(() => {
    db.collection("rooms")
      .doc(roomId)
      .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

    db.collection("rooms")
      .doc(roomId)
      .onSnapshot((snapshot) => setRoomPhoto(snapshot.data().photoUrl));

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);
  return (
    <div className="w-2/3 bg-gradient-to-r from-blue-100 to-blue-300 h-full">
      {screen ? (
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="bg-gray-100 flex p-3 justify-between">
              <div className="flex gap-4">
                <img
                  src={roomPhoto}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="mt-2">
                  <h2 className="font-bold">{roomName}</h2>
                  <p className="text-neutral-500">
                    Last seen today{" "}
                    {new Date(
                      messages[messages.length - 1]?.timestamp?.toDate()
                    ).toLocaleTimeString("en-GB", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    })}
                  </p>
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
              {messages.map((message, index) => (
                <div key={index} className="flex flex-row w-full justify-end ">
                  <div className="flex w-auto gap-4 justify-between px-5 bg-orange-100 p-2 mt-4 mx-4 rounded-3xl">
                    <p className="text-xl">{message.message}</p>
                    <p className="text-xs pt-2">
                      {new Date(message.timestamp?.toDate()).toLocaleTimeString(
                        "en-GB",
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: false,
                        }
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 pt-3 px-4">
            <form
              onSubmit={sendMessage}
              className="w-full flex border w-1/3 justify-between align-center px-2 py-2 mb-3 text-m rounded-3xl gap-3 bg-white self-end"
            >
              <MdOutlineEmojiEmotions className="mt-1 ml-1 text-3xl cursor-pointer" />
              <input
                type="text"
                className="border-none focus:outline-0 w-11/12 mx-2"
                placeholder="Type Something"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <IoMdSend
                type="submit"
                className="mt-1 mr-1 text-2xl cursor-pointer"
              />
            </form>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full p-4 bg-gray-300">
          <h1 className="font-bold text-4xl text-white text-center">
            Welcome to WhatsApp. Please choose a chat and start chatting.
          </h1>
        </div>
      )}
    </div>
  );
};

export default ChatScreen;
