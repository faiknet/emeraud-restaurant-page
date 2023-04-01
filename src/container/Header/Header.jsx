import React from "react"
import { SubHeading } from "../../components"

import { images } from "../../constants"
import "./Header.css"

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Sophistication in every bite" />
      <h1 className="app__header-h1">Elegance In Dining</h1>
      <p className="p__opensans body__text" style={{ margin: "2rem 0" }}>
        We invite you to indulge in a culinary experience like no other. Our
        menu features a carefully curated selection of dishes made with the
        finest local and international ingredients, crafted by our talented
        chefs with precision and care.
      </p>
      <a href="#menu">
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
)

export default Header
