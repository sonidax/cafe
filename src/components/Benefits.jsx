import React from 'react';
import whiskImg from '../assets/benefit_whisk_close_up_1769626843098.png';
import lifestyleImg from '../assets/benefit_lifestyle_drinking_1769626862759.png';

export default function Benefits() {
    return (
        <section className="benefits-section" id="testimonials">
            <div className="container">
                <div className="benefits-intro">
                    <h2>Experience <br /> Wellness with <br /> Every Sip</h2>

                    <div className="benefits-gallery">
                        <div className="benefit-card">
                            <img src={whiskImg} alt="Rich Antioxidants" />
                        </div>
                        <div className="benefit-card">
                            <img src={lifestyleImg} alt="Relax and Focus" />
                        </div>
                    </div>
                </div>

                <div className="benefits-features">
                    <div className="feature-item">
                        <div className="feature-icon icon-color"></div>
                        <h4>Rich Flavor & Vibrant Color</h4>
                        <p>Perfectly balanced umami notes with a bright green hue.</p>
                    </div>

                    <div className="feature-item">
                        <div className="feature-icon icon-authentic"></div>
                        <h4>Authentic Japanese Matcha</h4>
                        <p>100% ceremonial grade matcha with rich umami flavor and no bitterness.</p>
                    </div>

                    <div className="feature-item">
                        <div className="feature-icon icon-health"></div>
                        <h4>Health & Sustainability</h4>
                        <p>Packed with antioxidants, produced using eco-friendly practices.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
