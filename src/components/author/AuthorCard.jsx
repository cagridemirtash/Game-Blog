import React from "react";
import { IMG_URL } from "../../data/apiUrl";
const AuthorCard = (props) => {
    const { data, className } = props;
    return (
        <div className={className}>
            <div className="media author-area style-two mb-5">
                <img src={IMG_URL + data.img_path} alt="img" />
                <div className="media-body align-self-center mt-4 mt-md-0">
                    <h4 className="mb-0 mt-4">{data.name}</h4>
                    <a className="tag-base tag-blue text-light mt-3 mb-3">{data.title}</a>
                    <strong className="mb-3 d-block">{data.mail}</strong>
                    <p>{data.profile}</p>
                    <ul className="social-area social-area-2 mt-4">
                        <li><a className="twitter-icon" href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a className="linkedin-icon" href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a className="github-icon" href="#"><i className="fa fa-github"></i></a></li><li>
                            <a className="youtube-icon" href="#"><i className="fa fa-youtube"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AuthorCard;
