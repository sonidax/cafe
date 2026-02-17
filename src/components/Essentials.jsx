import React from 'react';
import latteImg from '../assets/product_latte_mix_1769626881119.png';
import cakeImg from '../assets/product_matcha_cake_1769626899483.png';

export default function Essentials() {
    return (
        <section className="essentials-section" id="essentials">
            <div className="container">
                <h2 className="section-title text-center">Matcha Pairing <br /> Essentials</h2>

                <div className="essentials-grid">
                    <div className="essential-card">
                        <div className="essential-info">
                            <h3>Matcha Latte Mix</h3>
                            <p>Pre-mixed latte powder with perfect sweetness.</p>
                        </div>
                        <div className="essential-img-wrapper">
                            <img src={latteImg} alt="Matcha Latte" />
                        </div>
                    </div>

                    <div className="essential-card">
                        <div className="essential-info">
                            <h3>Matcha Cake Powder</h3>
                            <p>Matcha for baking with vibrant green color.</p>
                        </div>
                        <div className="essential-img-wrapper">
                            <img src={cakeImg} alt="Matcha Cake" />
                        </div>
                    </div>
                </div>
                <div className="text-center" style={{ marginTop: '60px' }}>
                    <button className="btn-primary">My Products</button>
                </div>
            </div>
        </section>
    )
}
