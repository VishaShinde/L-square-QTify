import React, { useState } from "react";
// import Button from "./components/Button/button";
// import Search from "./components/Search/search";
import Navbar from "./components/Navbar/navbar";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  const [searchData, useSearchData] = useState();
  return (
   <>
    {/* <Button>Give Feedback</Button>
    <Search placeholder={"Search a album of your choice"}></Search> */}
    <Navbar searchData={searchData}/>
    <HeroSection/>
   </>
  );
}

export default App;
