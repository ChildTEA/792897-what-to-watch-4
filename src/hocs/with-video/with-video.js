import PropTypes from "prop-types";
import React, {createRef, PureComponent} from "react";


const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();
      this._videoDelayPlayTimer = null;
    }

    componentDidMount() {
      const video = this._videoRef.current;
      const {
        videoPreviewSrc: src,
        previewImage
      } = this.props;

      video.src = src;
      video.muted = true;
      video.width = `280`;
      video.height = `175`;
      video.autoPlay = false;
      video.loop = true;
      video.poster = `${previewImage}`;
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.src = ``;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      const onPlay = () => {
        video.play();
      };

      if (this.props.isActive) {
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
        <Component
          {...this.props}
          isPlaying={this.props.isActive}
        >
          <video
            ref={this._videoRef}
          />
        </Component>
      );
    }
  }


  WithVideo.propTypes = {
    isActive: PropTypes.bool.isRequired,
    previewImage: PropTypes.string.isRequired,
    videoPreviewSrc: PropTypes.string.isRequired,
  };

  return WithVideo;
};


export default withVideo;
