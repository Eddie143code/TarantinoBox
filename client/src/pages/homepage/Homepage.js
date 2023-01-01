import React from "react";

import Welcome from "./Welcome";
import Reviews from "./Reviews";

const Homepage = () => {
  return (
    <main className="flex-col justify-center h-[200%] w-[100%] ">
      <Welcome />
      <Reviews />
    </main>
  );
};

export default Homepage;
