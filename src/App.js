import React, { Component } from "react";
import MovieList from "./components/MovieList";
import RatingFilter from "./components/RatingFilter";
import NameFilter from "./components/NameFilter";
import AddMovie from "./components/AddMovie";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [
        {
          id: 1,
          title: "In The Mood For Love",
          year: "2000",
          rating: 4,
          img:
            "https://m.media-amazon.com/images/M/MV5BYTJlMmIwYjAtYWJmYy00YzE2LWE1OTYtZjIyMzg0YWUwOTg4XkEyXkFqcGdeQXVyMTA1NTM1NDI2._V1_.jpg"
        },
        {
          id: 2,
          title: "Black Hawk Down",
          year: "2001",
          rating: 4,
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYWFX47qeuxedZAPefLR9Tz35fAxQIGV6WfqTxpUkwoVMo-yZdSw&s"
        },
        {
          id: 3,
          title: "Parasite",
          year: "2019",
          rating: 5,
          img:
            "https://img4.cdn.cinoche.com/images/591587145c8e772c64fa4847eba6cbf5.jpg"
        },
        {
          id: 4,
          title: "The Shining",
          year: "1980",
          rating: 4,
          img:
            "https://images-na.ssl-images-amazon.com/images/I/51HliQRngAL._AC_.jpg"
        },
        {
          id: 5,
          title: "Camping",
          year: "2006",
          rating: 2,
          img:
            "https://www.campingdeladune.fr/wp-content/uploads/2019/07/camping-film-1.jpg"
        }
      ],

      minRatingFilter: 1,
      titleFilter: "",
      searchValue: ""
    };
  }

  addMovie = newMovie => {
    this.setState({
      movieList: [...this.state.movieList, newMovie]
    });
  };

  render() {
    return (
      <div className="App">
        <NameFilter nameFilter={x => this.setState({ searchValue: x })} />
        <RatingFilter
          number={this.state.minRatingFilter}
          clickRating={newRating => {
            this.setState({ minRatingFilter: newRating });
          }}
        />
        <MovieList
          movieList={this.state.movieList.filter(
            el =>
              el.rating >= this.state.minRatingFilter &&
              el.title
                .toLowerCase()
                .includes(this.state.searchValue.toLowerCase().trim())
          )}
        />
        <AddMovie add={this.addMovie} />
      </div>
    );
  }
}

export default App;
