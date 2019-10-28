import React, { Component } from "react";
import { createproject } from "../store/actions/ProjectFunction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class CreateProject extends Component {
  state = {
    title: " ",
    content: " "
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createProjects(this.state);
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="gery-text text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content title</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">
              Create Project
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    createProjects: project => dispatch(createproject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(CreateProject);
