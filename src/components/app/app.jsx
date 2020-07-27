import history from "../../history.js";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";

import {connect} from "react-redux";
import {Switch, Route, Router} from "react-router-dom";

import Main from "../main/main.jsx";
import MoviePageDetails from "../movie-page-details/movie-page-details.jsx";
import SignIn from "../sign-in/sign-in.jsx";

import {movieType, moviesType} from "../../types/types.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {getPromoMovie, getMoviesToShow} from "../../reducer/data/selectors.js";
import {getCurrentPage} from "../../reducer/navigation/selectors.js";
import {ActionCreator as navigationActionCreator} from "../../reducer/navigation/navigation.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {AppRoute} from "../../const/const.js";


class App extends PureComponent {
  render() {
    const {
      authorizationStatus,
      login,
      promoMovie,
      moviesToShow: movies,
    } = this.props;
    return (
      <Router
        history={history}
      >
        <Switch>
          <Route exact path="/">
            <Main
              authorizationStatus={authorizationStatus}
              movies={movies}
              promoMovie={promoMovie}
            />
          </Route>
          <Route
            exact
            path={`${AppRoute.MOVIE_DETAILS}/:id`}
            // path={`${AppRoute.MOVIE_DETAILS}`}
            render={(historyProps) => {
              return (
                <MoviePageDetails
                  historyProps={historyProps}
                  authorizationStatus={authorizationStatus}
                  movies={movies}
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
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  moviesToShow: moviesType.isRequired,
  promoMovie: movieType.isRequired,
  currentPage: PropTypes.string.isRequired,
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
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
