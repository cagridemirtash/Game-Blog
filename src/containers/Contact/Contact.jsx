import React from 'react'
import ContactForm from '../../components/form/ContactForm'
import Breadcrumb from '../../components/theme/Breadcrumb';
import Container from '../../components/theme/Container'

const Contact = (props) => {
    return (
        <div className={"bg-sky"}>
            <Breadcrumb data={[{ slug: "contact-us", title: "Contact" }]} title={"Contact"} />
            <Container className={"mt-4"}>
                <div className="col-md-6 mb-5">
                    <div className="section-title mt-5">
                        <h4 className="mb-0">Contact Information</h4>
                    </div>
                    <ul className="contact_info_list">
                        <li className={"mb-3"}><h3>Rabia Sönmez</h3>
                            <i className="fa fa-envelope-o mr-2"></i>
                            rabiasonmz@gmail.com
                            <br />
                            <i className="fa fa-telegram mr-2"></i>
                            @rabiasonmez
                        </li>
                        <li className={"mb-3"}><h3>Çağrı Demirtaş</h3>
                            <i className="fa fa-envelope-o mr-2"></i>
                            cagridemirtash@gmail.com
                            <br />
                            <i className="fa fa-telegram mr-2"></i>
                            @@cagrihd
                            </li>
                        <li className={"mb-3"}><h3>Emin BAŞBAYAN</h3>
                            <i className="fa fa-envelope-o mr-2"></i>
                            basbayanemin@gmail.com
                            <br />
                            <i className="fa fa-telegram mr-2"></i>
                            @eminbasbayan
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 mb-5"><ContactForm /></div>
            </Container>
        </div>
    );
}
export default Contact;