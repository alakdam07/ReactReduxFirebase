import React, { Component } from "react";
import { connect } from "react-redux";
import signin from "../store/actions/AuthAction";
import { Redirect } from "react-router-dom";

export class Signin extends Component {
  state = {
    email: " ",
    password: " "
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signin(this.state);
  };
  render() {
    const { authError, auth } = this.props;

    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="gery-text text-darken-3">Sign in</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign in</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  //console.log(state.auth.authError);

  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    signin: cred => dispatch(signin(cred))
  };
};
export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Signin);
