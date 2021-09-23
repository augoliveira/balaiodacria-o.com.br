import React from 'react';
import Head from 'next/head';

const Layout = (props) => {
    return(
        <div>
            <div className="page-wrapper">

            {props.children}

            </div>

        </div>
    )
}
export default Layout;