import { useState } from "react";

export default function Project({project}) {
  return (
    <article>
      <div className="card" style={{marginRight: 'em'}}>
        <img
          className="card-img-top"
          src={project.img}
          alt="Card image cap"
        />
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
    </article>
  );
}
