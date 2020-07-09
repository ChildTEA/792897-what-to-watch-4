import configureStore from "redux-mock-store";
import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
import {fullMoviesDescriptions} from "../../const/tests.js";
import {FilterType} from "../../const/const.js";
import {Provider} from "react-redux";


Enzyme.configure({
  adapter: new Adapter(),
});


const mockStore = configureStore([]);

const PROMO_MOVIE = {
  genre: `Drama`,
  release: 2010,
};


describe(`Main e2e`, () => {
  const store = mockStore({
    activeFilterType: FilterType.ALL,
  });
  it(`Should call onCardTitleClick one time`, () => {
    const onCardTitleClick = jest.fn();

    const wrapper = mount(
        <Provider store={store}>
          <Main
            movies={fullMoviesDescriptions}
            promoMovie={PROMO_MOVIE}
            onCardTitleClick={onCardTitleClick}
          />
        </Provider>
    );

    const title = wrapper.find(`.small-movie-card__link`).first();

    title.simulate(`click`, {preventDefault() {}});

    expect(onCardTitleClick).toHaveBeenCalledTimes(1);
  });
});
