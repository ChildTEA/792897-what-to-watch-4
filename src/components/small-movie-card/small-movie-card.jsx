import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const/const.js";


class SmallMovieCard extends PureComponent {
  render() {
    const {
      id,
      children,
      name,
      onActivation,
      onDeactivation,
    } = this.props;


    return (
      <article
        onMouseEnter={onActivation}
        onMouseLeave={onDeactivation}
        className="small-movie-card catalog__movies-card"
      >
        <div
          className="small-movie-card__image"
          data-id={id}
        >
          {children}
        </div>
        <h3 className="small-movie-card__title">
          <Link
            to={`${AppRoute.MOVIE_PAGE}/${id}`}
            className="small-movie-card__link"
            href="movie-page.html"
            data-id={id}
          >
            {name}
          </Link>
        </h3>
      </article>
    );
  }
}


SmallMovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  name: PropTypes.string.isRequired,
  onActivation: PropTypes.func.isRequired,
  onDeactivation: PropTypes.func.isRequired,
};


export default SmallMovieCard;
