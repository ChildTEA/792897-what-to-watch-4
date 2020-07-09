import configureStore from "redux-mock-store";
import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {fullMoviesDescriptions} from "../../const/tests.js";
import {FilterType} from "../../const/const.js";
import {Provider} from "react-redux";


const mockStore = configureStore([]);

const PROMO_MOVIE = {
  genre: `Drama`,
  release: 2010,
};


describe(`<Main />`, () => {
  it(`Should Main render correctly`, () => {
    const store = mockStore({
      activeFilterType: FilterType.ALL,
    });

    const tree = renderer
      .create((
        <Provider store={store}>
          <Main
            movies={fullMoviesDescriptions}
            promoMovie={PROMO_MOVIE}
            onCardTitleClick={() => {}}
          />
        </Provider>
      ), {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
