
import React from "react";
import { Link } from "react-router-dom";

const BlogShare = (props) => {
    const { data, className } = props;
    return (
        <div className={className}>
            <div className="blog-share">
                <span><strong>Share: </strong></span>
                <ul className="social-area social-area-2 d-inline">
                    <li><a className="facebook-icon" href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a className="twitter-icon" href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a className="youtube-icon" href="#"><i className="fa fa-youtube-play" /></a></li>
                    <li><a className="instagram-icon" href="#"><i className="fa fa-instagram" /></a></li>
                    <li><a className="google-icon" href="#"><i className="fa fa-google-plus" /></a></li>
                </ul>
            </div>
        </div>
    )
}
export default BlogShare;