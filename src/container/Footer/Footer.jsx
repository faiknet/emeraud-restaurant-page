import React from "react"
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"

import { FooterOverlay, Newsletter } from "../../components"
import { images } from "../../constants"
import "./Footer.css"

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">19 Av. Mirabeau, 06000 Nice, France</p>
        <p className="p__opensans">
          <a href="+330557942751">+33 05.57.94.27.51</a>
        </p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.emeraude} alt="footer_logo" />
        <p className="p__opensans">
          &quot;Savor every moment, indulge in every bite, come to us as
          family.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          alt="Spoon"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans body__text">08:00 - 20:00 </p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans body__text">10:00 - 20:00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 Émeraude. All Rights reserved.</p>
    </div>
  </div>
)

export default Footer
