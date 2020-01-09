import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Octicon, { ThreeBars, Home, ArrowRight } from "@primer/octicons-react";
import UseContextExample from "./useContext";
import UseReducerCounter from "./useReducer";
import UseRefExample from "./useRef";

export default function App() {
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
  return (
    <div>
    <h2>Anasayfa</h2>
    <p>Kaynak Kodlar: <a href="https://github.com/hasankoroglu/react-ornekleri" target="_blank" rel="noopener noreferrer">https://github.com/hasankoroglu/react-ornekleri</a></p> 
    </div>
    );
};

const Content = () => {
  return(
    <div id="content" className="p-4 p-md-5 pt-5">
      <Route path="/" exact component={HomePage} />
      <Route path="/useContext" component={UseContextExample} />
      <Route path="/useReducer" component={UseReducerCounter} />
      <Route path="/useRef" component={UseRefExample} />
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
            <NavLink to="/useContext" activeClassName="active"><Octicon icon={ArrowRight} size="small" className="mr-3"/>useContext</NavLink>
          </li>
          <li>
            <NavLink to="/useReducer" activeClassName="active"><Octicon icon={ArrowRight} size="small" className="mr-3"/>useReducer</NavLink>
          </li>
          <li>
            <NavLink to="/useRef" activeClassName="active"><Octicon icon={ArrowRight} size="small" className="mr-3"/>useRef</NavLink>
          </li>
        </ul>
        <div className="footer"></div>
      </div>
    </nav>
  );
};