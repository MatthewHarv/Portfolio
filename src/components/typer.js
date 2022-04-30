import React, { Component } from "react"
import * as Typed from "typed.js"
import * as style from "./css/home.module.scss"

export default class typer extends Component {
  componentDidMount() {
    var options = {
      strings: ["Developer", "Motorcyclist", "Technician"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
      backDelay: 1500,
      startDelay: 500,
    }

    new Typed("#landingText", options)
  }
  render() {
    return (
      <div>
        <h1 className={style.landingText}>
          Matthew the <span id="landingText"></span>
        </h1>
      </div>
    )
  }
}
