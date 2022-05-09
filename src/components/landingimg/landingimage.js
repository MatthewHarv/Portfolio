import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"
import * as style from "../css/home.module.scss"
import Typer from "../typer"

export default function Cover() {
  const { placeholderImage123 } = useStaticQuery(
    graphql`
      query {
        placeholderImage123: file(relativePath: { eq: "bike.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              formats: [AUTO, AVIF]
              placeholder: BLURRED
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(placeholderImage123)

  return (
    <div>
      <BgImage image={pluginImage} className={style.cover}>
        <Typer></Typer>
      </BgImage>
    </div>
  )
}
