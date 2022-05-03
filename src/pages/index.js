import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Landingimage from "../components/landingimg/landingimage"
import About from "../components/about"
import Work from "../components/work"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div id="landing">
      <Landingimage></Landingimage>
    </div>
    <div id="about">
      <About></About>
    </div>
    <div id="work">
      <Work></Work>
    </div>
    <div id="contact">
      <Contact></Contact>
    </div>
  </Layout>
)

export default IndexPage

/*

import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"
 //  <Link to="/page-2/">Go to page 2</Link> <br />
*/
