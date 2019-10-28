import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup } from "../store/actions/AuthAction";

export class Signup extends Component {
  state = {
    email: " ",
    password: " ",
    firstName: " ",
    lastName: " "
    //createAt: new Date()
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state);
    this.props.signup(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="gery-text text-darken-3">Signup</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="firstName">Firstname</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Lastname</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Signup</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchtoprops = dispatch => {
  return {
    signup: newUser => dispatch(signup(newUser))
  };
};

const mapStatetoProps = state => {
  //console.log(state);

  return { auth: state.firebase.auth, authError: state.auth.authError };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoprops
)(Signup);
