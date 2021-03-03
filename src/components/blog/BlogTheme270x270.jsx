import React from "react";
import { Link } from "react-router-dom";
import { BLOG_IMG_URL } from "../../data/apiUrl";
const BlogTheme270x270 = (props) => {
  const { data } = props;
  return (
    <div className="single-post-list-wrap style-two text-left">
      <Link to={'/blog-' + data.slug}>
        <div className="media">
          <div className="media-left">
            <img src={BLOG_IMG_URL + data.img_path} alt={data.title} width="270px" />
          </div>
          <div className="media-body align-self-center">
            <div className="details">
              <div className="post-meta-single">
                <ul>
                  <li>
                    <Link to={`/cat-${data.category_slug}`} className="tag-base tag-blue">
                      {data.category}
                    </Link>
                  </li>
                </ul>
              </div>
              <h6 className="title mt-2">
                {data.title}
              </h6>
              <div className="post-meta-single pt-2 pb-2">
                <ul>
                  <li>by <Link to={'author-' + data.author_slug}>{data.author}</Link></li>
                <li>{data.date}</li>
                </ul>
            </div>
            <p>
              {data.excerpt}
            </p>
          </div>
        </div>
        </div>
      </Link>
    </div >
  );
};

export default BlogTheme270x270;
