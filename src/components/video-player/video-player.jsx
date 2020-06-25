import React, {PureComponent} from "react";
import PropTypes from "prop-types";


class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
    this._videoDelayPlayTimer = null;

    this.state = {
      isPlayng: this.props.isPlaying,
    };
  }

  componentDidMount() {
    const video = this._videoRef.current;
    const {videoPreviewSrc: src} = this.props;

    video.src = src;
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.state.isPlaying) {
      this._videoDelayPlayTimer = setTimeout(() => video.play(), 1000);
    } else {
      if (this._videoDelayPlayTimer) {
        clearTimeout(this._videoDelayPlayTimer);
        this._videoDelayPlayTimer = null;
      }
      video.load();
    }
  }

  render() {
    return (
      <video
        ref={this._videoRef}
        width="280"
        height="175"
        autoPlay={false}
        loop={true}
        muted="muted"
        poster={`img/${this.props.preview}`}
      >
      </video>
    );
  }
}


VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  preview: PropTypes.string.isRequired,
  videoPreviewSrc: PropTypes.string.isRequired,
};


export default VideoPlayer;
