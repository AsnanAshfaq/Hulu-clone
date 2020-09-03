import React from "react";
import "./MovieCard.css";
// importing truncate
import Truncate from "react-truncate";

import {motion} from 'framer-motion'

const MovieCard = ({ movie}) => {
  
  const baseUrlForImage = "https://image.tmdb.org/t/p/original/";
  return (
    <motion.div
      className="card"
      style={{ borderColor: "transparent", backgroundColor: "transparent" }}
      initial={{x:-50,opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{type:'spring',damping:10,stiffness:150}}
    >
      <div className="card-image">
        <img
          className="card-img-top"
          src={`${baseUrlForImage}${movie.poster_path}`}
          alt="Movie"
        />
        {/* rating of the movie  */}
        <div className="tag">
          <h3>⭐️{movie.vote_average}/10</h3>
          </div>
      </div>
      <div
        className="card-body"
        style={{ height: 120, backgroundColor: "transparent" }}
      >
        <h5 className="card-title" style={{userSelect: "none", color: "white" }}>
          {movie.title}
        </h5>
        <Truncate
          lines={1}
          trimWhitespace={true}
          style={{ userSelect: "none", color: "white" }}
          ellipsis={<span>...</span>}
        >
          {movie.overview}
        </Truncate>
      </div>
    </motion.div>
  );
}

export default MovieCard;
