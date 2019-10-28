import React, { Component } from "react";
import Notification from "./Notifictaion";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashborad extends Component {
  render() {
    // console.log(this.props);

    const { projects, auth, notifications } = this.props;
    // console.log(auth);
    //console.log(notifications);

    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
            <div className="col s12 m5 offset-1">
              <Notification notifications={notifications} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapstateToProps = state => {
  //console.log(state);
  //console.log(state);
  //console.log(state.firestore.ordered.projects);

  return {
    projects: state.firestore.ordered.projects || state.project.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};
export default compose(
  connect(
    mapstateToProps,
    null
  ),
  firestoreConnect([
    {
      collection: "projects",
      orderBy: ["createAt", "desc"]
    },
    {
      collection: "notifications",
      limit: 5,
      orderBy: ["time", "desc"]
    }
  ])
)(Dashborad);
