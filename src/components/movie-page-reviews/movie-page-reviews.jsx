import PropTypes from "prop-types";
import React from "react";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import withActivePlayer from "../../hocs/with-active-player/with-active-player.js";
import withVideo from "../../hocs/with-video/with-video.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {AppRoute} from "../../const/const.js";
import {findMovieById} from "../../utils/utils.js";
import {getSameGenreMovies} from "../../utils/utils.js";
import {Link} from "react-router-dom";
import {moviesType} from "../../types/types.js";


const MoviePageReviews = ({
  addToFavorites,
  authorizationStatus,
  movies,
  movieID,
  onCardClick,
}) => {
  const movie = findMovieById(movies, movieID);

  const SIMILAR_MOVIES_COUNT = 4;
  const similarMovies = getSameGenreMovies(movies, movie.genre, SIMILAR_MOVIES_COUNT);
  let similarMovieCards = null;

  if (similarMovies) {
    const SmallMovieCardWrapped = withActivePlayer(withVideo(SmallMovieCard));

    similarMovieCards = similarMovies.map((similarMmovie) => {
      return (
        <SmallMovieCardWrapped
          key={similarMmovie.name}
          id={similarMmovie.id}
          name={similarMmovie.name}
          previewImage={similarMmovie.previewImage}
          videoPreviewSrc={similarMmovie.videoPreviewSrc}
          onCardClick={onCardClick}
        />
      );
    });
  }

  return (
    <React.Fragment>
      <div className="visually-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
          <symbol id="add" viewBox="0 0 19 20">
            <title>+</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="+" fill="#EEE5B5" points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859"/>
            </g>
          </symbol>
          <symbol id="full-screen" viewBox="0 0 27 27">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" fill="#FFF9D9" fillOpacity="0.7"/>
          </symbol>
          <symbol id="in-list" viewBox="0 0 18 14">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z" fill="#EEE5B5"/>
          </symbol><symbol id="pause" viewBox="0 0 14 21">
            <title>Artboard</title>
            <desc>Created with Sketch.</desc>
            <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21"/>
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21"/>
            </g>
          </symbol>
        </svg>
      </div>

      <section className="movie-card movie-card--full" data-id={movieID}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={movie.backgroundImage} alt={movie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link
                to={AppRoute.ROOT}
                className="logo__link"
              >
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              {authorizationStatus === AuthorizationStatus.AUTH ?
                <div className="user-block__avatar">
                  <Link
                    to={AppRoute.MY_LIST}
                  >
                    <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
                  </Link>
                </div> :
                <Link
                  to={AppRoute.LOGIN}
                  className="user-block__link">
                    Sign in
                </Link>
              }
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movie.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movie.genre}</span>
                <span className="movie-card__year">{movie.realised}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  onClick={() => addToFavorites(movieID, movie.isFavorite)}
                  className="btn btn--list movie-card__button"
                  type="button"
                >
                  {movie.isFavorite ?
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"></use>
                    </svg> :
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                  }
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={movie.posterImage} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item">
                    <Link
                      to={`${AppRoute.MOVIE_PAGE}/${movieID}`}
                      href="#" className="movie-nav__link"
                    >
                      Overview
                    </Link>
                  </li>
                  <li className="movie-nav__item">
                    <Link
                      to={`${AppRoute.MOVIE_DETAILS}/${movieID}`}
                      className="movie-nav__link"
                    >
                      Details
                    </Link>
                  </li>
                  <li className="movie-nav__item movie-nav__item--active">
                    <Link
                      to={`${AppRoute.MOVIE_REVIEWS}/${movieID}`}
                      className="movie-nav__link"
                    >
                      Reviews
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="movie-card__text movie-card__row">
                <div className="movie-card__reviews-col">
                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&#39;s funniest and most exquisitely designed movies in years.</p>
                      <footer className="review__details">
                        <cite className="review__author">Kate Muir</cite>
                        <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
                      </footer>
                    </blockquote>
                    <div className="review__rating">8,9</div>
                  </div>
                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">Anderson&#39;s films are too precious for some, but for those of us willing to lose ourselves in them, they&#39;re a delight. &#34;The Grand Budapest Hotel&#34; is no different, except that he has added a hint of gravitas to the mix, improving the recipe.</p>
                      <footer className="review__details">
                        <cite className="review__author">Bill Goodykoontz</cite>
                        <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                      </footer>
                    </blockquote>
                    <div className="review__rating">8,0</div>
                  </div>
                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">I didn&#39;t find it amusing, and while I can appreciate the creativity, it&#39;s an hour and 40 minutes I wish I could take back.</p>
                      <footer className="review__details">
                        <cite className="review__author">Amanda Greever</cite>
                        <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                      </footer>
                    </blockquote>
                    <div className="review__rating">8,0</div>
                  </div>
                </div>

                <div className="movie-card__reviews-col">
                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.</p>
                      <footer className="review__details">
                        <cite className="review__author">Matthew Lickona</cite>
                        <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                      </footer>
                    </blockquote>
                    <div className="review__rating">7,2</div>
                  </div>
                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>
                      <footer className="review__details">
                        <cite className="review__author">Paula Fleri-Soler</cite>
                        <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                      </footer>
                    </blockquote>
                    <div className="review__rating">7,6</div>
                  </div>
                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>
                      <footer className="review__details">
                        <cite className="review__author">Paula Fleri-Soler</cite>
                        <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                      </footer>
                    </blockquote>
                    <div className="review__rating">7,0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        {similarMovies ?
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <div className="catalog__movies-list">
              {similarMovieCards}
            </div>
          </section> :
          ``}

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};


MoviePageReviews.propTypes = {
  addToFavorites: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  movies: moviesType.isRequired,
  movieID: PropTypes.number.isRequired,
  onCardClick: PropTypes.func.isRequired,
};


export default MoviePageReviews;
