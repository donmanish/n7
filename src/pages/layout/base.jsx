import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';

function Base({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Base;