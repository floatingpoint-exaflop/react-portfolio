import { useState } from "react";
import { Header, Navigation, Main, Project, Footer} from "./components"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"

export default function App() {

  const sitename = "Tim Scallon"
  
  return (
    <div>
      <Header sitename={sitename}>
        
      </Header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Main>
              <Project />
            </Main>
          </div>
        </div>
      </div>
      <Footer sitename={sitename}/>
    </div>
  );
}
