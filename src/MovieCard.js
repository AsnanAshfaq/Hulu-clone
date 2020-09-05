import React from "react";
import "./MovieCard.css";
// importing truncate
import Truncate from "react-truncate";

import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 150,
    },
  },
};


const cardbodyVariants = {
  hidden: {
    y: 60,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
const MovieCard = ({ movie }) => {
  const baseUrlForImage = "https://image.tmdb.org/t/p/original/";
  return (
    <motion.div
      className="card"
      style={{ borderColor: "transparent", backgroundColor: "transparent" }}
      variants={cardVariants} //variant 😉
      initial="hidden"
      animate="visible"
    >
      <motion.div className="card-image" whileHover={{ scale:1 }}>
        <img
          className="card-img-top"
          src={`${baseUrlForImage}${movie.poster_path}`}
          alt="Movie"
        />
        {/* rating of the movie  */}
        <motion.div className="tag">
          <motion.h3>⭐️{movie.vote_average}/10</motion.h3>
        </motion.div>
      </motion.div>
      <motion.div
        className="card-body"
        style={{ height: 150, backgroundColor: "transparent" }}
        variants={cardbodyVariants} //variant 😉
      >
        <h3
          className="card-title"
          style={{ userSelect: "none", color: "white",fontFamily: 'Slabo'}}
        >
          {movie.title}
        </h3>
        <Truncate
          lines={1}
          trimWhitespace={true}
          style={{ userSelect: "none", color: "white" }}
          ellipsis={<span>...</span>}
        >
          {movie.overview}
        </Truncate>
      </motion.div>
    </motion.div>
  );
};

export default MovieCard;
