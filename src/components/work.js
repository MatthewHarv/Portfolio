import React, { Component } from "react"
import * as style from "../components/css/work.module.scss"
import { StaticImage } from "gatsby-plugin-image"

export default class work extends Component {
  render() {
    return (
      <div className={style.container}>
        <h2 className={style.title}>My Work</h2>
        <div className={style.descriptionContainer}>
          <div>
            <h3>The POS People</h3>
            <StaticImage
              className={style.workimage}
              src="../images/tpp.png"
              alt="Matthew"
              formats={["AUTO", "WEBP"]}
            />
          </div>
          <div>
            <h3>Town Mouse</h3>
            <StaticImage
              className={style.workimage}
              src="../images/town.png"
              alt="Matthew"
              formats={["AUTO", "WEBP"]}
            />
          </div>
          <div>
            <h3>Github</h3>
            <StaticImage
              className={style.workimage}
              src="../images/github.png"
              alt="Matthew"
              formats={["AUTO", "WEBP"]}
            />
          </div>
        </div>
      </div>
    )
  }
}
