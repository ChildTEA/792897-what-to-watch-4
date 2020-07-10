import React, {PureComponent} from "react";
import PropTypes from "prop-types";


class VideoPlayer extends PureComponent {
  render() {
    const {children} = this.props;

    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    );
  }
}


VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  preview: PropTypes.string.isRequired,
  videoPreviewSrc: PropTypes.string.isRequired,
};


export default VideoPlayer;
