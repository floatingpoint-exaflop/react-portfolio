import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header, Main, Footer, Project} from "./components"
import AboutMe from "./pages/AboutMe"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"
 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"

export default function App() {
  
  const creator = "Tim Scallon"
  const title = "Analyst & Dev"

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" component={<AboutMe/>}></Route>
      <Route path="/portfolio" component={<Portfolio/>}></Route>
      <Route path="/resume" component={<Resume/>}></Route>
      <Route path="/contact" component={<Contact/>}></Route>
    </Routes>
      <Header creator={creator} title={title} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Main>

            </Main>
          </div>
        </div>
      </div>
      <Footer creator={creator}/>
    </BrowserRouter>
  );
}
