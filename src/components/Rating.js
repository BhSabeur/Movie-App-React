import React from "react";

export default function Rating({ number, onChangeRating = () => {} }) {
  let starsRate = [];
  for (let i = 0; i < 5; i++) {
    if (i < number) {
      starsRate.push(
        <span onClick={() => onChangeRating(i + 1)} key={i}>
          ★
        </span>
      );
    } else {
      starsRate.push(
        <span onClick={() => onChangeRating(i + 1)} key={i}>
          ☆
        </span>
      );
    }
  }
  return <div>{starsRate}</div>;
}

// <div className="movie-card">
{
  /* <div className="movie-rating">
        <Rating key={id} number={rating} />
      </div>
      <div
        className="movie-image"
        style={{
          backgroundImage: `url('${image}')`
        }}
      />
      <div className="movie-description">
        {title} - {year}
      </div> */
}
{
  /* <Rating number={movies.rating} />
      <img className="movie-image" alt="movie" src={movies.img} />
      <div className="movie-description">
        {movies.year}
        {movies.title}
      </div>
    </div> */
}
