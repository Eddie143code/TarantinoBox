import React from "react";

import Cumberpatch from "./images/cumberpatch1.png";

import Header from "../components/Header";
import Footer from "../components/Footer";

const One_review = () => {
  const reviews = JSON.parse(sessionStorage.getItem("review"));
  console.log(reviews);
  return (
    <div className="flex-col justify-center h-[200%] w-[100%]  ">
      <div className="flex-col m-auto h-[20%] w-[100%] sm:w-[84%] md:w-[68%] lg:w-[52%] ">
        <Header />
        <main className="flex h-[90%] w-[100%] ">
          <section className="flex-col mt-[5%] h-[100vh] sm:h-[80vh] md:h-[70vh] lg:h-[60vh] w-[100%] bg-blue-50">
            <h1 className="flex text-[100%]">{reviews.title}</h1>
            <p className="flex text-[80%] mt-[2%]">{reviews.content}</p>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default One_review;
