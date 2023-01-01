import React from "react";

import Social_media from "./images/social_media.png";

const Footer = () => {
  return (
    <div className="flex h-[12%] w-[100%] border-solid border-grey border-2">
      <footer className="flex h-[100%] w-[100%]">
        <div className="flex mt-[2%] ml-[2%] text-[40%] sm:text-[50%] md:text-[60%] lg:text-[70%] h-[30%] w-[20%] text-[#9CC8EA]">
          About us
        </div>
        <div className="flex mt-[2%] text-[40%] sm:text-[50%] md:text-[60%] lg:text-[70%] ml-[12%] h-[30%] w-[20%] text-[#9CC8EA]">
          Contact us
        </div>
        <img
          className="flex ml-[10%] mt-[1.2%] h-[45%] w-[15%] "
          alt="social_media"
          src={Social_media}
        ></img>
      </footer>
    </div>
  );
};

export default Footer;
