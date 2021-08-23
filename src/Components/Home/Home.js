import React from "react";
import HomeSearch from "./HomeSearch";
import Navbar from ".././Navbar";
import HomeInfo from "./HomeInfo";
import Footer from ".././Footer";
import HomeMain from "./HomeMain";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeSearch />
      <HomeInfo />
      <HomeMain />
      <Footer />
    </div>
  );
}
