import React, { useRef } from 'react';
import MatchaSequence from './MatchaSequence';

export default function Hero() {
    return (
        <div className="hero-wrapper" id="hero">
            <section className="hero">
                <div className="hero-image-wrapper">
                    <div className="sequence-wrapper">
                        <MatchaSequence
                            folderPath="/ezgif-69332a4bdf6e1321-jpg/"
                            fileNamePrefix="ezgif-frame-"
                            fileNameSuffix=".jpg"
                            frameCount={15}
                        />
                    </div>
                </div>

                <div className="container hero-grid">
                    {/* Left Column */}
                    <div className="hero-col-left">
                        <div className="hero-badge">
                            <div className="badge-icon"></div> {/* Placeholder for small kit icon */}
                        </div>

                        <h1 className="hero-title">Best Matcha <br /> <span className="serif-italic">in Town</span></h1>

                        <div className="jp-text-col">

                            <h2><b>プレミアム抹茶</b></h2>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="scroll-indicator">
                        <span>SCROLL DOWN</span>
                        <div className="arrow-line"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}
