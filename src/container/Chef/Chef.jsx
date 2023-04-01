import React from "react"

import { SubHeading } from "../../components"
import { images } from "../../constants"
import "./Chef.css"

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="The chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">Belief In Our Craft</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
        </div>
        <p className="p__opensans body__text">
          As the head chef at Émeraude, I believe that exceptional dining
          experiences are built on a foundation of the finest, sustainable
          ingredients sourced from local and international suppliers. My team of
          talented chefs and I work tirelessly to craft unique dishes that
          showcase the natural flavors and textures of these ingredients, while
          also incorporating contemporary techniques and global influences. I
          invite you to choose Émeraude for an unforgettable dining experience
          that embodies the essence of French cuisine and hospitality.
        </p>

        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="Signature" />
        </div>
      </div>
    </div>
  </div>
)

export default Chef
