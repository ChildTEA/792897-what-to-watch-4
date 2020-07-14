import PropTypes from "prop-types";
import React from "react";
import renderer from "react-test-renderer";
import withVideo from "./with-video.js";


const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};


const MockComponentWrapped = withVideo(MockComponent);


describe(`<withVideo />`, () => {
  it(`Should withVideo render correctly`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        isActive={false}
        preview={``}
        videoPreviewSrc={``}
      />
    ), {createNodeMock() {
      return {};
    }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
