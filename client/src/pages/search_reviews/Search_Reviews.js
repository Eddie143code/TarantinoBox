import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  loginModal,
  signupModal,
  successModal,
} from "../../features/modal/modalSlice";
import { getAllSearchReview } from "../../features/review/reviewSlice";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Pagination from "../Pagination";

const Search_Reviews = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  const { loginOpen, signupOpen } = useSelector((state) => state.modal);
  const { reviews } = useSelector((state) => state.review);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    const searched = { searchData: search };
    e.preventDefault();
    dispatch(getAllSearchReview(searched));
  };

  const onClick = (e) => {
    const reviewData = JSON.stringify(results[e.currentTarget.id]);
    sessionStorage.setItem("review", reviewData);
    navigate("/One_review");
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = results.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    if (isSuccess) {
      dispatch(successModal());
    }
    if (search) {
      const array = [];
      const searchVar = search.toLowerCase();
      for (let i = 0; i < reviews.reviews.length; i++) {
        const tag = reviews.reviews[i].tag.toLowerCase();
        if (searchVar === tag) {
          array.push(reviews.reviews[i]);
        }
      }
      setResults(array);
      setSearch("");
    }
    console.log(reviews);
  }, [isSuccess, loginOpen, signupOpen, dispatch, reviews]);

  return (
    <div className="flex-col justify-center h-[200%] w-[100%] ">
      <div className="flex-col m-auto h-[25%] w-[100%] sm:w-[84%] md:w-[68%] lg:w-[52%] ">
        <Header />
        {signupOpen && <Signup />}
        {loginOpen && <Login />}
        <main className="flex flex-col h-[90vh] w-[100%] ">
          <section className="flex-col h-[90vh] w-[100%] bg-blue-50 ">
            <article className="flex mt-[10%] h-[10%] w-[100%]">
              <form
                className="flex h-[60%] sm:h-[55%] md:h-[50%] lg:h-[45%] w-[100%]"
                onSubmit={onSubmit}
              >
                <input
                  className="flex text-[1rem] h-[100%] w-[80%] sm:w-[80%] md:w-[60%] lg:w-[40%] border-2"
                  placeholder="ex. pulp fiction, reservoir dogs, etc."
                  onChange={onChange}
                />
                <input
                  className="border-black border-2 rounded-lg bg-blue-400 cursor-pointer text-white h-[100%] w-[20%] sm:w-[13%] md:w-[16%] lg:w-[10%] hover:bg-blue-600"
                  type="submit"
                />
              </form>
            </article>
            {results &&
              currentPosts.map((review, i) => {
                return (
                  <button
                    onClick={onClick}
                    key={i}
                    className="flex flex-col place-items-center space-y-1 ml-[4%] mt-[4%] h-[10%] w-[40%] sm:w-[35%] md:w-[30%] lg:w-[25%] text-[0.8rem] border-2 bg-white rounded-xl shadow-inner"
                    id={i}
                  >
                    <div className="flex text-[1.1rem]">{review.title}</div>

                    <div className="flex">author: {review.name}</div>
                  </button>
                );
              })}
          </section>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={results.length}
            paginate={paginate}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Search_Reviews;
