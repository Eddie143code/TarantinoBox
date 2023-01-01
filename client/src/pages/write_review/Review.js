import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createReview } from "../../features/review/reviewSlice";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Review = () => {
  const [review, setReview] = useState({
    title: "",
    content: "",
    tag: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e) => {
    setReview((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userid = JSON.parse(localStorage.getItem("user"));
    const reviewData = {
      title: review.title,
      content: review.content,
      tag: review.tag,
      user: userid,
    };

    dispatch(createReview(reviewData));
    navigate("/My_reviews");
  };
  return (
    <div className="flex-col justify-center h-[200%] w-[100%]">
      <div className="flex-col m-auto h-[25%] w-[100%] sm:w-[84%] md:w-[68%] lg:w-[52%] bg-white ">
        <Header />
        <main className="flex flex-col h-[90vh] w-[100%] ">
          <section className="flex justify-center h-[100%] w-[100%] bg-blue-50 ">
            <form className="flex-col h-[100%] w-[100%]" onSubmit={onSubmit}>
              <div className="flex ml-[10%] mt-[3%] h-[10%] w-[70%]">
                <select
                  className="h-[20%] w-[60%]"
                  name="tag"
                  placeholder="Movie Title"
                  onChange={onChange}
                >
                  <option value="">--Please choose an option--</option>
                  <option name="tag" value="Reservoir Dogs">
                    Reservoir Dogs
                  </option>
                  <option name="tag" value="Pulp Fiction">
                    Pulp Fiction
                  </option>
                  <option name="tag" value="Jackie Brown">
                    Jackie Brown
                  </option>
                  <option name="tag" value="Kill Bill">
                    Kill Bill Vol.1
                  </option>
                  <option name="tag" value="Kill Bill 2">
                    Kill Bill Vol.2
                  </option>
                  <option name="tag" value="Death Proof">
                    Death Proof
                  </option>
                  <option name="tag" value="Inglorious Basterds">
                    Inglorious Basterds
                  </option>
                  <option value="Django Unchained">Django Unchained</option>
                  <option value="The Hateful Eight">The Hateful Eight</option>
                  <option value="Once Upon a Time... In Hollywood">
                    Once Upon a Time... In Hollywood
                  </option>
                </select>
              </div>
              <div className="flex justify-center h-[7%] w-[100%]">
                <input
                  className="flex text-[100%] h-[100%] w-[80%] border-2 border-solid border-black text-[#268BD2]"
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={onChange}
                />
              </div>
              <div className="flex mt-[2%] justify-center w-[100%]">
                <textarea
                  className="flex text-[80%] h-[100%] w-[80%] resize-none border-2 border-solid border-black text-[#268BD2]"
                  type="text"
                  name="content"
                  rows="30"
                  placeholder="Content"
                  onChange={onChange}
                ></textarea>
              </div>
              <div className="flex mt-[1%] justify-center w-[100%]">
                <input
                  className="flex border-2 justify-center border-black w-[15%] sm:w-[12%] md:w-[10%] lg:w-[10%]"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Review;
