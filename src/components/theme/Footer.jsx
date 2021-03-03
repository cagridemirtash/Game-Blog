import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogTheme100x85 from '../blog/BlogTheme100x85';
import data from '../../data/data.json'

const Footer = (props) => {

    useEffect(() => {
        const $ = window.$;
        let publicUrl = process.env.PUBLIC_URL + '/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);

        var bodyOvrelay = $('#body-overlay');
        var searchPopup = $('#td-search-popup');

        $(document).on('click', '#body-overlay', function (e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click', '.search', function (e) {
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });
    }, [])




    let publicUrl = process.env.PUBLIC_URL + '/'
    let imgattr = "Footer logo"

    return (
        <div className="footer-area bg-black pd-top-95">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="widget">
                            <h5 className="widget-title">ABOUT US</h5>
                            <div className="widget_about">
                                <p>
                                    We offer a platform where players can gather together, share and share tips about the games. At the same time, we will have a section where we can list the safest games with the feedback we will receive from the players through the questionnaire.</p>
                                <ul className="social-area social-area-2 mt-4">
                                    <li><a className="facebook-icon" href="https://www.facebook.com/"><i className="fa fa-facebook" /></a></li>
                                    <li><a className="twitter-icon" href="https://www.twitter.com/"><i className="fa fa-twitter" /></a></li>
                                    <li><a className="youtube-icon" href="https://www.youtube.com/"><i className="fa fa-youtube-play" /></a></li>
                                    <li><a className="instagram-icon" href="https://www.instagram.com/"><i className="fa fa-instagram" /></a></li>
                                    <li><a className="google-icon" href="https://www.google.com/"><i className="fa fa-google-plus" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="widget widget_tag_cloud">
                            <h5 className="widget-title">TAGS</h5>
                            <div className="tagcloud go-top">
                                {data.category.map(item => (
                                    <Link to={item.slug}>{item.name}</Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="widget">
                            <h5 className="widget-title">CONTACTS</h5>
                            <ul className="contact_info_list">
                                <li><i className="fa fa-envelope-o" />
                                Rabia Sönmez<br />
                                rabiasonmz@gmail.com</li>
                                <li><i className="fa fa-envelope-o" />
                                Çağrı Demirtaş<br />
                                cagridemirtash@gmail.com</li>
                                <li><i className="fa fa-envelope-o" />
                                Emin BAŞBAYAN<br />
                                basbayanemin@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 go-top">
                        <div className="widget widget_recent_post">
                            <h5 className="widget-title">POPULAR BLOGS</h5>
                            {data.blog3.map((item, index) => (
                                index < 3 &&
                                <BlogTheme100x85 className="style-white" data={item} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer-bottom text-center">
                    {/* <ul className="widget_nav_menu go-top">
                        <li><Link to="/autho">Author</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/cat-page">Tech News</Link></li>
                        <li><Link to="/cat-fashion">Fashion</Link></li>
                    </ul> */}
                    <p>Copyright ©2020 GamersCo</p>
                </div>
            </div>
        </div>

    )
}


export default Footer;