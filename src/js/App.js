import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Octicon, { ThreeBars, Home, ArrowRight } from "@primer/octicons-react";
import Reduce from "./reduce"

function App() {
  return (
    <Router basename="/react-ornekleri">
      <div className="wrapper d-flex align-items-stretch">
        <SideBar />
        <Content />
      </div>
    </Router>
  );
}

const HomePage = () => {
  return <h2>Anasayfa</h2>;
};

const Content = () => {
  return(
    <div id="content" className="p-4 p-md-5 pt-5">
      <Route path="/" exact component={HomePage} />
      <Route path="/reduce" component={Reduce} />
    </div>
  );
}

const SideBar = () => {
  const [sideMenuClass, SetSideMenuClass] = useState(null);

  const toggleMenu = () => {
    const newClass = sideMenuClass == null ? "active" : null;
    SetSideMenuClass(newClass);
  };

  return (
    <nav id="sidebar" className={sideMenuClass}>
      <div className="custom-menu">
        <button type="button" id="sidebarCollapse" onClick={() => toggleMenu()} className="btn btn-primary">
          <Octicon icon={ThreeBars} size="small" />
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>
      <div className="p-4">
        <h3>React Örnekleri</h3>
        <ul className="list-unstyled components mb-5">
          <li>
            <NavLink exact to="/" activeClassName="active"><Octicon icon={Home} size="small" className="mr-3" />Anasayfa</NavLink>
          </li>
          <li>
            <NavLink to="/reduce" activeClassName="active"><Octicon icon={ArrowRight} size="small" className="mr-3"/>Reduce</NavLink>
          </li>
        </ul>
        <div className="footer"></div>
      </div>
    </nav>
  );
};

export default App;