import React, { Component } from "react"
import * as style from "../components/css/contact.module.scss"

export default class contact extends Component {
  render() {
    return (
      <div className={style.outContact}>
        <div className={style.contactform}>
          <div className={style.content}>
            <h1 className={style.contactTitle}>Lets get coffee</h1>
            <div className={style.contactContainer}>
              <p className={style.infoDescription}>
                I'm currently based in Dunedin, New Zealand. I happily work with
                clients globally through Digital Mates.
              </p>
              <p className={style.infoDescription}>
                Aside from directly engineering I also consult and offer
                technical guidance. It is important to ensure everyone involed
                with a project is pointing in the same direction especially if
                there are multiple external parties involved.
              </p>
            </div>
          </div>
          <div className={style.formContainer}>
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
                  <div>Name</div>
                  <input
                    name="name"
                    type="text"
                    aria-label="namelabel"
                    className={style.input}
                    required
                  ></input>
                </label>
              </div>
              <div className="form-group">
                <label>
                  Email
                  <input
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
                  Phone/Mobile
                  <input
                    name="phone"
                    type="text"
                    aria-label="phonelabel"
                    className={style.input}
                    required
                  ></input>
                </label>
              </div>
              <div className="form-group">
                <label>
                  Message
                  <textarea
                    name="message"
                    aria-label="messagelabel"
                    className={style.input}
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
