import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleClick = () => {
    // Validate form
    const returnedVal = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(returnedVal);

    if (errMessage) return;

    // SignIn SignUp

    if (!isSignIn) {
      // Sign up

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          // Update user Profile
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      // Sign In

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(error.message);
        });
    }
  };

  const formHandle = (e) => {
    e.preventDefault();
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="relative">
      <Header />
      <div>
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix BG"
        />
      </div>

      <div className="absolute  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 h-4/5 bg-zinc-950 bg-opacity-85 w-1/3 p-14 rounded-xl ">
        <form onClick={formHandle}>
          <h1 className=" font-semibold text-4xl text-white mb-7">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {isSignIn ? (
            ""
          ) : (
            <div>
              <input
                ref={name}
                type="text"
                placeholder="Full name"
                className="text-lg  py-3 px-5 w-full mb-5 rounded-md outline-none"
              />
            </div>
          )}

          <div>
            <input
              ref={email}
              type="text"
              placeholder="Email or phone number"
              className="text-lg py-3  px-5 w-full mb-5 rounded-md outline-none"
            />
          </div>

          <div>
            <input
              ref={password}
              type="password"
              placeholder="password"
              className="text-lg  py-3 px-5 w-full mb-5 rounded-md outline-none"
            />
          </div>

          <p className="font-bold text-red-600">{errMessage}</p>
          <button
            onClick={handleClick}
            type="submit"
            className="text-lg py-3 px-5 mt-5 text-white  bg-red-600  w-full rounded-md outline-none"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          {isSignIn ? (
            ""
          ) : (
            <div className="mt-2 text-white flex justify-between">
              <div>
                <input type="checkbox" name="remember" id="remember" />
                <label className="ml-1" htmlFor="remember">
                  Remember me
                </label>
              </div>
              <div>Need help?</div>
            </div>
          )}
        </form>

        <div className="text-gray-400 mt-10">
          {isSignIn ? (
            <p className="mb-2">
              New to Netflix?{" "}
              <strong>
                <button onClick={toggleSignInForm}>Sign up now.</button>
              </strong>
            </p>
          ) : (
            <p className="mb-2">
              Already have account?{" "}
              <strong>
                <button onClick={toggleSignInForm}>Sign in.</button>
              </strong>
            </p>
          )}
          {isSignIn ? (
            <p className="text-sm">
              Sign in is protected by Google reCAPTCHA to ensure you’re not a
              bot.{" "}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
