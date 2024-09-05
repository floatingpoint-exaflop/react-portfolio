import { useState } from "react";

export default function Navigation(props) {

  const [current, setCurrent] = useState("About Me");

  const handleNavClick = (page) => {
    setCurrent(page);
  };

  const menu = [
    { id: 1, label: "🖥️ About Me", href: "/" },
    { id: 2, label: "💼 Code Portfolio", href: "/portfolio" },
    { id: 3, label: "📝 My Resume/CV", href: "/resume" },
    { id: 4, label: "📧 Contact Me", href: "/contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand">
          {props.creator}: {props.title}
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
            {menu.map((page) => (
              <a
                key={page.id}
                className={`nav-link ${current === page.label ? "active" : ""}`}
                href={page.href}
                aria-current={current === page.label ? "page" : undefined}
                onClick={() => handleNavClick(page.label)}
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
