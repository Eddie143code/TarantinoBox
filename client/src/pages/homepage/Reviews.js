import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import Reviewsbutton from "./images/reviews_button.png";

import TarantinoWhite from "./images/Tarantino_white2.png";
import Orange_circle from "./images/orange_circle.png";
import Orange_small from "./images/orange_small.png";

const Reviews = () => {
  return (
    <div className="flex-col mt-[2%] m-auto h-[25%] w-[100%] sm:w-[84%] md:w-[68%] lg:w-[52%] ">
      <section className="flex flex-col h-[90%] w-[100%] mt-[3%]">
        <h1 className="flex p-1 h-[20%] w-[70%] text-[180%] sm:text-[200%] md:text-[220%] lg:text-[4rem] text-[#2659D8]">
          Movie reviews
        </h1>
        <p className="flex h-[10%] w-[65%] sm:w-[50%] md:w-[40%] lg:w-[30%] mt-[2%] text-[30%] sm:text-[60%] md:text-[70%] lg:text-[80%] text-[#268BD2]">
          Read what members of MovieBox have to say about the latest and the old
          classics. From action, to comedy, to drama, our members cover them
          all.
        </p>
        <Link to="Search_Reviews">
          <img
            className="flex h-[5%] w-[8%] mt-[4%]"
            alt="reviews"
            src={Reviewsbutton}
          ></img>
        </Link>
        <article className="flex justify-end  -[20%] w-[100%]">
          <img
            src={TarantinoWhite}
            alt="quentin"
            className="flex mr-[15%] h-[100%] w-[35%]"
          />
        </article>
      </section>
      <section className="flex h-[5%] w-[100%] mt-[15%]">
        <Footer />
      </section>
    </div>
  );
};

export default Reviews;

/* <div className="flex h-[60%] w-[100%] space-x-16">
<img alt="batman" src={Batman} className="flex ml-[5%] w-[12%]" />
<img alt="elvis" src={Elvis} className="flex w-[12%]" />
<img alt="northman" src={Northman} className="flex w-[12%]" />
<img alt="thor" src={Thor} className="flex w-[12%]" />
</div> */
