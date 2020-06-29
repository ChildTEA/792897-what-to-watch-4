import PropTypes from "prop-types";

const moviesType = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  runTime: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  videoPreviewSrc: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf[PropTypes.string.isRequired],
  preview: PropTypes.string.isRequired,
}));

const movieType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  runTime: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  videoPreviewSrc: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf[PropTypes.string.isRequired],
  preview: PropTypes.string.isRequired,
});

export {moviesType, movieType};
