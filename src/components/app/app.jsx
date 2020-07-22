import PropTypes from "prop-types";
import React, {PureComponent} from "react";

import {connect} from "react-redux";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import Main from "../main/main.jsx";
import MoviePageDetails from "../movie-page-details/movie-page-details.jsx";
import SignIn from "../sign-in/sign-in.jsx";

import {movieType, moviesType} from "../../types/types.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {getPromoMovie, getMoviesToShow} from "../../reducer/data/selectors.js";
import {getCurrentPage} from "../../reducer/navigation/selectors.js";
import {ActionCreator as navigationActionCreator} from "../../reducer/navigation/navigation.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";


class App extends PureComponent {
  _renderApp() {
    const {
      authorizationStatus,
      currentPage,
      login,
      promoMovie,
      moviesToShow: movies,
      onCardClick,
      onLogoClick,
      onSignInClick,
    } = this.props;

    if (currentPage === `index`) {
      return (
        <Main
          authorizationStatus={authorizationStatus}
          movies={movies}
          promoMovie={promoMovie}
          onCardClick={onCardClick}
          onSignInClick={onSignInClick}
        />
      );
    } else if (currentPage === `sign-in`) {
      return (
        <SignIn
          onLogoClick={onLogoClick}
          onSubmit={login}
        />
      );
    } else if (currentPage !== `index`) {
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
          authorizationStatus={authorizationStatus}
          movie={movie}
          onLogoClick={onLogoClick}
          onSignInClick={onSignInClick}
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
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              movie={movies[0]}
              onLogoClick={() => {}}
              onSignInClick={() => {}}
            />
          </Route>
          <Route exact path="/sing-in">
            <SignIn
              onLogoClick={() => {}}
              onSubmit={() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}


App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  moviesToShow: moviesType.isRequired,
  promoMovie: movieType.isRequired,
  currentPage: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onLogoClick: PropTypes.func.isRequired,
  onSignInClick: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  moviesToShow: getMoviesToShow(state),
  promoMovie: getPromoMovie(state),
  currentPage: getCurrentPage(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },

  onCardClick(evt) {
    evt.preventDefault();

    const id = evt.target.dataset.id;

    dispatch(navigationActionCreator.setCurrentPage(id));
  },

  onSignInClick(evt) {
    evt.preventDefault();

    dispatch(navigationActionCreator.setCurrentPage(`sign-in`));
  },

  onLogoClick(evt) {
    evt.preventDefault();

    dispatch(navigationActionCreator.setCurrentPage(`index`));
  },
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
