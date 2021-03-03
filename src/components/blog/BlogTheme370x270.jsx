import React from "react";
import { Link } from "react-router-dom";
import { BLOG_IMG_URL } from "../../data/apiUrl";

const BlogTheme370x270 = (props) => {
  const { data, className } = props;
  return (
    <div className={className}>
      <div className="single-post-wrap">
        <div className="thumb">
          <img src={BLOG_IMG_URL + data.img_path} alt={data.title} width="370px" />
          <Link className="tag-base tag-red" to={`/${data.category_slug}`}>
            {data.category}
          </Link>
        </div>
        <div className="details">
          <div className="post-meta-single">
            <ul>
              <li>
                <i className="fa fa-clock-o" />
                {data.date}
              </li>
              <li>
                <Link to={'author-' + data.author_slug}> <i className="fa fa-user" />
                  {data.author}</Link>
              </li>
            </ul>
          </div>
          <h6 className="title mt-2">
            <Link to={'/blog-' + data.slug}>{data.title}</Link>
          </h6>
          <p>{data.excerpt}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogTheme370x270;
