import { useState } from "react";

export default function Project({ project }) {
  return (
    <div className="col-6 mb-4">
      <div className="card">
        <img className="card-img-top" src={project.img} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">{project.label}</p>
        </div>
        <div className="card-body">
          <a href={project.repoHref} className="card-link">
            Code Repo
          </a>
          <a href={project.deployHref} className="card-link">
            Deployed Site/App
          </a>
        </div>
      </div>
    </div>
  );
}
