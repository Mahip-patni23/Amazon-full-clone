import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className="footer_info">
                <div className="footer_column">
                    <h3>Get to Know Us</h3>
                    <p>About US</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>Amazon Clone Cares</p>
                    <p>Gift A Smile</p>
                </div>

                <div className="footer_column">
                    <h3>Connect With US</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>

                <div className="footer_column">
                    <h3>Make Money With Us</h3>
                    <p>Sell on Amazon</p>
                    <p>Sell Under Amazon Accelerator</p>
                    <p>Amazon Global Selling</p>
                    <p>Become An Affiliate</p>
                    <p>Fulfilment By Amazon</p>
                    <p>Advertise Your Products</p>
                    <p>Amazon Pay on Merchants</p>
                </div>

                <div className="footer_column">
                    <h3>Let Us Help You</h3>
                    <p>COVID-19 and Amazon</p>
                    <p>Your Account</p>
                    <p>Returns Centre</p>
                    <p>100% Purchase Protection</p>
                    <p>Amazon App Download</p>
                    <p>Amazon Assistant Download</p>
                    <p>Help</p>
                </div>
            </div>
            <a href="/">
                <img className="footer_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" />
            </a>

            <div className="footer_countries">
                <a href="#">Australia</a>
                <a href="#">Brazil</a>
                <a href="#">Canada</a>
                <a href="#">China</a>
                <a href="#">France</a>
                <a href="#">Germany</a>
                <a href="#">Italy</a>
                <a href="#">Japan</a>
                <a href="#">Mexico</a>
                <a href="#">Netherlands</a>
                <a href="#">Polands</a>
                <a href="#">Singapore</a>
                <a href="#">Spain</a>
                <a href="#">Turkey</a>
                <a href="#">United Arab Emirates</a>
                <a href="#">United Kingdom</a>
                <a href="#">United States</a>
            </div>

            <div className="footer_ending">
                <a href="#">Conditions of USe & Sale</a>
                <a href="#">Privacy Notice</a>
                <a href="#">Interest-Based Ads</a>
                <p>1996-2021, Amazon-Clone.com, Inc. or its affiliates</p>
            </div>
        </div>
    )
}

export default Footer
