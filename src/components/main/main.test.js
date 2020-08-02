import configureStore from "redux-mock-store";
import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {fullMovieDescription, fullMoviesDescriptions} from "../../const/tests.js";
import {FilterType} from "../../const/const.js";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space.js";
import {Router} from "react-router-dom";
import history from "../../history.js";


const mockStore = configureStore([]);

const PROMO_MOVIE = fullMovieDescription;
const authorized = AuthorizationStatus.AUTH;
const unauthorized = AuthorizationStatus.NO_AUTH;


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
          <Router
            history={history}
          >
            <Main
              addToFavorites={() => {}}
              authorizationStatus={authorized}
              movies={fullMoviesDescriptions}
              promoMovie={PROMO_MOVIE}
              onCardClick={() => {}}
            />
          </Router>
        </Provider>
      ), {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Main render correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        activeFilterType: FilterType.ALL,
      },
    });

    const tree = renderer
      .create((
        <Provider store={store}>
          <Router
            history={history}
          >
            <Main
              addToFavorites={() => {}}
              authorizationStatus={unauthorized}
              movies={fullMoviesDescriptions}
              promoMovie={PROMO_MOVIE}
              onCardClick={() => {}}
            />
          </Router>
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
