import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loginModal,
  signupModal,
  successModal,
} from "../../features/modal/modalSlice";

import Cumberpatch from "./images/cumberpatch.png";

import Out from "./images/out.png";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Featured_Reviews = () => {
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  const { loginOpen, signupOpen } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(successModal());
    }
  }, [isSuccess, loginOpen, signupOpen]);
  return (
    <div className="flex-col justify-center h-[200%] w-[100%] ">
      <div className="flex-col m-auto h-[25%] w-[50%] bg-white ">
        <Header />
        {signupOpen && <Signup />}
        {loginOpen && <Login />}

        <main className="flex flex-col h-[90%] w-[100%] ">
          <section className="flex-col h-[50%] w-[100%] bg-blue-50 ">
            <article className="flex-col mt-[8%] h-[40%] w-[100%] ">
              <div className="flex text-[60%] sm:text-[75%] md:text-[90%] lg:text-[100%] h-[20%] w-[30%] ">
                SEARCH
              </div>
              <div className="flex mt-[2%] h-[50%] w-[100%] ">
                <img
                  className="flex h-[40%] w-[25%] "
                  alt="cumber"
                  src={Cumberpatch}
                ></img>
                <div className="flex-col ml-[4%] h-[100%] w-[100%]">
                  <h1 className="flex text-[0.8rem] sm:text-[1.2rem] md:text-[1.6rem] lg:text-[1.8rem] h-[20%] w-[90%] text-[#2659D8]">
                    The Power of the Still.
                  </h1>
                  <h2 className="flex text-[0.2rem] sm:text-[0.4rem] md:text-[0.6rem] lg:text-[0.7rem] h-[80%] w-[90%] sm:w-[86%] md:w-[83%] lg:w-[80%] text-[#268BD2]">
                    The most iconic and lasting ﬁlm images come from
                    split-second decisions by unit stills photographers. Jane
                    Campion and her photographer Kirsty Griﬃn, David Lowery and
                    Eric Zachanowich, and Joachim Trier and Christian Belgaux
                    open up about capturing the heart of a movie.
                  </h2>
                </div>
              </div>
            </article>
            <article className="flex-col mt-[8%] mb-[8%] h-[50%] w-[100%]">
              <div className="flex ml-[15%] h-[100%] w-[100%]">
                <div className="flex h-[30%] w-[30%]">
                  <img
                    className="flex h-[100%] w-[50%] sm:w-[45%] md:w-[40%] lg:w-[35%] "
                    alt="out"
                    src={Out}
                  ></img>
                  <div className="flex-col ml-[5%] h-[100%] w-[100%]">
                    <h1 className="flex text-[0.2rem] sm:text-[0.5rem] md:text-[0.8rem] lg:text-[1.1rem] h-[20%] w-[90%] text-[#2659D8]">
                      The Cut-Out Club.
                    </h1>
                    <h2 className="flex mt-[5%] text-[0.1rem] sm:text-[0.25rem] md:text-[0.4rem] lg:text-[0.55rem] h-[100%] w-[90%] text-[#268BD2]">
                      Animation correspondent Alicia Haddick explores our newest
                      oﬀicial list—the 50 highest-rated animated feature ﬁlms
                      directed by women...
                    </h2>
                  </div>
                </div>
                <div className="flex ml-[10%] h-[30%] w-[30%]">
                  <img
                    className="flex h-[100%] w-[50%] sm:w-[45%] md:w-[40%] lg:w-[35%] "
                    alt="out"
                    src={Out}
                  ></img>
                  <div className="flex-col ml-[5%] h-[100%] w-[100%]">
                    <h1 className="flex text-[0.2rem] sm:text-[0.5rem] md:text-[0.8rem] lg:text-[1.1rem] h-[20%] w-[90%] text-[#2659D8]">
                      The Cut-Out Club.
                    </h1>
                    <h2 className="flex mt-[5%] text-[0.1rem] sm:text-[0.25rem] md:text-[0.4rem] lg:text-[0.55rem] h-[100%] w-[90%] text-[#268BD2]">
                      Animation correspondent Alicia Haddick explores our newest
                      oﬀicial list—the 50 highest-rated animated feature ﬁlms
                      directed by women...
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex mt-[5%] ml-[15%] h-[100%] w-[100%]">
                <div className="flex ml h-[30%] w-[30%]">
                  <img
                    className="flex h-[100%] w-[50%] sm:w-[45%] md:w-[40%] lg:w-[35%] "
                    alt="out"
                    src={Out}
                  ></img>
                  <div className="flex-col ml-[5%] h-[100%] w-[100%]">
                    <h1 className="flex text-[0.2rem] sm:text-[0.5rem] md:text-[0.8rem] lg:text-[1.1rem] h-[20%] w-[90%] text-[#2659D8]">
                      The Cut-Out Club.
                    </h1>
                    <h2 className="flex mt-[5%] text-[0.1rem] sm:text-[0.25rem] md:text-[0.4rem] lg:text-[0.55rem] h-[100%] w-[90%] text-[#268BD2]">
                      Animation correspondent Alicia Haddick explores our newest
                      oﬀicial list—the 50 highest-rated animated feature ﬁlms
                      directed by women...
                    </h2>
                  </div>
                </div>
                <div className="flex ml-[10%] h-[30%] w-[30%]">
                  <img
                    className="flex h-[100%] w-[50%] sm:w-[45%] md:w-[40%] lg:w-[35%] "
                    alt="out"
                    src={Out}
                  ></img>
                  <div className="flex-col ml-[5%] h-[100%] w-[100%]">
                    <h1 className="flex text-[0.2rem] sm:text-[0.5rem] md:text-[0.8rem] lg:text-[1.1rem] h-[20%] w-[90%] text-[#2659D8]">
                      The Cut-Out Club.
                    </h1>
                    <h2 className="flex mt-[5%] text-[0.1rem] sm:text-[0.25rem] md:text-[0.4rem] lg:text-[0.55rem] h-[100%] w-[90%] text-[#268BD2]">
                      Animation correspondent Alicia Haddick explores our newest
                      oﬀicial list—the 50 highest-rated animated feature ﬁlms
                      directed by women...
                    </h2>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Featured_Reviews;
