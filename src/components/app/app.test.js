import configureStore from "redux-mock-store";
import React from "react";
import renderer from "react-test-renderer";

import {Provider} from "react-redux";

import NameSpace from "../../reducer/name-space.js";

import {App} from "./app.jsx";
import {fullMovieDescription, fullMoviesDescriptions} from "../../const/tests.js";
import {FilterType} from "../../const/const.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";


const PROMO_MOVIE = fullMovieDescription;


const mockStore = configureStore([]);


describe(`<App />`, () => {
  it(`Render App`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        activeFilterType: FilterType.ALL,
      },
    });
    const tree = renderer
      .create((
        <Provider store={store}>
          <App
            addToFavorites={() => {}}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            allMovies={fullMoviesDescriptions}
            promoMovie={PROMO_MOVIE}
            login={() => {}}
            currentMovie={null}
            moviesToShow={fullMoviesDescriptions}
            onCardClick={() => {}}
          />
        </Provider>), {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
