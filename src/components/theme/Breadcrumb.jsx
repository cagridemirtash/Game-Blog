import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
    const { data, title } = props;
    return (
        <section className="page-title-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-inner">
                            <h5 className="page-title">{title}</h5>
                            <ul className="page-list">
                                <li><Link to="/">Ana Sayfa</Link></li>
                                {data && data.map((item, index) => (
                                    (index !== (data.length-1)) ?
                                        <li><Link to={item.slug}>{item.title}</Link></li>
                                        :
                                        <li>{item.title}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Breadcrumb