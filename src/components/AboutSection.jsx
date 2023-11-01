import React from 'react'
import "../assets/css/about-section.css"
const AboutSection = () => {
    return (
        <div className="about-section">
            <div className="about-section-left">
                <div className="about-section-left-container">
                    <p className="asl-desc">about</p>
                    <h1 className="asl-title">
                        Global netwok of talents that is changing the way we look at the world.
                    </h1>
                </div>
            </div>
            <div className="about-section-right">
                <div className="about-section-right-container">
                    <p className="asl-desc-long">Minimalism is a design and lifestyle philosophy characterized by simplicity, clarity, and a focus on essentials. It emphasizes the idea that less is more and seeks to eliminate excess, clutter, and unnecessary elements. Minimalism can be applied to various aspects of life, including art, design, architecture, and lifestyle choices.</p>
                    <p className="asl-desc-long">Minimalism can be applied in various ways, depending on individual preferences and goals. It offers a deliberate contrast to consumerism and excess, emphasizing a simpler and more purposeful way of living, designing, and creating.</p>
                    <button className="asl-button">more</button>
                </div>
            </div>
        </div>
    )
}

export default AboutSection