import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";

import Search_Reviews from "./pages/search_reviews/Search_Reviews";

import Write_Review from "./pages/write_review/Review";
import My_reviews from "./pages/my_reviews/my_reviews";
import One_review from "./pages/one_review/one_review";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="Search_Reviews" element={<Search_Reviews />} />
      <Route path="Write_review" element={<Write_Review />} />
      <Route path="My_reviews" element={<My_reviews />} />
      <Route path="One_review" element={<One_review />} />
    </Routes>
  );
}

export default App;
