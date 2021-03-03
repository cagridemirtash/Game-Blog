import React from "react";
import { Link } from "react-router-dom";
import { BLOG_IMG_URL } from "../../data/apiUrl";

const BlogTheme1170x470 = (props) => {
  const { data } = props;
  return (
    <div className="single-blog-inner">
      <div className="thumb">
        <img src={BLOG_IMG_URL + data.img_path} alt={data.title} width="1170px" />
      </div>
      <div className="single-blog-details">
        <div className="meta">
          <span className="author">
            <Link to={'author-' + data.author_slug}><i className="fa fa-user" />
              {data.author}</Link>
          </span>
          <span className="date">
            <i className="fa fa-calendar" />
            {data.date}
          </span>
          <span className="comments">
            <i className="fa fa-comments" />
            Comments ({data.comment_count})
          </span>
        </div>
        <h3>
          <Link to={'/blog-' + data.slug}>
            {data.title}
          </Link>
        </h3>
        <p>
          {data.excerpt}
        </p>
        <Link to={'/blog-' + data.slug}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default BlogTheme1170x470;
