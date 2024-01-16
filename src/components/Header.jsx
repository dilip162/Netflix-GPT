import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANG } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute flex justify-between w-screen px-8 py-1 bg-gradient-to-b from-black z-50">
      <img className="w-52" src={LOGO} alt="Logo" />

      {user && (
        <div className="flex items-center gap-4">
          {showGptSearch && (
            <select
              className="py-1 px-2 border-none outline-none"
              name="language"
              id=""
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <div>
            <img
              className="w-9"
              // src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
              src={user?.photoURL}
              alt="user icon"
            />
          </div>

          <button
            onClick={handleGPTSearch}
            className="px-4 text-md font-semibold text-white py-2 bg-purple-800 outline-none rounded-md "
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>

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
