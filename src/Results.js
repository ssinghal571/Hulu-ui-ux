import React, { useEffect, useState } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
// import requests from "./requests";
import axios from "./axios";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Run a piece of code watch time this component loads
    async function fetchData() {
      const response = await axios.get(selectedOption);
      // console.log(response);
      setMovies(response.data.results);
      return response;
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Results;
