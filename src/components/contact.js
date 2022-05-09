import React, { Component } from "react"
import * as style from "../components/css/contact.module.scss"

export default class contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: false,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log("helloo world!")
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }))
  }

  render() {
    return (
      <div className={style.outContact}>
        <div className={style.contactform}>
          <div>
            <h1 className={style.contactTitle}>Contact Me</h1>
            <div>
              <p className={style.infoDescription}>
                I'm currently based in Auckland, New Zealand.
              </p>
              <p className={style.infoDescription}>
                I am currently searching for the next step in my programming
                career. If you want to discuss all things web development or job
                opportunities, please leave me a message and I will get back to
                you as soon as I can.
              </p>
            </div>
          </div>
          <div>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/success"
            >
              <input
                type="hidden"
                name="form-name"
                value="contact"
                aria-label="contactlabel"
              />
              <p className={style.hidden}>
                <label>
                  Don’t fill this out if you're human:
                  <input name="bot-field" aria-label="botlabel" />
                </label>
              </p>
              <div className="form-group">
                <label className={style.labelContainer}>
                  <input
                    name="name"
                    placeholder="Name"
                    type="text"
                    aria-label="namelabel"
                    className={style.input}
                    required
                  ></input>
                </label>
              </div>
              <div className="form-group">
                <label>
                  <input
                    placeholder="Email"
                    name="email"
                    type="email"
                    aria-label="emaillabel"
                    className={style.input}
                    required
                  ></input>
                </label>
              </div>
              <div className="form-group">
                <label>
                  <input
                    name="phone"
                    placeholder="Phone"
                    type="text"
                    aria-label="phonelabel"
                    className={style.input}
                    required
                  ></input>
                </label>
              </div>
              <div className="form-group">
                <label>
                  <textarea
                    name="message"
                    placeholder="Message"
                    aria-label="messagelabel"
                    className={style.inputMessage}
                    rows="7"
                    required
                  ></textarea>
                </label>
              </div>

              <div className={style.formButton}>
                <button type="submit" className={style.inputButton}>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
