import React from "react";
import { useEffect } from "react";

import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteReview,
  getAllUserReview,
} from "../../features/review/reviewSlice";

const Reviews = ({ review }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { reviews, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.review
  );

  const onClick = (e) => {
    if (e.target.id === "open") {
      const reviewData = JSON.stringify(review);
      sessionStorage.setItem("review", reviewData);
      navigate("/One_review");
    } else if (e.target.id === "delete") {
      dispatch(deleteReview(review._id));
    }
  };

  useEffect(() => {
    dispatch(getAllUserReview());
  }, [isSuccess]);

  return (
    <div
      className="flex-col mt-[5%] sm:mt-[4.5%] md:mt-[4%] lg:mt-[3%] h-[15%] w-[20%] bg-white border-2 border-solid border-black shadow-xl"
      key={review._id}
    >
      <h1 className="flex text-[5%] sm:text-[30%] md:text-[55%] lg:text-[70%] h-[60%] w-[100%] border-2 border-solid text-[#268BD2]">
        {review.title}
      </h1>
      <div className="flex h-[40%] w-[80%] border-2 border-solid">
        <button
          className="flex justify-center text-[20%] sm:text-[40%] md:text-[55%] lg:text-[70%] h-[100%] w-[50%] border-2 border-solid text-[#9CC8EA]"
          id="open"
          onClick={onClick}
        >
          Open
        </button>
        <button
          className="flex justify-center text-[20%] sm:text-[40%] md:text-[55%] lg:text-[70%] h-[100%] w-[50%] border-2 border-solid text-[#9CC8EA]"
          id="delete"
          onClick={onClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Reviews;
