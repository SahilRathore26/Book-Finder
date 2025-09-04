import Header from "./Header";
import bgImg from "../images/Book Finder Bg Image.png";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignInButton = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!signInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
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
          setErrorMessage(
            "User not found. Check your e-mail and password again!"
          );
        });
    }
  };

  const toggleToSignUp = () => {
    setSignInForm(!signInForm);
  };
  return (
    <div className="relative h-screen">
      <Header />
      <div className="fixed">
        <img
          className="h-screen object-cover md:h-auto"
          alt="bg-img"
          src={bgImg}
        ></img>
      </div>
      <div className="flex m-auto justify-center">
        <form
          className="absolute w-[360px] md:w-[420px] py-12 px-10 md:px-16 mt-24 md:mt-32 justify-center bg-white/30 backdrop-blur-md text-gray-900 rounded-2xl shadow-xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="font-bold text-3xl mb-2 text-gray-900">
            {signInForm ? "Welcome Back 👋" : "Create Your Account 🚀"}
          </h1>
          <p className="text-gray-600 mb-5 text-sm">
            {signInForm
              ? "Sign in to continue discovering your next favorite book."
              : "Join BookFinder and explore millions of books worldwide."}
          </p>
          {!signInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Enter Full Name"
              className="my-2 p-4 w-full bg-white/60 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            ></input>
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or mobile number"
            className="my-2 p-4 w-full bg-white/60 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          ></input>
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="my-2 p-4 w-full bg-white/60 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          ></input>
          <p className="text-md font-bold text-red-600 my-2">{errorMessage}</p>
          <button
            className="my-4 p-3 w-full text-sm font-semibold bg-amber-500 hover:bg-amber-600 text-white rounded-md transition-all duration-200"
            onClick={handleSignInButton}
          >
            {signInForm ? "Sign Up" : "Sign In"}
          </button>
          <p className="text-gray-600 my-5">
            {signInForm ? "New to Book Finder? " : "Already a user? "}{" "}
            <span
              className="text-red font-bold cursor-pointer"
              onClick={toggleToSignUp}
            >
              {signInForm ? "Sign up now" : "Sign in now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
