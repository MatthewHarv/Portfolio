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
        <div className={style.workContainer}>
          <div>
            <a
              href="https://www.thepospeople.co.nz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className={style.tpptitle}>The POS People</h3>
              <StaticImage
                className={style.workimage}
                src="../images/tpp.jpg"
                alt="The POS People"
                formats={["AUTO", "WEBP"]}
              />
            </a>
          </div>
          <div>
            <a
              href="https://townmouse.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className={style.tpptitle}>Town Mouse</h3>
              <StaticImage
                className={style.workimage}
                src="../images/town.jpg"
                alt="Town Mouse"
                formats={["AUTO", "WEBP"]}
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
