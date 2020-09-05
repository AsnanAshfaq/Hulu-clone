import React, { useEffect, useState } from "react";
import "./App.css";
import request from "./request";
import Axios from "./axios";
// custom components 🤓
import MovieCard from "./MovieCard";
import Error from "./error";
import Header from "./header";
import Nav from "./Nav";

// loading Component 💯
import ReactLoading from "react-loading";

function App() {
  // local states 🍺
  const [Movies, setMovies] = useState([]);
  const [NavCategory, setNavCategory] = useState(request.fetchTrending);
  const [isLoading, setisLoading] = useState(true);
  const [error, seterror] = useState("");

  const checkForError = () => {
    // if there exists any error 🐛 then show the error component
    if (error !== "") {
      return <Error />;
    } else {
      return null; //✖️
    }
  };
  useEffect(() => {
    async function fetchData() {
      try {
        setisLoading(true);
        const data = await Axios.get(NavCategory);
        // setting the state of the movies 🎥
        setMovies(data.data.results);
        setisLoading(false);
        seterror("");
      } catch (err) {
        seterror(err);
      }
    }
    // call the above method ✅
    fetchData();
  }, [NavCategory]);

  return (
    <div className="app">
      <Header />
      <Nav setOptions={setNavCategory} />

      {isLoading ? (
        <div style={{ position: "absolute", top: 0 }}>
          <ReactLoading
            type={"bubbles"}
            color={"black"}
            delay={500}
            height={"100%"}
            width={"100%"}
          />
        </div>
      ) : (
        checkForError() //🐛
      )}
      <div className="container-fluid">
        <div className="row">
          {Movies.map((movie) => (
            <div
              key={movie.id}
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 my-2"
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
