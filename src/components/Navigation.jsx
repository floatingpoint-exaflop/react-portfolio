import { useState } from "react";

export default function Navigation() {
  return (
    <nav>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Tim Scallon
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
              🖥️ About Me
              </a>
              <a className="nav-link" href="#">
              💼 Portfolio
              </a>
              <a className="nav-link" href="#">
              📝 Resume
              </a>
              <a className="nav-link disabled" aria-disabled="true">
              📧 Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </nav>
  );
}
