import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <a href="https://jbfarrow.com">
            <i className="fa fa-home fa-2x"></i>
            <span className="nav-text"> Home</span>
          </a>
        </li>
        <li className="has-subnav">
          <a href="#">
            <i className="fa fa-globe fa-2x"></i>
            <span className="nav-text">Dashboard</span>
          </a>
        </li>
        <li className="has-subnav">
          <a href="#">
            <i className="fa fa-comments fa-2x"></i>
            <span className="nav-text">Explore</span>
          </a>
        </li>
        <li className="has-subnav">
          <a href="#">
            <i className="fa fa-camera-retro fa-2x"></i>
            <span className="nav-text">Contacts</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-film fa-2x"></i>
            <span className="nav-text">About</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-book fa-2x"></i>
            <span className="nav-text">Paid to play games</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-cogs fa-2x"></i>
            <span className="nav-text">Free to play Games</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-map-marker fa-2x"></i>
            <span className="nav-text">Games Map</span>
          </a>
        </li>
      </ul>

      <ul className="logout">
        <li>
          <a href="#">
            <i className="fa fa-power-off fa-2x"></i>
            <span className="nav-text">Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
