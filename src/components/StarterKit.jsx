import React from 'react';
import starterKitImg from '../assets/starter_kit_combo_1769626807532.png';

export default function StarterKit() {
    return (
        <section className="starter-kit" id="starter-kit">
            <div className="container starter-grid">
                <div className="starter-img-col">
                    <img src={starterKitImg} alt="Matcha Starter Kit" className="starter-main-img" />
                    <div className="price-tag-floating">
                        <span className="currency">$</span>
                        <span className="value">25</span>
                    </div>
                </div>

                <div className="starter-info-col">
                    <h2>Matcha <br /> Starter Kits</h2>
                    <p>Begin your matcha journey with us. Every kit includes matcha, a whisk, and a guide.</p>
                    <button className="btn-primary">Get it for just $25</button>
                </div>
            </div>
        </section>
    )
}
