import history from "../../history.js";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";

import {connect} from "react-redux";
import {Switch, Route, Router} from "react-router-dom";

import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import MoviePageDetails from "../movie-page-details/movie-page-details.jsx";
import MoviePageReviews from "../movie-page-reviews/movie-page-reviews.jsx";
import SignIn from "../sign-in/sign-in.jsx";

import {movieType, moviesType} from "../../types/types.js";
import {ActionCreator as navigationActionCreator} from "../../reducer/navigation/navigation.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {getPromoMovie, getMovies, getMoviesToShow} from "../../reducer/data/selectors.js";
import {getCurrentMovie} from "../../reducer/navigation/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {AppRoute} from "../../const/const.js";


class App extends PureComponent {
  render() {
    const {
      authorizationStatus,
      addToFavorites,
      login,
      promoMovie,
      moviesToShow: moviesToShow,
      allMovies: movies,
      currentMovie,
      onCardClick,
    } = this.props;


    return (
      <Router
        history={history}
      >
        <Switch>
          <Route exact path="/">
            <Main
              addToFavorites={addToFavorites}
              authorizationStatus={authorizationStatus}
              promoMovie={promoMovie}
              movies={moviesToShow}
              onCardClick={onCardClick}
            />
          </Route>
          <Route
            exact
            path={`${AppRoute.MOVIE_DETAILS}/:id`}
            render={() => {
              return (
                <MoviePageDetails
                  addToFavorites={addToFavorites}
                  authorizationStatus={authorizationStatus}
                  movies={movies}
                  movieID={currentMovie}
                  onCardClick={onCardClick}
                />
              );
            }}
          >
          </Route>
          <Route
            exact
            path={`${AppRoute.MOVIE_REVIEWS}/:id`}
            render={() => {
              return (
                <MoviePageReviews
                  addToFavorites={addToFavorites}
                  authorizationStatus={authorizationStatus}
                  movies={movies}
                  movieID={currentMovie}
                  onCardClick={onCardClick}
                />
              );
            }}
          >
          </Route>
          <Route
            exact
            path={`${AppRoute.MOVIE_PAGE}/:id`}
            render={() => {
              return (
                <MoviePage
                  addToFavorites={addToFavorites}
                  authorizationStatus={authorizationStatus}
                  movies={movies}
                  movieID={currentMovie}
                  onCardClick={onCardClick}
                />
              );
            }}
          >
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <SignIn
              onSubmit={login}
            />
          </Route>
          <Route exact path={AppRoute.MY_LIST}>
            <React.Fragment>
              <h1>404</h1>
              <p>
                This page isn&#39;t ready yet. Go back!
              </p>
            </React.Fragment>
          </Route>
        </Switch>
      </Router>
    );
  }
}


App.propTypes = {
  addToFavorites: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  moviesToShow: moviesType.isRequired,
  allMovies: moviesType.isRequired,
  promoMovie: movieType.isRequired,
  currentMovie: PropTypes.oneOf([PropTypes.string, null]),
  onCardClick: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  moviesToShow: getMoviesToShow(state),
  allMovies: getMovies(state),
  promoMovie: getPromoMovie(state),
  currentMovie: getCurrentMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  addToFavorites(movieId, isFavorite) {
    dispatch(DataOperation.addToFavorites(movieId, isFavorite));
  },

  login(authData) {
    dispatch(UserOperation.login(authData));
  },

  onCardClick(evt) {
    const id = evt.target.dataset.id;

    dispatch(navigationActionCreator.setCurrentMovie(id));
  },
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
