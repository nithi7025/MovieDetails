import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function MovieSection({ title, Genre }) {
  const [movies, setMovies] = useState([]);
  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${Genre}&apikey=10889c2b`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.Search || []);
  };
  useEffect(() => {
    getMovieRequest(Genre);
  }, [Genre]);
  return (
    
    <div className="sectionwrapper">
      <h1>{title}</h1>
      <div className="sectionitemwrapper">
        {movies.map((movie, i) => (
          <div className="sectionitem" key={i}>
            <img src={movie.Poster}></img>
            <h4>{movie.Title}</h4>
            <Button
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                `https://www.youtube.com/results?search_query=${movie.Title}`;
              }}
            >
              {movie.Title}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
