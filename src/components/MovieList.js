import React from "react";
import MovieCard from "./MovieCard";
import WithLoading from "./WithLoading";

function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movieList.map(el => (
        <MovieCard key={el.id} movies={el} />
      ))}
    </div>
  );
}

export default WithLoading(MovieList);
