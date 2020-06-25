import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";
import {shortMovieDescription} from "../../const/tests.js";


const {id, title, preview, videoPreviewSrc} = shortMovieDescription;
const isPlaying = false;


describe(`<SmallMovieCard />`, () => {
  it(`Should SmallMovieCard render correctly`, () => {
    const tree = renderer
      .create((
        <SmallMovieCard
          id={id}
          title={title}
          preview={preview}
          isPlaying={isPlaying}
          videoPreviewSrc={videoPreviewSrc}
          onCardTitleClick={() => {}}
          onCardMouseEnter={() => {}}
          onCardMouseLeave={() => {}}
        />), {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
