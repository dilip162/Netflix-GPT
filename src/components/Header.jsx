import React from "react";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute flex justify-between w-screen px-8 py-1  bg-gradient-to-b from-black">
      <img
        className="w-52"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />

      {user && (
        <div className="flex items-center gap-4">
          <div>
            <img
              className="w-9"
              // src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
              src={user?.photoURL}
              alt="user icon"
            />
          </div>

          <div>
            <button
              onClick={handleSignOut}
              className="py-2 px-4 bg-slate-600 text-white rounded-md"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
