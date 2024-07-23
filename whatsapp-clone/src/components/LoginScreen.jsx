import React from "react";
import { auth, provider } from "../firebase";

const LoginScreen = ({ setUser }) => {
  const handleClick = async () => {
    await auth
      .signInWithPopup(provider)
      .then((result) => setUser(result.user))
      .catch((error) => alert(error.message));
  };
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex flex-col items-center gap-5">
        <img
          src="https://seeklogo.com/images/W/whatsapp-icon-logo-6E793ACECD-seeklogo.com.png"
          width={200}
        />
        <h1 className="font-bold text-3xl">Sign in to WhatsApp</h1>
        <button
          onClick={handleClick}
          className="bg-green-500 text-white rounded p-3 mt-4 hover:bg-green-700"
        >
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
