import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";
import {Router} from "react-router-dom";
import history from "../../history.js";

it(`Should SignIn component render correctly`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <SignIn
          onSubmit={() => {}}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
