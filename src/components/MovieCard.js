import React from "react";
import Rating from "./Rating";
export default function MovieCard({ movies }) {
  // const { movies = {} } = props;
  // const {
  //   title = "",
  //   year = "",
  //   image = "https://cdn2.iconfinder.com/data/icons/interactive-shadow-pack/100/_-6-512.png",
  //   rating = "0",
  //   id = Date.now()
  // } = movies;
  return (
    <div className="card text-white bg-success mb-3" style={{ width: "18rem" }}>
      <img src={movies.img} className="card-img-top image" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{movies.title}</h5>
        <p className="card-text">{movies.year}</p>
        <a href="#" className="btn btn-primary">
          <Rating number={movies.rating} />
        </a>
      </div>
    </div>
  );
}
