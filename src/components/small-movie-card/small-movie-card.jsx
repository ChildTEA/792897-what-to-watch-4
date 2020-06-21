import React from "react";
import PropTypes from "prop-types";


const MovieCard = ({
  id,
  title,
  preview,
  onCardTitleClick,
  onCardHover
}) => {
  return (
    <article
      onMouseEnter={onCardHover}
      className="small-movie-card catalog__movies-card"
    >
      <div className="small-movie-card__image">
        <img
          src={`img/${preview}`}
          alt={title}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <a
          onClick={onCardTitleClick}
          className="small-movie-card__link"
          href="movie-page.html"
          data-id={id}
        >
          {title}
        </a>
      </h3>
    </article>
  );
};


MovieCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.PropTypes.string.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
};


export default MovieCard;
