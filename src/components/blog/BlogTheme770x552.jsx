import React from "react";
import { Link } from "react-router-dom";
import { BLOG_IMG_URL } from "../../data/apiUrl";
const BlogTheme770x552 = (props) => {
  const { data } = props;
  return (
    <div className="single-post-wrap style-overlay">
      <div className="thumb">
        <img src={BLOG_IMG_URL + data.img_path} alt={data.title}  width="770px" />
        <Link className="tag-base tag-blue" to={`/cat-${data.category_slug}`}>{data.category}</Link>
      </div>
      <div className="details">
        <div className="post-meta-single">
          <p><i className="fa fa-clock-o" />{data.date}</p>
        </div>
        <h5 className="title">
          <Link to={'/blog-' + data.slug}>{data.title}</Link></h5>
      </div>
    </div>
  );
};

export default BlogTheme770x552;
