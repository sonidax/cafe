import React from 'react';
import pourImg from '../assets/footer_pour_action_1769626990005.png';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-cta">
                    <h2>Save up to 50% <br /> or more on <br /> matcha powder</h2>
                    <p className="cta-text">Join our subscription for exclusive deals.</p>
                    <button className="btn-primary">Subscribe {`->`}</button>

                    <div className="footer-links">
                        <a href="mailto:matcha@gamil.com">matcha@gamil.com</a>
                        <p>+62 812 3456 7890</p>
                    </div>

                    <div className="footer-nav">
                        <a href="#">Matcha powder ↗</a>
                        <a href="#">Matcha starter kit ↗</a>
                        <a href="#">Matcha whisk tea ↗</a>
                        <a href="#">Matcha sole powder ↗</a>
                    </div>

                    <div className="footer-bottom">
                        <span>© 2026 MATON</span>
                        <a href="#">Privacy & policy</a>
                        <a href="#">Terms & conditions</a>
                    </div>
                </div>

                <div className="footer-visual">
                    <img src={pourImg} alt="Pouring Milk" className="footer-img" />

                </div>
            </div>
        </footer>
    )
}
