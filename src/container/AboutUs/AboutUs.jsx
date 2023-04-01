import React from "react"

import { images } from "../../constants"
import "./AboutUs.css"

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img"></img>
        <p className="p__opensans body__text">
          Émeraude was established with a passion for creating unforgettable
          culinary experiences. With a commitment to using only the finest and
          freshest ingredients, our menu is designed to offer a unique and
          elevated dining experience. Our team of talented chefs, servers, and
          sommeliers are dedicated to providing exceptional service and
          personalized attention to each and every guest. From the moment you
          step through our doors, you'll be transported to a world of luxurious
          indulgence and culinary excellence.
        </p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img"></img>
        <p className="p__opensans body__text">
          Since its founding in 1893 in the beautiful city of Nice, France,
          Émeraude has been a beacon of French culinary excellence and
          refinement. From the beginning, the restaurant set itself apart with
          its commitment to using only the freshest and highest-quality
          ingredients. Over the decades, Émeraude has become a cherished part of
          the local community. Today, we continue to uphold the traditions and
          values that have made Émeraude a beloved institution, and invite you
          to join us for an unforgettable dining experience.
        </p>
      </div>
    </div>
  </div>
)

export default AboutUs
