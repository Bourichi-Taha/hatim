import React from 'react'
import "../assets/css/ads-section.css"
import lines from "../assets/images/bg-red.png"
const AdsSection = () => {
  return (
    <div className="ads-section">
        <img className='ads-section-img' src={lines} alt="" />
        <img className='ads-section-img right' src={lines} alt="" />
        <div>Let's work <span>Together</span></div>
    </div>
  )
}

export default AdsSection