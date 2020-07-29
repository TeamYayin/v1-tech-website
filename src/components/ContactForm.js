import React from 'react'
export default function ContactForm() {
  return (
    <>
      <header>
        <h2>Get in touch</h2>
      </header>
      <div className="content">
        <p>
          <strong>Would you like</strong> to request our services, learn more
          about our products, or join our team, please submit the below form
          with associated information. You can also reach on social media.
        </p>
        <form method="post" action="https://formspree.io/mrgyrdgl">
          <div className="fields">
            <div className="field half">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="field half">
              <input
                type="email"
                name="_replyto"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="field">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="7"
              />
            </div>
          </div>
          <ul className="actions">
            <li>
              <input
                type="submit"
                value="Send Message"
                className="button primary"
              />
            </li>
          </ul>
          <input type="text" name="_gotcha" style={{ display: 'none' }} />
        </form>
      </div>
    </>
  )
}
