import PropTypes from "prop-types";
import React from "react";


const GenresList = ({
  filterTypes,
  activeFilter,
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
            <a href="#" className="catalog__genres-link">{filterType}</a>
          </li>
        );
      })}
    </ul>
  );
};


GenresList.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  filterTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default GenresList;
