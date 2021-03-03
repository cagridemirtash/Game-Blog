import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/data.json';
import { IMG_URL } from "../../data/apiUrl";

const Header = (props) => {

  return (
    <div className="navbar-area navbar-area-2">
      {/* topbar end*/}
      <div className="topbar-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-7 align-self-center">
              <ul className="social-area">
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-youtube-play" /></a></li>
                <li><a href="#"><i className="fa fa-skype" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-5 text-md-right text-center">
              <div className="topbar-right">
                <div className="topbar-menu text-md-right text-center">
                  <ul>
                    <li><Link to={"test"}>Sign Up</Link></li>
                    <li><Link to={"test"}>My Account</Link></li>
                    <li><Link to={"test"}>My Blogs</Link></li>
                    <li><Link to={"test"}>Comments</Link></li>
                    <li><Link to={"test"}>Add Blog</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* topbar end*/}
      {/* navbar start */}
      <nav className="navbar navbar-expand-lg">
        <div className="container nav-container">
          <div className="responsive-mobile-menu">
            <div className="logo d-block mr-5">
              <Link className="main-logo" to="/"><img src={IMG_URL + "assets/img/logo-2.png"} alt="img" /></Link>
            </div>
            <button className="menu toggle-btn d-block d-lg-none" data-target="#miralax_main_menu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>
          <div className="nav-right-part nav-right-part-mobile">
            <a className="search header-search" href="#"><i className="fa fa-search" /></a>
          </div>
          <div className="collapse navbar-collapse" id="miralax_main_menu">
            <ul className="navbar-nav menu-open">
              <li className="">
                <Link to="/">Home</Link>
              </li>
              <li className="menu-item-has-children current-menu-item">
                <Link to="#">Category</Link>
                <ul className="sub-menu">
                  {data.category.map((item) => (
                    <li><Link to={'cat-'+item.slug}>{item.name}</Link></li>
                  ))}
                </ul>
              </li>
              <li className="">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right-part nav-right-part-desktop position-relative">
            <form action="" className="search-form">
              <div className="form-group mb-0">
                <input className="form-control" placeholder="Search....." />
              </div>
              <button type="submit" className="submit-btn"><i className="fa fa-search"></i></button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}


export default Header