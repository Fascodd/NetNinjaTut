import React from "react";

class NavBar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/create">A New Blog</a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
