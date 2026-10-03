

import { useEffect, useRef } from 'react'

const Hero = () => {
    const videoRef = useRef(null)

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, []);


  return (
    <section id="hero">
      <div className="hero-copy">
        <h1>MacBook Pro</h1>
        <img src="/title (1).png" alt="MacBook Title." />
      </div>
        <video ref={videoRef} src="/hero (1).mp4" autoPlay loop muted playsInline />
      <button type="button">Buy</button>
      <p>From $1599 or $133.25/mo. for 12 mo.</p>
    </section>
  )
}

export default Hero