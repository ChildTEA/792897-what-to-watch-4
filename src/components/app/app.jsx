import Main from "../main/main.jsx";
import MoviePageDetails from "../movie-page-details/movie-page-details.jsx";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showingPage: `index`,
    };

    this._onCardTitleClick = this._onCardTitleClick.bind(this);
  }

  _onCardTitleClick(evt) {
    evt.preventDefault();

    const id = evt.target.dataset.id;

    this.setState({
      showingPage: id,
    });
  }

  _renderApp() {
    const {movies, promoFilmGenre, promoFilmRelease} = this.props;


    if (this.state.showingPage === `index`) {
      return (
        <Main
          movies={movies}
          promoFilmGenre={promoFilmGenre}
          promoFilmRelease={promoFilmRelease}
          onCardTitleClick={this._onCardTitleClick}
        />
      );
    }

    if (this.state.showingPage !== `index`) {
      const movieIndex = movies.findIndex((item) => item.id === this.state.showingPage);

      if (movieIndex < 0) {
        return null;
      }

      const movie = movies[movieIndex];

      return (
        <MoviePageDetails
          movie={movie}
        />
      );
    }

    return null;
  }

  render() {
    const {movies} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/movie-details">
            <MoviePageDetails
              movie={movies[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}


App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    runTime: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf[PropTypes.string.isRequired],
    preview: PropTypes.string.isRequired,
  })).isRequired,
  promoFilmGenre: PropTypes.string.isRequired,
  promoFilmRelease: PropTypes.number.isRequired,
};

export default App;
