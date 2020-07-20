import PropTypes from "prop-types";
import React, {PureComponent} from "react";

import {connect} from "react-redux";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import Main from "../main/main.jsx";
import MoviePageDetails from "../movie-page-details/movie-page-details.jsx";

import {movieType, moviesType} from "../../types/types.js";
import {getPromoMovie, getMoviesToShow} from "../../reducer/data/selectors.js";
import {getCurrentPage} from "../../reducer/navigation/selectors.js";
import {ActionCreator as navigationActionCreator} from "../../reducer/navigation/navigation.js";


class App extends PureComponent {
  _renderApp() {
    const {
      currentPage,
      promoMovie,
      moviesToShow: movies,
      onCardClick,
    } = this.props;

    if (currentPage === `index`) {
      return (
        <Main
          movies={movies}
          promoMovie={promoMovie}
          onCardClick={onCardClick}
        />
      );
    }

    if (currentPage !== `index`) {
      const movieIndex = movies.findIndex((movie) => {
        const movieID = movie.id.toString();

        return movieID === currentPage;
      });

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
    const {moviesToShow: movies} = this.props;

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
  moviesToShow: moviesType.isRequired,
  promoMovie: movieType.isRequired,
  currentPage: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  moviesToShow: getMoviesToShow(state),
  promoMovie: getPromoMovie(state),
  currentPage: getCurrentPage(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCardClick(evt) {
    evt.preventDefault();

    const id = evt.target.dataset.id;

    dispatch(navigationActionCreator.setCurrentPage(id));
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
