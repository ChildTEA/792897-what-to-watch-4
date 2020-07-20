import configureStore from "redux-mock-store";
import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {fullMovieDescription, fullMoviesDescriptions} from "../../const/tests.js";
import {FilterType} from "../../const/const.js";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space.js";


const mockStore = configureStore([]);

const PROMO_MOVIE = fullMovieDescription;


describe(`<Main />`, () => {
  it(`Should Main render correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        activeFilterType: FilterType.ALL,
      },
    });

    const tree = renderer
      .create((
        <Provider store={store}>
          <Main
            movies={fullMoviesDescriptions}
            promoMovie={PROMO_MOVIE}
            onCardClick={() => {}}
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
