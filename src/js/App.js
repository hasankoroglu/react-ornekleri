import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Reduce from "./reduce"
import Composition from "./composition"

function App() {
  return (
    <Router>
        <Header/>
        <Route path="/" exact component={Home} />
        <Route path="/reduce/" component={Reduce} />
        <Route path="/composition/" component={Composition} />
    </Router>
  );
}

const Home = () => {
  return(<h2>Anasayfa</h2>);
}

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

export default App;
