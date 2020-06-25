import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player.jsx";
import {shortMovieDescription} from "../../const/tests.js";

Enzyme.configure({
  adapter: new Adapter(),
});


const {preview, videoPreviewSrc} = shortMovieDescription;

describe(`VideoPlayer e2e`, () => {
  it(`Should isPlaying state be true`, () => {
    const wrapper = mount(
        <VideoPlayer
          preview={preview}
          videoPreviewSrc={videoPreviewSrc}
          isPlaying={true}
        />
    );

    expect(wrapper.state().isPlaying).toBeTruthy();
  });

  it(`Should isPlaying state be false`, () => {
    const wrapper = mount(
        <VideoPlayer
          preview={preview}
          videoPreviewSrc={videoPreviewSrc}
          isPlaying={false}
        />
    );

    expect(wrapper.state().isPlaying).toBeFalsy();
  });
});
