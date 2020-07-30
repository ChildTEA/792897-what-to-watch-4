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
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {getPromoMovie, getMovies, getMoviesToShow} from "../../reducer/data/selectors.js";
import {getCurrentPage} from "../../reducer/navigation/selectors.js";
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
              movies={moviesToShow}
              promoMovie={promoMovie}
            />
          </Route>
          <Route
            exact
            path={`${AppRoute.MOVIE_DETAILS}/:id`}
            render={(historyProps) => {
              return (
                <MoviePageDetails
                  historyProps={historyProps}
                  authorizationStatus={authorizationStatus}
                  movies={movies}
                  addToFavorites={addToFavorites}
                />
              );
            }}
          >
          </Route>
          <Route
            exact
            path={`${AppRoute.MOVIE_REVIEWS}/:id`}
            render={(historyProps) => {
              return (
                <MoviePageReviews
                  historyProps={historyProps}
                  authorizationStatus={authorizationStatus}
                  movies={movies}
                  addToFavorites={addToFavorites}
                />
              );
            }}
          >
          </Route>
          <Route
            exact
            path={`${AppRoute.MOVIE_PAGE}/:id`}
            render={(historyProps) => {
              return (
                <MoviePage
                  historyProps={historyProps}
                  authorizationStatus={authorizationStatus}
                  movies={movies}
                  addToFavorites={addToFavorites}
                />
              );
            }}
          >
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <SignIn
              onLogoClick={() => {}}
              onSubmit={login}
            />
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
  currentPage: PropTypes.string.isRequired,
};


const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  moviesToShow: getMoviesToShow(state),
  allMovies: getMovies(state),
  promoMovie: getPromoMovie(state),
  currentPage: getCurrentPage(state),
});

const mapDispatchToProps = (dispatch) => ({
  addToFavorites(movieId, isFavorite) {
    dispatch(DataOperation.addToFavorites(movieId, isFavorite));
  },

  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
