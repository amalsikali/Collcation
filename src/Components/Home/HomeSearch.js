import React from "react";
import "./Home.css";
export default function HomeSearch() {
  return (
    <div className="searchContainer">
      <div class="wrap">
        <div class="search">
          <input
            type="text"
            class="searchTerm"
            placeholder="What are you looking for?"
          ></input>
          <button type="submit" class="searchButton">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
