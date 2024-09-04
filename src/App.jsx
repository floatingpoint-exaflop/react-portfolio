import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Main, Footer, Project } from "./components";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./more.css";

export default function App() {
  const creator = "Tim Scallon";
  const title = "Analyst & Dev";

  return (
    <BrowserRouter>
      <Header creator={creator} title={title} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Main>
              <Routes>
                <Route path="/" element={<AboutMe />}></Route>
                <Route path="/portfolio" element={<Portfolio />}></Route>
                <Route path="/portfolio/:id?" element={<Project />}/>
                <Route path="/resume" element={<Resume />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/*" element={<NotFound/>}/>
              </Routes>
            </Main>
          </div>
        </div>
      </div>
      <Footer creator={creator} />
    </BrowserRouter>
  );
}
