import React from "react";
import { Link } from "react-router-dom";
import { COMMENT_IMG_URL } from "../../data/apiUrl";

const CommentUserCard = (props) => {
    const { data, className } = props;
    const classNameMedia = "media " + className;
    return (
        <div className={classNameMedia}>
            <Link to={'/author-'+data.author_slug}>
                <img src={COMMENT_IMG_URL + data.img_path} alt={data.author} />
            </Link>
            <div className="media-body">
                <h5><Link to={'/author-'+data.author_slug}>{data.author}</Link></h5>
                <span className="date">{data.date}</span>
                <p>{data.comment}</p>
                <a href="#">Reply <i className="la la-arrow-right" /></a>
            </div>
        </div>
    );
}
export default CommentUserCard;