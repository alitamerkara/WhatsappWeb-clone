import ChatScreen from "./components/ChatScreen";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="bg-neutral-200 w-screen h-screen flex items-center justify-center">
        <div className="flex w-3/5 h-5/6 bg-white shadow-2xl bg-neutral-100">
          <Sidebar />
          <ChatScreen />
        </div>
      </div>
    </>
  );
}

export default App;
