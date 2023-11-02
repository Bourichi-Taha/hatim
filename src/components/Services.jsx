import React from 'react'
import "../assets/css/services.css"
const Services = () => {
    return (
        <div className="blog-container">
            <p className='blog-title'>services</p>
            <h1 className='blog-desc'>
                what i provide
            </h1>
            <div className="blog-content">
                <div className="blog-content-left">
                    <div className="blog-content-left-top">
                        <h3 className="blog-content-item-title">Packaging</h3>
                        <p className="blog-content-item-desc">Many people sign up for affiliate programs</p>
                    </div>
                    <div className="blog-content-left-bottom">
                        <h3 className="blog-content-item-title">3d Modeling</h3>
                        <p className="blog-content-item-desc">Many people sign up for affiliate programs</p>
                    </div>
                </div>
                <div className="blog-content-center">
                    <div className="blog-content-center-top">
                        <h3 className="blog-content-item-title">Learn More</h3>
                        <button className="blog-more-button">More Services</button>
                    </div>
                    <div className="blog-content-center-bottom">
                        <h3 className="blog-content-item-title">Product Design</h3>
                        <p className="blog-content-item-desc">Many people sign up for affiliate programs</p>
                    </div>
                </div>
                <div className="blog-content-right">
                    <div className="blog-content-right-top">
                        <h3 className="blog-content-item-title">Digital Marketing</h3>
                        <p className="blog-content-item-desc">Many people sign up for affiliate programs</p>
                    </div>
                    <div className="blog-content-right-bottom">
                        <h3 className="blog-content-item-title">Consulting</h3>
                        <p className="blog-content-item-desc">Many people sign up for affiliate programs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services