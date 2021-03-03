
import React from 'react';
import Footer from './Footer';
import Header from './Header';

/**
 * Default site layout component
 */
const Content = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default Content;