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
    <div className="w-full h-14 md:h-16 bg-gradient-to-r from-[#fdf6e3] via-[#e6f0f9] to-[#cce7f5] flex items-center justify-between px-4 md:px-4 fixed top-0 z-20 shadow-md">
      <Link to="/browse">
        <button>
          <img className="w-12 md:w-20 " src={logo} alt="logo"></img>
        </button>
      </Link>
      {user && (
        <div className="flex">
          <p className="px-2 md:px-4 pt-1 md:pt-1.5 text-xs md:text-sm">Hello {user.displayName}</p>
          <button
            className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-600 hover:bg-blue-700
                   text-white font-semibold text-xs md:text-sm
                   rounded-md shadow-md transition-all duration-200"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
