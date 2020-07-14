import React, {PureComponent} from "react";


const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isActive: false,
      };

      this._handleSetActive = this._handleSetActive.bind(this);
      this._handleSetInactive = this._handleSetInactive.bind(this);
    }

    _handleSetActive() {
      this.setState({isActive: true});
    }

    _handleSetInactive() {
      this.setState({isActive: false});
    }

    render() {
      return (
        <Component
          {...this.props}
          isActive={this.state.isActive}
          onActivation={this._handleSetActive}
          onDeactivation={this._handleSetInactive}
        />
      );
    }
  }


  return WithActivePlayer;
};


export default withActivePlayer;
