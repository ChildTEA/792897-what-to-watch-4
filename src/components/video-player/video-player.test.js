import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";
import {shortMovieDescription} from "../../const/tests.js"


const isPlaying = false;
const {preview, videoPreviewSrc} = shortMovieDescription;

describe(`<VideoPlayer />`, () => {
  it(`Should VideoPlayer render correctly`, () => {
    const tree = renderer
      .create((
        <VideoPlayer
          isPlaying={isPlaying}
          preview={preview}
          videoPreviewSrc={videoPreviewSrc}
        />
      ), {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
