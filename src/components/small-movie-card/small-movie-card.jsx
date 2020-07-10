import React, {PureComponent} from "react";
import PropTypes from "prop-types";


class SmallMovieCard extends PureComponent {
  render() {
    const {
      id,
      children,
      title,
      onActivation,
      onDeactivation,
      onCardTitleClick,
    } = this.props;


    return (
      <article
        onMouseEnter={onActivation}
        onMouseLeave={onDeactivation}
        className="small-movie-card catalog__movies-card"
      >
        <div className="small-movie-card__image">
          {children}
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
  }
}


SmallMovieCard.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.PropTypes.string.isRequired,
  videoPreviewSrc: PropTypes.string.isRequired,
  onActivation: PropTypes.func.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  onDeactivation: PropTypes.func.isRequired,
};


export default SmallMovieCard;
