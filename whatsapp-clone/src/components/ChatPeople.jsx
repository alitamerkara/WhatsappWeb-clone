import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../firebase";

const ChatPeople = ({ id, name, photo, setScreen }) => {
  const [messages, setMessages] = useState("");
  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snaphot) =>
          setMessages(snaphot.docs.map((doc) => doc.data()))
        );
    }
  }, []);
  return (
    <div>
      <Link
        to={`/rooms/${id}`}
        onClick={() => {
          setScreen(true);
        }}
      >
        <div className="border p-2 w-full">
          {/* PEOPLE */}
          <div className="flex gap-3 cursor-pointer">
            <img src={photo} class="w-16 h-16 rounded-full object-cover" />
            <div className="mt-2">
              <h2 className="font-bold">{name}</h2>
              <p>{messages[0]?.message}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChatPeople;
