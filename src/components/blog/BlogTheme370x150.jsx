import React from "react";
import { Link } from "react-router-dom";
import { BLOG_IMG_URL } from "../../data/apiUrl";

const BlogTheme370x150 = (props) => {
  const { data } = props;
  return (
    <div className="single-post-wrap style-overlay">
      <div className="thumb">
        <img src={BLOG_IMG_URL + data.img_path} alt={data.title}  width="370px" />
      </div>
      <div className="details">
        <div className="post-meta-single">
          <p><i className="fa fa-clock-o" />{data.date}</p>
        </div>
        <h6 className="title"><Link to={data.slug}>{data.title}</Link></h6>
      </div>
    </div>
  );
};

export default BlogTheme370x150;
