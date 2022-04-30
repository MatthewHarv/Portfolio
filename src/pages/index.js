import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../components/css/home.module.scss"
import Landingimage from "../components/landingimg/landingimage"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div id="landing">
      <Landingimage></Landingimage>
    </div>
    <div className={style.about} id="about">
      <h1>About Me</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        ultricies tempor purus, vel eleifend est suscipit sed. In tincidunt
        malesuada mauris ac varius. Maecenas consequat ullamcorper erat, eget
        viverra nunc sagittis vel. Quisque ac varius velit, at pharetra mauris.
        Donec quis augue nisl. Fusce pretium neque vitae pulvinar placerat.
        Donec porta, dui sit amet dictum feugiat, arcu ligula consequat libero,
        at consequat justo lorem sed tortor. Suspendisse potenti. Proin et orci
        accumsan, dignissim odio ac, cursus tellus. Nam tempus diam ac mi
        gravida, et posuere elit consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        ultricies tempor purus, vel eleifend est suscipit sed. In tincidunt
        malesuada mauris ac varius. Maecenas consequat ullamcorper erat, eget
        viverra nunc sagittis vel. Quisque ac varius velit, at pharetra mauris.
        Donec quis augue nisl. Fusce pretium neque vitae pulvinar placerat.
        Donec porta, dui sit amet dictum feugiat, arcu ligula consequat libero,
        at consequat justo lorem sed tortor. Suspendisse potenti. Proin et orci
        accumsan, dignissim odio ac, cursus tellus. Nam tempus diam ac mi
        gravida, et posuere elit consectetur.
      </p>
    </div>
    <div className={style.work} id="work">
      <h1>My WOrk</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        ultricies tempor purus, vel eleifend est suscipit sed. In tincidunt
        malesuada mauris ac varius. Maecenas consequat ullamcorper erat, eget
        viverra nunc sagittis vel. Quisque ac varius velit, at pharetra mauris.
        Donec quis augue nisl. Fusce pretium neque vitae pulvinar placerat.
        Donec porta, dui sit amet dictum feugiat, arcu ligula consequat libero,
        at consequat justo lorem sed tortor. Suspendisse potenti. Proin et orci
        accumsan, dignissim odio ac, cursus tellus. Nam tempus diam ac mi
        gravida, et posuere elit consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        ultricies tempor purus, vel eleifend est suscipit sed. In tincidunt
        malesuada mauris ac varius. Maecenas consequat ullamcorper erat, eget
        viverra nunc sagittis vel. Quisque ac varius velit, at pharetra mauris.
        Donec quis augue nisl. Fusce pretium neque vitae pulvinar placerat.
        Donec porta, dui sit amet dictum feugiat, arcu ligula consequat libero,
        at consequat justo lorem sed tortor. Suspendisse potenti. Proin et orci
        accumsan, dignissim odio ac, cursus tellus. Nam tempus diam ac mi
        gravida, et posuere elit consectetur.
      </p>
    </div>
    <div className={style.contact} id="contact">
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        ultricies tempor purus, vel eleifend est suscipit sed. In tincidunt
        malesuada mauris ac varius. Maecenas consequat ullamcorper erat, eget
        viverra nunc sagittis vel. Quisque ac varius velit, at pharetra mauris.
        Donec quis augue nisl. Fusce pretium neque vitae pulvinar placerat.
        Donec porta, dui sit amet dictum feugiat, arcu ligula consequat libero,
        at consequat justo lorem sed tortor. Suspendisse potenti. Proin et orci
        accumsan, dignissim odio ac, cursus tellus. Nam tempus diam ac mi
        gravida, et posuere elit consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        ultricies tempor purus, vel eleifend est suscipit sed. In tincidunt
        malesuada mauris ac varius. Maecenas consequat ullamcorper erat, eget
        viverra nunc sagittis vel. Quisque ac varius velit, at pharetra mauris.
        Donec quis augue nisl. Fusce pretium neque vitae pulvinar placerat.
        Donec porta, dui sit amet dictum feugiat, arcu ligula consequat libero,
        at consequat justo lorem sed tortor. Suspendisse potenti. Proin et orci
        accumsan, dignissim odio ac, cursus tellus. Nam tempus diam ac mi
        gravida, et posuere elit consectetur.
      </p>
      <label>
        <input type="checkbox" />
        <span>Red</span>
      </label>
    </div>
    <p></p>
  </Layout>
)

export default IndexPage

/*

import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"
 //  <Link to="/page-2/">Go to page 2</Link> <br />
*/
