import React from "react";
import PropTypes from "prop-types";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActivePlayer from "./with-active-player.js";


Enzyme.configure({
  adapter: new Adapter(),
});


const Player = (props) => {
  const {onActivation, onDeactivation, children} = props;

  return (
    <div
      onMouseEnter={onActivation}
      onMouseLeave={onDeactivation}
    >
      {children}
    </div>
  );
};


Player.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node.isRequired,
  ]),
  onActivation: PropTypes.func.isRequired,
  onDeactivation: PropTypes.func.isRequired,
};


describe(`withActivePlayer e2e`, () => {
  it(`Check that HOC's callbacks change state("isActive")`, () => {
    const PlayerWrapped = withActivePlayer(Player);

    const wrapper = mount(<PlayerWrapped/>);

    expect(wrapper.state(`isActive`)).toBe(false);

    wrapper.simulate(`mouseenter`);

    expect(wrapper.state(`isActive`)).toBe(true);

    wrapper.simulate(`mouseleave`);

    expect(wrapper.state(`isActive`)).toBe(false);
  });
});
