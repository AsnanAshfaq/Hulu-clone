import React from "react";
import './Nav.css'
import {motion} from 'framer-motion'
import request from "./request";

const Nav = ({ setOptions }) => {
  return (
    <div className="nav m-0 p-0 d-flex justify-content-center" style={{borderBottom:4, borderBottomColor:'green'}}>
      <motion.h4 className="text-light mx-1" whileHover={{scale:1.2}} onClick={() => setOptions(request.fetchTrending)}>Trending</motion.h4>
      <motion.h4 className="text-light mx-1" whileHover={{scale:1.2}} onClick={() => setOptions(request.fetchTopRated)}>Top Rated</motion.h4>
      <motion.h4 className="text-light mx-1" whileHover={{scale:1.2}} onClick={() => setOptions(request.fetchAction)}>Action</motion.h4>
      <motion.h4 className="text-light mx-1" whileHover={{scale:1.2}} onClick={() => setOptions(request.fetchComedy)}>Comedy</motion.h4>
      <motion.h4 className="text-light mx-1" whileHover={{scale:1.2}} onClick={() => setOptions(request.fetchHorror)}>Horror</motion.h4>
      <motion.h4 className="text-light mx-1" whileHover={{scale:1.2}} onClick={() => setOptions(request.fetchRomantic)}>Romance</motion.h4>
      <motion.h4 className="text-light mx-1" whileHover={{scale:1.2}} onClick={() => setOptions(request.fetchMystery)}>Mystery</motion.h4>
      <motion.h4 className="text-light mx-1" whileHover={{scale:1.2}} onClick={() => setOptions(request.fetchSciFi)}>Sci-fi</motion.h4>
      <motion.h4 className="text-light mx-1" whileHover={{scale:1.2}} onClick={() => setOptions(request.fetchWestern)}>Western</motion.h4>
      <motion.h4 className="text-light mx-1" whileHover={{scale:1.2}} onClick={() => setOptions(request.fetchAnimation)}>Animation</motion.h4>
      <motion.h4 className="text-light mx-1" whileHover={{scale:1.2}} onClick={() => setOptions(request.fetchTV)}>TV Movie</motion.h4>
    </div>
  );
};

export default Nav;
