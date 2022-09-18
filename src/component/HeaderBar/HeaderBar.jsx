import React from "react";

function HeaderBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>              
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/names">Names</a>              
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/help">Help</a>              
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
        )        
}

export default HeaderBar;