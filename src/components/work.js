import React, { Component } from "react"
import * as style from "../components/css/work.module.scss"
import { StaticImage } from "gatsby-plugin-image"

export default class work extends Component {
  render() {
    return (
      <div className={style.container}>
        <h2 className={style.title}>My Work</h2>

        <p className={style.description}>
          During my time as a technician, I had the opportunity to create a
          website for the company I worked for.
        </p>
        <p className={style.description}>
          Using GatsbyJS, I programmed a responsive website which is currently
          used by the business to bring in customers and describe the products
          they sell and support.
        </p>

        <div>
          <h3 className={style.tpptitle}>The POS People</h3>
          <a
            href="https://www.thepospeople.co.nz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage
              className={style.workimage}
              src="../images/tpp.png"
              alt="Matthew"
              formats={["AUTO", "WEBP"]}
            />
          </a>
        </div>
      </div>
    )
  }
}
