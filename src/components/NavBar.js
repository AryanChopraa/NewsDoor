import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class NavBar extends Component {
  static propTypes = {};

  render() {
    return (<div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top hello dank">
        
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categories
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/">Technology</a>
          <a className="dropdown-item" href="/">Science</a>
          <a className="dropdown-item" href="/">Sports</a>
          <a className="dropdown-item" href="/">Entertainment</a>
          <a className="dropdown-item" href="/">Finance</a>
        </div>
        </li>
            
            
        </ul>
        <img className="dank2" src='./newsdoor.png'/>
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
  </nav></div>);
  }
}


