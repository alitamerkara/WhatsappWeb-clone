import { useState } from "react";
import ChatScreen from "./components/ChatScreen";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";

function App() {
  const [user, setUser] = useState(null);
  const category = ["nature", "car", "flower", "people", "baby"];
  const randomCategory = () => Math.floor(Math.random() * 5);
  const randomPhoto = category[randomCategory()];
  console.log(user?.multiFactor.user.photoURL);
  return (
    <>
      <div className="bg-neutral-200 w-screen h-screen flex items-center justify-center">
        <div className="flex w-3/5 h-5/6 bg-white shadow-2xl bg-neutral-100">
          <Routes>
            {user == null ? (
              <Route
                path="/"
                element={<LoginScreen setUser={setUser} user={user} />}
              />
            ) : (
              <>
                <Route path="/" element={<Sidebar />} />
                <Route
                  path="/rooms/:roomId"
                  element={
                    <>
                      <Sidebar randomPhoto={randomPhoto} />{" "}
                      <ChatScreen randomPhoto={randomPhoto} />
                    </>
                  }
                />
              </>
            )}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
