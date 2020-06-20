import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {movies, promoMovie} from "./mocks/movies.js";


ReactDOM.render(
    <App
      movies={movies}
      promoFilmGenre={promoMovie.genre}
      promoFilmRelease={promoMovie.release}
    />,
    document.querySelector(`#root`)
);
