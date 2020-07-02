import Adapter from "enzyme-adapter-react-16";
import Enzyme, {shallow} from "enzyme";
import {GenresList} from "./genres-list.jsx";
import React from "react";


Enzyme.configure({
  adapter: new Adapter(),
});


const filterTypes = [`All`, `Comedy`, `Horror`];


describe(`GenresList e2e`, () => {
  it(`Should call onFilterItemClick one time`, () => {
    const onFilterItemClick = jest.fn();

    const wrapper = shallow(
        <GenresList
          activeFilter={filterTypes[0]}
          filterTypes={filterTypes}
          onFilterItemClick={onFilterItemClick}
        />
    );

    const listItemLink = wrapper.find(`.catalog__genres-link`).at(0);
    listItemLink.simulate(`click`);

    expect(onFilterItemClick).toHaveBeenCalledTimes(1);
  });
});
