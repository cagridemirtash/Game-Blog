import React from "react";
import { Link } from "react-router-dom";
import { BLOG_IMG_URL } from "../../data/apiUrl";
const BlogTheme100x85 = (props) => {
  const { data, className } = props;
  let classNameDiv = "single-post-list-wrap " + className;
  return (
    <div className={classNameDiv}>
      <div className="media">
        <div className="media-left img-div-100x80">
          <img src={BLOG_IMG_URL + data.img_path} alt={data.title} />
        </div>
        <div className="media-body">
          <div className="details">
            <div className="post-meta-single">
              <ul>
                <li><i className="fa fa-clock-o" />{data.date}</li>
              </ul>
            </div>
            <h6 className="title">
              <Link to={'/blog-' + data.slug}>{data.title}</Link></h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTheme100x85;
