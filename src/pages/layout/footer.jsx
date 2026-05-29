import React from 'react';
import coreBankingIcon from '../../assets/images/footer-logo.png';
import arrowRightIcon from '../../assets/images/arrow-right.png';

function Footer() {
    return (
        <>
            <footer className="footer-canvas bg-dark-footer pt-5 pb-4 text-start">
                <div className="container pt-lg-4">
                    <div className="row gy-5">

                        {/* Left Column: Giant Branding Logo Matrix */}
                        <div className="col-12 col-lg-4 d-flex align-items-start justify-content-start">
                            <div className="footer-brand-logo-wrap">
                                <img src={coreBankingIcon} alt='footer-logo' className='footer-logo'/>
                            </div>
                        </div>

                        {/* Right Side Columns: Dynamic Multi-Row Information Blocks */}
                        <div className="col-12 col-lg-8">

                            {/* SUB-ROW 1: Corporate Office Address Headers */}
                            <div className="row gy-4 mb-5">
                                <div className="col-12 col-sm-4">
                                    <h6 className="office-header text-white mb-2">London</h6>
                                    <p className="office-address-text">
                                        Linktia Infosystems Ltd – CB7,
                                        26 Main Road Sundridge, TN14 6EP,
                                        England, United Kingdom.
                                    </p>
                                </div>
                                <div className="col-12 col-sm-4">
                                    <h6 className="office-header text-white mb-2">Dubai</h6>
                                    <p className="office-address-text">
                                        Linktia Infosystems Ltd – CB7,
                                        Jumeirah Business Center 5, Cluster W,
                                        Jumeirah Lakes Towers, Dubai, United Arab Emirates.
                                    </p>
                                </div>
                                <div className="col-12 col-sm-4">
                                    <h6 className="office-header text-white mb-2">London</h6>
                                    <p className="office-address-text">
                                        Linktia Infosystems Ltd – CB7,
                                        Nirmal, Anand Nagar, Suncity Road,
                                        Pune, Maharashtra, 411041, India.
                                    </p>
                                </div>
                            </div>

                            {/* SUB-ROW 2: Structural Site Directories & Social Matrices */}
                            <div className="row gy-4 pt-2">

                                {/* Directory Block: Solutions */}
                                <div className="col-12 col-sm-4">
                                    <h6 className="directory-header mb-3">Solutions</h6>
                                    <ul className="footer-links-list list-unstyled d-flex flex-column gap-2">
                                        <li><a href="/solutions/core">Core Banking CB7<img src={arrowRightIcon} alt='footer arrow right' className='footer-arrow-right'/>
                                        </a></li>
                                        <li><a href="/solutions/digital">Digital Banking N7 <img src={arrowRightIcon} alt='footer arrow right' className='footer-arrow-right'/></a></li>
                                        <li><a href="/solutions/open">Open Banking <img src={arrowRightIcon} alt='footer arrow right' className='footer-arrow-right'/></a></li>
                                        <li><a href="/solutions/loan-origination">Loan Origination System <img src={arrowRightIcon} alt='footer arrow right' className='footer-arrow-right'/></a></li>
                                        <li><a href="/solutions/loan-management">Loan Management System <img src={arrowRightIcon} alt='footer arrow right' className='footer-arrow-right'/></a></li>
                                        <li><a href="/solutions/transformation">Digital Transformation <img src={arrowRightIcon} alt='footer arrow right' className='footer-arrow-right'/></a></li>
                                    </ul>
                                </div>

                                {/* Directory Block: N7 Banking */}
                                <div className="col-12 col-sm-4">
                                    <h6 className="directory-header mb-3">N7 Banking</h6>
                                    <ul className="footer-links-list list-unstyled d-flex flex-column gap-2">
                                        <li><a href="/about">About Us <img src={arrowRightIcon} alt='footer arrow right' className='footer-arrow-right'/></a></li>
                                        <li><a href="/solutions" className="highlighted-focus-node">Solutions <img src={arrowRightIcon} alt='footer arrow right' className='footer-arrow-right'/></a></li>
                                        <li><a href="/contact">Contact <img src={arrowRightIcon} alt='footer arrow right' className='footer-arrow-right'/></a></li>
                                        <li><a href="/company">Company <img src={arrowRightIcon} alt='footer arrow right' className='footer-arrow-right'/></a></li>
                                        <li><a href="/careers">Careers <img src={arrowRightIcon} alt='footer arrow right' className='footer-arrow-right'/></a></li>
                                        <li><a href="/insights">Insights <img src={arrowRightIcon} alt='footer arrow right' className='footer-arrow-right'/></a></li>
                                        <li><a href="/team">Core Team <img src={arrowRightIcon} alt='footer arrow right' className='footer-arrow-right'/></a></li>
                                        <li><a href="/brand-center">Brand Center <img src={arrowRightIcon} alt='footer arrow right' className='footer-arrow-right'/></a></li>
                                    </ul>
                                </div>

                                {/* Directory Block: Our Socials */}
                                <div className="col-12 col-sm-4">
                                    <h6 className="directory-header mb-3">Our Socials</h6>
                                    <ul className="footer-links-list list-unstyled d-flex flex-column gap-2">
                                        <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn <img src={arrowRightIcon} alt='footer arrow right' className='footer-arrow-right'/></a></li>
                                        <li><a href="https://x.com" target="_blank" rel="noreferrer">X <img src={arrowRightIcon} alt='footer arrow right' className='footer-arrow-right'/></a></li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Copyright Legal Section Block */}
                    <div className="row pt-5">
                        <div className="col-12 col-lg-4 text-start"></div>
                        <div className="col-12 col-lg-8 text-start">
                            <p className="copyright-legal-text mb-0">
                                Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
                            </p>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer;