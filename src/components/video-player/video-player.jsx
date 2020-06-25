import React, {PureComponent} from "react";
import PropTypes from "prop-types";


class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
    this._videoDelayPlayTimer = null;

    this.state = {
      isPlaying: this.props.isPlaying,
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
    this.setState({isPlaying: this.props.isPlaying});
    const video = this._videoRef.current;

    const onPlay = () => {
      video.play();
    };

    if (this.state.isPlaying) {
      this._videoDelayPlayTimer = setTimeout(onPlay, 1000);
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
        muted={true}
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
