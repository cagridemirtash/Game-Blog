import React from 'react';

const ContactForm = (props) => {
    const { className } = props;
    return (
        <div className="comment-form">
            <div className="section-title mb-0">
                <h4 className="mb-0">Leave A Message</h4>
            </div>
            <form className="contact-form-wrap">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="single-input-wrap input-group">
                            <input type="text" className="form-control" placeholder="Your Full Name" />
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fa fa-user" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="single-input-wrap input-group">
                            <input type="text" className="form-control" placeholder="Your Email" />
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fa fa-envelope" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="single-input-wrap input-group">
                            <input type="text" className="form-control" placeholder="Your Phone" />
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fa fa-phone" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="single-input-wrap input-group">
                            <input type="text" className="form-control" placeholder="Subject" />
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fa fa-file" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="single-input-wrap message input-group">
                            <textarea className="form-control" rows={4} name="note" placeholder="Write Message" defaultValue={""} />
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fa fa-pencil" /></div>
                            </div>
                        </div>
                        <div className="submit-area">
                            <button type="submit" className="btn btn-base">SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )

}

export default ContactForm;