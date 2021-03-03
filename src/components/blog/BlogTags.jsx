import React from "react";
import { Link } from "react-router-dom";

const BlogTags = (props) => {
    const { data, className } = props;
    return (
        <div className={className}>
            <div className="tags">
                <span><strong>Tags: </strong></span>
                {data.map(item => (
                    <Link to={item.slug} className={"text-capitalize"}>{item.name}, </Link>
                ))}
            </div>
        </div>

    );
}
export default BlogTags;