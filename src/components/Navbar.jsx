//firabase
import toast from "react-hot-toast";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
// redux
import { useDispatch, useSelector } from "react-redux";
import { AbdateTheme, logout } from "../app/userslice";
import Weather from "./Weather";
import { Link } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { calculator } = useSelector((state) => state.user);
  const amount = calculator.amount;
  const logOutProfile = async () => {
    try {
      await signOut(auth);
      toast.success("See you soon");
      dispatch(logout());
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="navbar bg-base-100  max-w-6xl mx-auto border-b-2">
      <div className="flex-1 navbar-start">
        <Link to="/" className="btn btn-ghost text-xl m-0">
          M<span className="text-sm -mr-2 -ml-2 ">YKITCHE</span>N
        </Link>
      </div>
      <div className="navbar-center px-5">
        <Weather />
      </div>
      <div className="flex-none">
        <label className="swap swap-rotate pr-10">
          <input
            type="checkbox"
            className="theme-controller"
            onClick={() => dispatch(AbdateTheme("dark"))}
            value="dark"
          />
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        <Link to="/cart">
          <div className="dropdown dropdown-end mr-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{amount}</span>
              </div>
            </div>
          </div>
        </Link>
        <div className="mr-5 text-lg sm:flex hidden">
          {user ? user.displayName : "not name"}
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user ? (
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              ) : (
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://st3.depositphotos.com/23594922/31822/v/1600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                />
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[2] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/" className="justify-between">
                Home
              </Link>
            </li>
            <li>
              <Link to="/add_New_Resipet">Create resipe</Link>
            </li>
            <li>
              <Link to="/themes">Change theme</Link>
            </li>
            <li>
              <Link to="/charts">Chart</Link>
            </li>
            <li>
              <button onClick={logOutProfile}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
