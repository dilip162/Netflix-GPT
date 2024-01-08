import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="relative">
      <Header />
      <div>
        <img
          className="max-h-screen w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix logo"
        />
      </div>

      <div className="absolute  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 h-4/5 bg-zinc-950 bg-opacity-85 w-1/4 p-12 rounded-xl ">
        <form>
          <h1 className=" font-semibold text-4xl text-white mb-7">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {isSignIn ? (
            ""
          ) : (
            <div>
              <input
                type="text"
                placeholder="Full name"
                className="text-lg  py-3 px-5 w-full mb-5 rounded-md outline-none"
              />
            </div>
          )}

          <div>
            <input
              type="text"
              placeholder="Email or phone number"
              className="text-lg py-3  px-5 w-full mb-5 rounded-md outline-none"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="password"
              className="text-lg  py-3 px-5 w-full mb-5 rounded-md outline-none"
            />
          </div>

          <button
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
