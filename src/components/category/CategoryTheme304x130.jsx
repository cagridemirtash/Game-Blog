import React from "react";
import { Link } from "react-router-dom";
import { CATEGORY_IMG_URL } from "../../data/apiUrl";

const CategoryTheme304x130 = (props) => {
  const { data, className } = props;
  return (
    <div className={className}>
      <div className="single-category-inner">
        <img src={CATEGORY_IMG_URL + data.img_path} alt={data.title} />
        <Link className="tag-base tag-blue" to={'cat-'+data.slug}>{data.name}</Link>
      </div>
    </div>
  );
};

export default CategoryTheme304x130;
