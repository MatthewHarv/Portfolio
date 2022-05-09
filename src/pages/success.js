import * as React from "react"
import Seo from "../components/seo"
import * as style from "../components/css/success.module.scss"
import { Link } from "gatsby"

const IndexPage = () => (
  <div>
    <Seo title="Home" />
    <div className={style.outContact}>
      <div className={style.contactform}>
        <div>
          <h1 className={style.contactTitle}>Thank you</h1>
          <div>
            <p className={style.infoDescription}>
              Your email has been sent. I will get back to you when I can!
            </p>
          </div>
          <button className={style.returnContainer}>
            <Link className={style.returnText} to="/">
              Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage

/*

import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"
 //  <Link to="/page-2/">Go to page 2</Link> <br />
*/
