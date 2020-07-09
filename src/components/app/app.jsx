import Main from "../main/main.jsx";
import MoviePageDetails from "../movie-page-details/movie-page-details.jsx";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {moviesType} from "../../types/types.js";


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
    const {movies, promoMovie} = this.props;


    if (this.state.showingPage === `index`) {
      return (
        <Main
          movies={movies}
          promoMovie={promoMovie}
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
  movies: moviesType.isRequired,
  promoMovie: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
  }),
};


const mapStateToProps = (state) => ({
  movies: state.moviesToShow,
  promoMovie: state.promoMovie,
  currentFilterType: state.currentFilterType,
});


export {App};
export default connect(mapStateToProps, null)(App);
