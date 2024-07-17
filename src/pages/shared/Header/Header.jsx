import { Link } from "react-router-dom";
import img from "../../../assets/images/logo.png";
import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogOut = () => {
    logout();
  };
  return (
    <div className="header-bg flex flex-row top-0 items-center justify-center gap-2 py-12 fixed overflow-hidden z-10">
      <div className="flex  flex-1 justify-center items-center ">
        <img
          className="w-[65px] hidden md:block md:w-[75px]"
          src={img}
          alt=""
        />
        <h2 className="text-white text-[22px] md:text-[55px]">
          Expresso Emporium
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-end items-center  flex-1 ">
        {user ? (
          <div className="text-white flex justify-end items-center gap-2">
            {/* <p className="md:text-2xl text-green-500"> {user.email}</p> */}
            <p className="md:text-2xl text-green-500">{user.displayName}</p>
            <img className="w-7 h-7 object-cover" src={user.photoURL} alt="" />
            <a
              onClick={handleLogOut}
              className="px-4 py-2 md:text-2xl bg-white rounded-full border border-[#331A15] text-[#331A15] text-sm">
              Sign out
            </a>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button className="px-2 py-0 md:px-4 md:py-2 text-2xl bg-white rounded-full border border-[#331A15] text-[#331A15]">
                Sign in
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
