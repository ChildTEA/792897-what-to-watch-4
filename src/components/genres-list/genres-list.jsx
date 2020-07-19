import PropTypes from "prop-types";
import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/data/data.js";
import {getActiveFilterType} from "../../reducer/data/selectors.js";


const GenresList = ({
  filterTypes,
  activeFilter,
  onFilterItemClick,
}) => {
  return (
    <ul className="catalog__genres-list">
      {filterTypes.map((filterType) => {
        return (
          <li
            key={filterType}
            className={`catalog__genres-item ${
              activeFilter === filterType ? `catalog__genres-item--active` : ``}`}
          >
            <a
              href="#"
              className="catalog__genres-link"
              onClick={() => {
                onFilterItemClick(filterType);
              }}
            >
              {filterType}
            </a>
          </li>
        );
      })}
    </ul>
  );
};


GenresList.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  filterTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilterItemClick: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  activeFilter: getActiveFilterType(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilterItemClick(filterType) {
    dispatch(ActionCreator.setFilterType(filterType));
    dispatch(ActionCreator.getMoviesByGenre());
  },
});


export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
