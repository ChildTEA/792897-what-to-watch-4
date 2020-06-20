import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';


const onCardTitleClick = (evt) => {
  evt.preventDefault();
};


class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieCard: null,
    };

    this._onCardHover = this._onCardHover.bind(this);
  }

  _onCardHover(evt) {
    const target = evt.target;

    this.setState(() => {
      return {
        activeMovieCard: target,
      };
    });
  }

  render() {
    const {movies} = this.props;
    const smallMovieCards = movies.map((movie) => {
      const title = movie.title;
      const preview = movie.smallCardPreview;

      return (
        <SmallMovieCard
          key={title}
          title={title}
          preview={preview}
          onCardTitleClick={onCardTitleClick}
          onCardHover={this._onCardHover}
        />
      );
    });

    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {smallMovieCards}
        </div>
      </React.Fragment>
    );
  }
}


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    smallCardPreview: PropTypes.string.isRequired
  })).isRequired,
};


export default MoviesList;
