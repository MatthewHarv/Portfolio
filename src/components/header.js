import * as style from "../components/css/navbar.module.scss"
import Logo from "../images/matthewlogo.png"

import React, { Component } from "react"

export default class header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: false,
    }

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }))
  }

  render() {
    return (
      <header>
        <nav className={style.mainnav}>
          <div className={style.container}>
            <img src={Logo} alt="logo" className={style.logo}></img>
            <ul className={style.navList}>
              <li>
                <a href="#landing">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#work">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div>
              <input
                type="checkbox"
                className={style.toggler}
                onChange={this.handleClick}
                checked={this.state.isToggleOn}
              ></input>
              <div className={style.hamburger}>
                <div></div>
              </div>
              <div className={style.menu}>
                <div>
                  <div>
                    <ul>
                      <li>
                        <a href="#landing" onClick={this.handleClick}>
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="#about" onClick={this.handleClick}>
                          About
                        </a>
                      </li>
                      <li>
                        <a href="#work" onClick={this.handleClick}>
                          My Work
                        </a>
                      </li>
                      <li>
                        <a href="#contact" onClick={this.handleClick}>
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

/**
 * 
 *   <button onClick={this.handleClick}>
              {(() => {
                if (this.state.isToggleOn) {
                  return (
                    <div className={style.onbutton}>WOW THIS BUTTON IS ON</div>
                  )
                } else {
                  return (
                    <div className={style.offbutton}>This button is off</div>
                  )
                }
              })()}
            </button>
 */
