import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="flex h-[4%] w-[100%] border-solid border-[0.1rem]">
      <ul className="flex h-[100%] w-[100%] justify-center border-solid border-[0.1rem]">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="flex h-[100%] w-[5%] border-solid border-[0.1rem] m-1"
          >
            <button
              onClick={() => paginate(number)}
              className=" h-[100%] w-[100%] border-2 bg-blue-300 cursor-pointer text-white hover:bg-blue-500"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
