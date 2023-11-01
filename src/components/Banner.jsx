import React from 'react'
import "../assets/css/banner.css"
import img from "../assets/images/banner-1.jpg"
const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-text">
                <div className="banner-text-container">
                    <p className="bt-username">Hatim D. Makboul</p>
                    <h1 className="bt-title">Creative<br />Product <span>Designer</span></h1>
                    <p className="bt-username">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, illo necessitatibus voluptate neque possimus quibusdam asperiores. Eaque sed, quibusdam, ex in inventore.</p>
                    <button className="bt-button">Contact Me</button>
                </div>
            </div>
            <div className="banner-image">
                <img src={img} alt="" className='banner-image-actual' />
            </div>
        </div>
    )
}

export default Banner