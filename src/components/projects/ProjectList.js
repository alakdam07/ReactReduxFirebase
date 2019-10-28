import React from "react";
import ProjectSumarry from "./ProjectSumarry";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects.map(project => {
        return (
          <Link to={"/project/" + project.id} key={project.id}>
            <ProjectSumarry project={project} key={project.id} />
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectList;
