import React from 'react'
import "../assets/css/contact.css"
import img from "../assets/images/banner-1.jpg"
import { Email, Facebook, FileDownload, GitHub, Instagram, Phone, Twitter, YouTube } from '@mui/icons-material'
const Contact = () => {
    return (
        <div className="contact-container">

            <div className="contact-container-content">
                <div className="contact-container-cotent-left">

                    <h3 className="contact-container-title">Contact</h3>
                    <h1 className="contact-container-title-desc">Let's build something great together</h1>
                    <div className="contact-container-cotent-left-top">
                    
                    </div>
                </div>
                <div className="contact-container-content-right">
                    <form action="" className="contact-container-content-right-form">
                        <p className="contact-container-content-right-form-label">username</p>
                        <div className="contact-container-content-right-form-input-container">
                            <input type="text" className="contact-container-content-right-form-input" />
                        </div>
                        <p className="contact-container-content-right-form-label">email</p>
                        <div className="contact-container-content-right-form-input-container">
                            <input type="text" className="contact-container-content-right-form-input" />
                        </div>
                        <p className="contact-container-content-right-form-label">subject</p>
                        <div className="contact-container-content-right-form-input-container area">
                            <textarea cols={4} className="contact-container-content-right-form-input " />
                        </div>
                        <button className="contact-container-right-form-button">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact