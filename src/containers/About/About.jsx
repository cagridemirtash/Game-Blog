import React from 'react'
import AboutUs from './Area/AboutUs';
import Team from './Area/Team';
import Breadcrumb from '../../components/theme/Breadcrumb';
import Container from '../../components/theme/Container';

const About = (props) => {
    return (
        <>
            <Breadcrumb data={[{ slug: "about-us", title: "About Us" }]} title={"About Us"} />
            <Container>
                <div className="col-sm-12">
                    <AboutUs />
                    <Team />
                </div>
            </Container>
        </>
    );
}
export default About;