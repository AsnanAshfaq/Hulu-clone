import React from "react";
import './Nav.css'
import request from "./request";

const Nav = ({ setOptions }) => {
  return (
    <div className="nav m-0 p-0">
      <h2 onClick={() => setOptions(request.fetchTrending)}>Trending</h2>
      <h2 onClick={() => setOptions(request.fetchTopRated)}>Top Rated</h2>
      <h2 onClick={() => setOptions(request.fetchAction)}>Action</h2>
      <h2 onClick={() => setOptions(request.fetchComedy)}>Comedy</h2>
      <h2 onClick={() => setOptions(request.fetchHorror)}>Horror</h2>
      <h2 onClick={() => setOptions(request.fetchRomantic)}>Romance</h2>
      <h2 onClick={() => setOptions(request.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setOptions(request.fetchSciFi)}>Sci-fi</h2>
      <h2 onClick={() => setOptions(request.fetchWestern)}>Western</h2>
      <h2 onClick={() => setOptions(request.fetchAnimation)}>Animation</h2>
      <h2 onClick={() => setOptions(request.fetchTV)}>TV Movie</h2>
    </div>
  );
};

export default Nav;
