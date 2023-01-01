import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllUserReview,
  deleteReview,
} from "../../features/review/reviewSlice";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Reviews from "./Reviews";
import Pagination from "../Pagination";

const My_reviews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [currentPosts, setCurrentPosts] = useState("");

  const { reviews, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.review
  );
  const dispatch = useDispatch();

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(getAllUserReview());
    if (reviews) {
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      setCurrentPosts(reviews.slice(indexOfFirstPost, indexOfLastPost));
    }
  }, [isSuccess, message]);

  return (
    <div className="flex-col justify-center h-[200%] w-[100%]  ">
      <div className="flex-col m-auto h-[20%] w-[100%] sm:w-[84%] md:w-[68%] lg:w-[52%] ">
        <Header />
        <main className="flex flex-col h-[90vh] w-[100%] bg-blue-50">
          <section className="flex-col mt-[2%] h-[100%] w-[100%] ">
            <article className="flex-col h-[40vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] w-[100%]">
              {currentPosts &&
                currentPosts.map((review, i) => {
                  return <Reviews key={i} review={review} />;
                })}
            </article>
          </section>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={reviews.length}
            paginate={paginate}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default My_reviews;
