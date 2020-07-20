import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";

import {compose, createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";

import App from "./components/app/app.jsx";
import reducer from "./reducer/reducer.js";

import {createAPI} from "./api.js";
import {Operation as DataOperation} from "./reducer/data/data.js";


const onUnauthorized = () => {};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);


store.dispatch(DataOperation.loadMovies());
store.dispatch(DataOperation.loadPromoMovie());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
