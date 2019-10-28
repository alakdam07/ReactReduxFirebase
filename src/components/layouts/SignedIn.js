/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signout } from "../store/actions/AuthAction";

const SignedIn = props => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/createproject">Create Project</NavLink>
        </li>
        <li>
          <a onClick={props.signout}>Sign out</a>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating ">
            {props.profile.firstName}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const mapdispatchtoProps = dispatch => {
  return {
    signout: () => dispatch(signout())
  };
};

export default connect(
  null,
  mapdispatchtoProps
)(SignedIn);
