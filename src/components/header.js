import * as style from "../components/css/navbar.module.scss"
import Logo from "../images/matthewlogo.png"
import scrollTo from "gatsby-plugin-smoothscroll"

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
            <button
              className={style.logoContainer}
              onKeyDown={() => scrollTo("#landing")}
              onClick={() => scrollTo("#landing")}
            >
              <img src={Logo} alt="logo" className={style.logo}></img>
            </button>

            <ul className={style.navList}>
              <li>
                <button
                  className={style.navLinks}
                  onClick={() => scrollTo("#landing")}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className={style.navLinks}
                  onClick={() => scrollTo("#about")}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className={style.navLinks}
                  onClick={() => scrollTo("#work")}
                >
                  Work
                </button>
              </li>
              <li>
                <button
                  className={style.navLinks}
                  onClick={() => scrollTo("#contact")}
                >
                  Contact
                </button>
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
                        <button
                          className={style.navLinks}
                          onClick={() => {
                            scrollTo("#landing")
                            this.handleClick()
                          }}
                        >
                          Home
                        </button>
                      </li>
                      <li>
                        <button
                          className={style.navLinks}
                          onClick={() => {
                            scrollTo("#about")
                            this.handleClick()
                          }}
                        >
                          About
                        </button>
                      </li>
                      <li>
                        <button
                          className={style.navLinks}
                          onClick={() => {
                            scrollTo("#work")
                            this.handleClick()
                          }}
                        >
                          Work
                        </button>
                      </li>
                      <li>
                        <button
                          className={style.navLinks}
                          onClick={() => {
                            scrollTo("#contact")
                            this.handleClick()
                          }}
                        >
                          Contact
                        </button>
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
 *  <a href="#work" onClick={this.handleClick}>
                          Work
                        </a>
 * 
 * 
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
