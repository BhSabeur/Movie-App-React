import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movieList.map(el => (
        <MovieCard key={el.id} movies={el} />
      ))}
    </div>
  );
}
