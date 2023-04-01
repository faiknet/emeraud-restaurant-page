import React from "react"

import { SubHeading } from "../../components"
import { images } from "../../constants"

function FindUs() {
  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Find us
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">19 Av. Mirabeau, 06000 Nice, France</p>
        </div>
        <div>
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.076711092226!2d7.264224315775353!3d43.70895485684096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cddaaa1475ff99%3A0x1c4c08bbd335b632!2s19%20Av.%20Mirabeau%2C%2006000%20Nice%2C%20France!5e0!3m2!1sen!2sca!4v1680307539258!5m2!1sen!2sca"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <a
          href="https://goo.gl/maps/uyR3RuP38C9jXByTA"
          target="blank_"
          rel="noopener noreferrer"
        >
          <button className="custom__button" style={{ marginTop: "2rem" }}>
            Visit Us
          </button>
        </a>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="Find us" />
      </div>
    </div>
  )
}

export default FindUs
