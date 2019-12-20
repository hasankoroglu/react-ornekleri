import React, {useState} from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Octicon, {ThreeBars} from "@primer/octicons-react";

function App() {

  const [sideMenuClass,SetSideMenuClass] = useState(null);

  const toggleMenu = () => {
    const newClass = sideMenuClass == null ? "menuDisplayed" : null;
    SetSideMenuClass(newClass);
  }

  return (
    <Router>
      <div id="wrapper" className={sideMenuClass}>
      <SideBar />
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <button onClick={()=>toggleMenu()} className="btn-sidemenu">
            <Octicon icon={ThreeBars} size="large"/>
            </button>
              <Route path="/" exact component={Home} />
            </div>
          </div>
        </div>
      </div>
      </div>
    </Router>
  );
}

const Home = () => {
  return <h2>Anasayfa</h2>;
};

const SideBar = () => {
  return (
    <nav id="sidebar-wrapper">
      <ul className="sidebar-nav">
        <li>
          <NavLink exact to="/" className="nav-link" activeClassName="active">Anasayfa</NavLink>
        </li>
        <li>
        <NavLink exact to="/reduce/" className="nav-link" activeClassName="active">Reduce</NavLink>
        </li>
        <li>
        <NavLink exact to="/composition/" className="nav-link" activeClassName="active">Composition</NavLink>
        </li>
      </ul>
    </nav>
  );
};

/*
const Header = () => {
  return(<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink exact to="/" className="nav-link" activeClassName="active">Anasayfa</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact to="/reduce/" className="nav-link" activeClassName="active">Reduce</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact to="/composition/" className="nav-link" activeClassName="active">Composition</NavLink>
      </li>
    </ul>
  </nav>);
}
*/

export default App;