import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {movies, promoMovie} from "./mocks/movies.js";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";


const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App
        movies={movies}
        promoFilmGenre={promoMovie.genre}
        promoFilmRelease={promoMovie.release}
      />
    </Provider>,
    document.querySelector(`#root`)
);
