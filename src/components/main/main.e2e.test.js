import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import Enzyme, {mount} from "enzyme";
import React from "react";

import {Provider} from "react-redux";

import Main from "./main.jsx";
import {FilterType} from "../../const/const.js";
import {fullMovieDescription, fullMoviesDescriptions} from "../../const/tests.js";
import NameSpace from "../../reducer/name-space.js";


Enzyme.configure({
  adapter: new Adapter(),
});


const mockStore = configureStore([]);

const PROMO_MOVIE = fullMovieDescription;


describe(`Main e2e`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      activeFilterType: FilterType.ALL,
    },
  });
  it(`Should call onCardClick one time`, () => {
    const onCardClick = jest.fn();

    const wrapper = mount(
        <Provider store={store}>
          <Main
            movies={fullMoviesDescriptions}
            promoMovie={PROMO_MOVIE}
            onCardClick={onCardClick}
          />
        </Provider>
    );

    const title = wrapper.find(`.small-movie-card__link`).first();

    title.simulate(`click`, {preventDefault() {}});
    expect(onCardClick).toHaveBeenCalledTimes(1);

    const image = wrapper.find(`.small-movie-card__image`).first();

    image.simulate(`click`, {preventDefault() {}});
    expect(onCardClick).toHaveBeenCalledTimes(2);
  });
});
