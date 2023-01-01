import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loginModal,
  signupModal,
  successModal,
} from "../../features/modal/modalSlice";

import WelcomeTarantino from "./images/WelcomeTarantino.png";
import MovieGroup from "./images/MovieGroup.png";

import Header from "../components/Header";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Welcome = () => {
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const { loginOpen, signupOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(successModal());
    }
  }, [user, isSuccess, loginOpen, signupOpen, isError]);

  return (
    <div className="flex-col m-auto h-[25%] w-[100%] sm:w-[84%] md:w-[68%] lg:w-[52%] bg-blue-50 ">
      <Header />
      {signupOpen && <Signup />}
      {loginOpen && <Login />}

      <section className="flex flex-col h-[90%] w-[100%] mt-[1%]">
        <div className="flex h-[30%] w-[70%] ">
          <img alt="welcome" src={WelcomeTarantino}></img>
        </div>
        <div className="flex h-[70%] w-[100%] mt-[1rem] ">
          <div className="flex h-[100%] w-[55%] ">
            <p className="flex h-[100%] w-[100%] mt-[5%] sm:w-[80%] md:w-[70%] lg:w-[60%] text-[40%] sm:text-[55%] md:text-[70%] lg:text-[85%] text-[#3A9FF0]">
              For film enthusiasts there is no place like TarantinoBox where you
              can view what other members think about the latest, oldest and
              best Tarantino movies out there!
            </p>
          </div>
          <div className="flex ml-auto justify-end h-[50%] w-[40%] ">
            <img className="flex" alt="sonic" src={MovieGroup}></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
