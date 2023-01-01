import React from "react";
import { useState, useEffect } from "react";
import { FaBars, FaLongArrowAltUp, FaWindows } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signout } from "../../features/auth/authSlice";
import {
  loginModal,
  signupModal,
  successModal,
} from "../../features/modal/modalSlice";

import MovieBox from "./images/MovieBox.png";
import TarantinoBox from "./images/TarantinoBox.png";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userStatus, setUserStatus] = useState(
    localStorage.getItem("userStatus", false)
  );

  const onClick = (e) => {
    if (e.currentTarget.id === "signup") {
      dispatch(signupModal());
    } else if (e.currentTarget.id === "login") {
      dispatch(loginModal());
    }
  };

  const logout = () => {
    dispatch(signout());
    setUserStatus(false);
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  useEffect(() => {
    const login = localStorage.getItem("user");
    if (login) {
      setUserStatus(true);
      localStorage.setItem("userStatus", userStatus);
    } else {
      setUserStatus(false);
      localStorage.setItem("userStatus", userStatus);
    }
  }, [isSuccess]);

  return (
    <header className="flex h-[20%] w-[100%] bg-white ">
      <nav className="flex mb-3 mt-3 p-0.5 h-[110%] w-[100%]">
        <div className="flex h-[100%] sm:h-[90%] md:h-[80%] lg:h-[70%] w-[22%] sm:w-[18%] md:w-[16%] lg:w-[14%] font-sans ">
          <Link to="/">
            <img className="" alt="moviebox" src={TarantinoBox}></img>
          </Link>
        </div>
        <div
          className={`${
            navOpen
              ? "bars bars-on nav-links fixed lg:static"
              : "bars nav-links"
          }`}
        >
          <Link
            to="/"
            className="block w-[50%] lg:flex lg:ml-[15%] text-[100%] lg:text-[90%] bg-white text-[#9CC8EA] hover:text-[#4974a5]"
          >
            Home
          </Link>
          <Link
            to="/Search_Reviews"
            className="block w-[50%] lg:flex lg:ml-[2%] text-[100%] lg:text-[90%] bg-white text-[#9CC8EA] hover:text-[#4974a5]"
          >
            Search Reviews
          </Link>
          {userStatus ? (
            <>
              <Link
                to="/Write_review"
                className="block justify-center w-[50%] lg:flex lg:ml-[2%]text-[100%] lg:text-[90%] bg-white text-[#9CC8EA] hover:text-[#4974a5]"
              >
                Write Review
              </Link>
              <Link
                to="/My_reviews"
                className="block justify-center w-[50%] lg:flex lg:ml-[2%] text-[100%] lg:text-[90%] bg-white text-[#9CC8EA] hover:text-[#4974a5]"
              >
                My Reviews
              </Link>
              <button
                onClick={logout}
                className="block text-start w-[50%] lg:justify-center lg:flex lg:ml-[2%] text-[100%] lg:text-[90%] bg-white text-[#9CC8EA] hover:text-[#4974a5]"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button
                className="block text-start lg:justify-center w-[50%] lg:flex lg:ml-[10%] text-[100%] lg:text-[100%] bg-white text-[#9CC8EA] hover:text-[#4974a5]"
                onClick={onClick}
                id="signup"
              >
                Sign up
              </button>
              <button
                className="block text-start lg:justify-center w-[50%] lg:flex lg:ml-[5%] text-[100%] lg:text-[100%] bg-white text-[#9CC8EA] hover:text-[#4974a5]"
                onClick={onClick}
                id="login"
              >
                Log in
              </button>
            </>
          )}
        </div>
        <button
          className="flex lg:hidden ml-[70%] h-[100%] w-[6%] text-[50%] "
          onClick={() => setNavOpen(!navOpen)}
        >
          <FaBars className="h-[100%] w-[100%]" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
