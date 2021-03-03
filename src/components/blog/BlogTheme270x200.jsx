import React from "react";
import { Link } from "react-router-dom";
import { BLOG_IMG_URL } from "../../data/apiUrl";

const BlogTheme270x200 = (props) => {
  const { data, className } = props;
  return (
    <div className={className}>
      <div className="single-post-list-wrap style-two style-white text-left">

        <Link to={'/blog-' + data.slug}>
          <div className="media">
            <div className="media-left">
              <img src={BLOG_IMG_URL + data.img_path} alt={data.title} width="270px" />
            </div>
            <div className="media-body align-self-center">
              <div className="details">
                <div className="post-meta-single">
                  <ul>
                    <li><Link className="tag-base tag-blue" to={'/cat-'+data.category_slug}>{data.category}</Link></li>
                    <li><i className="fa fa-clock-o"></i>{data.date}</li>
                  </ul></div>
                <h6 className="title mt-2">{data.title}</h6>
                <p>{data.excerpt}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogTheme270x200;
