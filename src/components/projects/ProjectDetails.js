import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const ProjectDetails = props => {
  //console.log(props);
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project title: {project.title} </span>
            <p>{project.content}</p>
          </div>
          <div className="card-action lighten-4 grey-text">
            <div>
              posted by: {project.FirstName} {project.LastName}
            </div>
            <div>
              Created at:{" "}
              {moment(project.createAt.toDate().toString()).calendar()}{" "}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Project loading</h1>
      </div>
    );
  }
};

const mapstateToProps = (state, ownProps) => {
  //console.log(state); //this is show whole root reducer
  const id = ownProps.match.params.id;
  // console.log(id); //this will show id from firebase
  const projects = state.firestore.data.projects; //this is will show all projects properties from firebase
  //console.log(projects);
  const project = projects ? projects[id] : null; // in here we connect projects in one project id
  //console.log(project); //this will show one whole project property
  return {
    project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapstateToProps),
  firestoreConnect([
    {
      collection: "projects"
    }
  ])
)(ProjectDetails);
