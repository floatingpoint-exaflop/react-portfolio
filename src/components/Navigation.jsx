import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Navigation(props) {
  const location = useLocation();

  const menu = [
    { id: 1, label: "🖥️ About Me", href: "/" },
    { id: 2, label: "💼 Code Portfolio", href: "/portfolio" },
    { id: 3, label: "📝 My Resume/CV", href: "/resume" },
    { id: 4, label: "📧 Contact Me", href: "/contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <span className="navbar-brand">
          {props.creator}: {props.title}
        </span>
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
            {menu.map((page) => (
              <a
                key={page.id}
                className={`nav-link ${
                  location.pathname === page.href ? "active" : ""
                }`}
                href={page.href}
                aria-current={
                  location.pathname === page.href ? "page" : undefined
                }
              >
                {page.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
