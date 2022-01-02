import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import NewAccount from '../../pages/NewAccount'


function Header(){


    return(
        <header className="header">
        <nav className="navbar bg-primary nav-1 ">
         <div className="container-fluid justify-content-end">
              <div className="site-header-top">
                 <a href="#">Log in</a> | <a href="#">Create Account</a>
              </div>
        </div>
        </nav>
        <div  className="nav-2">
        <div className="container-fluid">
          <div className="row"> 
            <div className="col">
              <nav className="navbar navbar-expand-lg navbar-light position-static"> <a className="navbar-brand logo" href="index.html"> <h3>TEAM POWER HOUSE</h3> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                 <ul className="navbar-nav ml-auto mr-auto">
                  <li className="nav-item"> <Link className="nav-link" to="/">HOME</Link> </li>
                  <li className="nav-item"> <Link className="nav-link" to="/">ABOUT</Link> </li>
                  <li className="nav-item"> <Link className="nav-link" to="/">CHALLANGE</Link> </li>
                  <li className="nav-item"> <Link className="nav-link" to="/">MY EBOOKS</Link> </li>
                  <li className="nav-item"> <Link className="nav-link" to="/">CONTACT</Link> </li>
                 </ul>
                </div>
                <div className="right-nav align-items-center d-flex justify-content-end">
                  <a className="mr-1 mr-sm-3" href="#"><i className="lab la-facebook"></i></a> 
                  <a className="mr-3 d-none d-sm-inline" href="#"><i className="lab la-twitter-square"></i></a>
                  <a className="mr-1 mr-sm-3" href="#"><i className="lab la-youtube"></i></a> 
                  <a className="mr-3 d-none d-sm-inline" href="#"><i className="lab la-instagram"></i></a>
              </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
     
    );
}


export default Header;