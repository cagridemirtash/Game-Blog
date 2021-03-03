import React from "react";
import { Link } from "react-router-dom";
import { BLOG_IMG_URL } from "../../data/apiUrl";

const BlogTheme1170x600 = (props) => {
  const { data } = props;
  return (
    <div className="single-post-wrap style-overlay">
      <Link to={'blog-' + data.slug}>
        <div className="thumb">
          <img src={BLOG_IMG_URL + data.img_path} alt={data.title} width="1170px" className={"max-600"} />
        </div>
        <div className="details pb-4">
          <div className="post-meta-single mb-2">
            <ul>
              <li><Link className="tag-base tag-blue" to={'/cat-'+data.category_slug}>{data.category}</Link></li>
              <li><p><i className="fa fa-clock-o" />{data.date}</p></li>
              <li><Link to={'author-' + data.author_slug}><i className="fa fa-user" />{data.author}</Link></li>
            </ul>
          </div>
          <h5 className="title mt-0">{data.title}</h5>
        </div>
      </Link>
    </div>
  );
};

export default BlogTheme1170x600;
