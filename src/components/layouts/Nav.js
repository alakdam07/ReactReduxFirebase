import React from "react";
import { Link } from "react-router-dom";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { connect } from "react-redux";

const Nav = props => {
  const { auth, profile } = props;

  const links = auth.uid ? <SignedIn profile={profile} /> : <SignedOut />;
  return (
    <div>
      <nav className="nav-wrapper yellow darken-3">
        <div className="container">
          <Link to="/" className="brand-logo black-text">
            Tardis
          </Link>
          {links}
        </div>
      </nav>
    </div>
  );
};

const mapStatetoProps = state => {
  //console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(
  mapStatetoProps,
  null
)(Nav);
