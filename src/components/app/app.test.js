import configureStore from "redux-mock-store";
import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import {fullMoviesDescriptions} from "../../const/tests.js";
import {FilterType} from "../../const/const.js";
import {Provider} from "react-redux";


const PROMO_MOVIE = {
  genre: `Drama`,
  release: 2010,
};


const mockStore = configureStore([]);


describe(`<App />`, () => {
  it(`Render App`, () => {
    const store = mockStore({
      activeFilterType: FilterType.ALL,
    });

    const tree = renderer
      .create((
        <Provider store={store}>
          <App
            promoMovie={PROMO_MOVIE}
            movies={fullMoviesDescriptions}
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
