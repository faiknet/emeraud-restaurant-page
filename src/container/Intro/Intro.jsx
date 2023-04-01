import React, { useState } from "react"
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs"
import { meal } from "../../constants"

import "./Intro.css"

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = React.useRef()

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)

    if (playVideo) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div
        className={
          playVideo
            ? "app__video-overlay app__video-overlay--pause"
            : "app__video-overlay app__video-overlay--play"
        }
        onClick={handleVideo}
      >
        {playVideo ? (
          <BsPauseFill color="#fff" fontSize={30} className="pause-icon" />
        ) : (
          <BsFillPlayFill color="#fff" fontSize={30} className="play-icon" />
        )}
      </div>
    </div>
  )
}

export default Intro
