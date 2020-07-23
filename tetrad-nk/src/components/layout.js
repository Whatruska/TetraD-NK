/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import '../styles/main.scss';

import Header from "./header";
import SEO from "./seo";
import Footer from "./footer";

const Layout = ({ children, title }) => {
  return (
    <>
      <SEO title={title}/>
      <Header/>
      <div>
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  )
}
export default Layout
