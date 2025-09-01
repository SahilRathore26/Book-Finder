import { Link, useNavigate } from "react-router-dom";
import logo from "../images/Book-Finder-Logo.png";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { removeBooks } from "../utils/bookSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        if (window.location.pathname === "/") {
          navigate("/browse");
        }
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeBooks());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="absolute w-screen flex justify-between z-20">
      <Link to="/browse">
        <button>
          <img
            className="mx-2 w-14 md:w-24"
            src={logo}
            alt="logo"
          ></img>
        </button>
      </Link>
      {user && (
        <button
          className="mr-6 mt-6 p-2 h-1/2 md:p-2 bg-red-700 text-xs md:text-sm font-bold text-white rounded-sm md:rounded-lg"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      )}
    </div>
  )
};

export default Header;
