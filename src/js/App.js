import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import ContextExample from "./context"

function App() {
  return (
    <Router>
        <Header/>
        <Route path="/" exact component={Home} />
        <Route path="/context/" component={ContextExample} />
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
        <NavLink exact to="/context/" className="nav-link" activeClassName="active">Context</NavLink>
      </li>
    </ul>
  </nav>);
}

export default App;
