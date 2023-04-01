import React, { useState, useRef } from "react"

import SubHeading from "../SubHeading/SubHeading"
import "./Newsletter.css"

const Newsletter = () => {
  const [subscribed, setSubscribed] = useState(false)
  const emailInputRef = useRef(null)

  function handleSubscribeClick() {
    const emailInput = emailInputRef.current
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailInput && emailInput.value && emailRegex.test(emailInput.value)) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 2000) // Set subscribed to false after 2 seconds
    } else {
      alert("Please provide a valid e-mail address.")
    }
  }

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss an update!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input
          type="email"
          placeholder="Enter your email address"
          ref={emailInputRef}
        />
        <button
          type="button"
          className="custom__button"
          onClick={handleSubscribeClick}
        >
          Subscribe
        </button>
      </div>
      {subscribed && (
        <p className="body__text subscribe">Successfully subscribed!</p>
      )}
    </div>
  )
}

export default Newsletter
