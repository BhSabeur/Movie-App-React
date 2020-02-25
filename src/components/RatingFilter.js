import React from "react";
import Rating from "./Rating";
export default function RatingFilter({ number, clickRating }) {
  return (
    <div className="rating-filter">
      <span className="rating-filter-text">Search by Rating</span>
      <Rating
        number={number}
        onChangeRating={newRating => {
          clickRating(newRating);
        }}
      />
    </div>
  );
}
