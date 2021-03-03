import React from 'react';
import BlogTheme270x200 from '../../../components/blog/BlogTheme270x200';
import Container from '../../../components/theme/Container';
import LoginForm from '../../../components/form/LoginForm';
import data from '../../../data/data.json'

const Banner = (props) => {
    return (
        <div className="newsletter-area bg-black pd-top-80  pd-bottom-50">
            <Container>
                <div className="col-xl-9 col-lg-8">
                    <div className="row">
                        {data.blog.map(item => (
                            <BlogTheme270x200 data={item} className={"col-xl-6 col-lg-12"} />
                        ))}
                    </div>

                </div>
                <div className="col-xl-3 col-lg-4">
                    <LoginForm />
                </div>
            </Container>
        </div>
    );
}
export default Banner;