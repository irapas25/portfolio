import React from "react";
import Project from "./Project";
import { projects } from "./projectList";

export default function Projects() {
  let content = projects.map((project) => (
    <Project
      key={project.id}
      title={project.title}
      description={project.description}
      source={project.source}
      live={project.live}
    />
  ));
  return (
    <section className="tab-content">
      <h2 className="project_indicator">projects</h2>
      <div className="projects">{content}</div>
    </section>
  );
}
