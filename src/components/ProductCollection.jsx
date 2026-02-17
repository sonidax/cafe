import React from 'react';
import tinImg from '../assets/product_tin_canister_1769626928619.png';
import whiskImg from '../assets/product_whisk_solo_1769626942849.png';
import mugImg from '../assets/product_mug_solo_1769626958801.png';
import teapotImg from '../assets/product_teapot_solo_1769626973788.png';

export default function ProductCollection() {
    return (
        <section className="product-collection" id="products">
            <div className="container">
                <h2 className="section-title text-center">Discover the World <br /> of Matcha</h2>

                <div className="collection-grid-top">
                    {/* Left Stack */}
                    <div className="collection-stack">
                        <div className="mini-card">
                            <div className="mini-card-info">
                                <h4>Culinary Grade</h4>
                                <p>Delicious taste for smoothies.</p>
                                <span className="price">$18</span>
                            </div>
                            <div className="mini-card-img-placeholder"></div>
                        </div>
                        <div className="mini-card">
                            <div className="mini-card-info">
                                <h4>Seasonal Variant</h4>
                                <p>Premium mild notes.</p>
                                <span className="price">$48</span>
                            </div>
                            <div className="mini-card-img-placeholder" style={{ background: '#D4A017' }}></div>
                        </div>
                    </div>

                    {/* Right Feature */}
                    <div className="collection-feature">
                        <div className="feature-info">
                            <span className="jp-label">儀式用抹茶</span>
                            <h3>Ceremonial <br /> Grade Matcha</h3>
                            <p>Flavor, antioxidants, sourced directly from Japan.</p>
                            <span className="price-large">$32 <span className="unit">/30 gr</span></span>
                        </div>
                        <div className="feature-img-wrapper">
                            <img src={tinImg} alt="Ceremonial Matcha Tin" />
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="collection-row">
                    <div className="product-card-small">
                        <h4>Bamboo Whisk</h4>
                        <img src={whiskImg} alt="Whisk" />
                        <span className="price">$15</span>
                    </div>
                    <div className="product-card-small">
                        <h4>Matcha Mug</h4>
                        <img src={mugImg} alt="Mug" />
                        <span className="price">$30</span>
                    </div>
                    <div className="product-card-small">
                        <h4>Matcha Tea Pot</h4>
                        <img src={teapotImg} alt="Teapot" />
                        <span className="price">$55</span>
                    </div>
                </div>

                <div className="text-center" style={{ marginTop: '60px' }}>
                    <button className="btn-primary">My Products</button>
                </div>
            </div>
        </section>
    )
}
