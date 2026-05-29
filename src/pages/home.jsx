import React, { useState } from 'react';
import heroImage from '../assets/images/hero.png';
import smartFinderLogo from '../assets/images/Group-45.png';
import artVenueLogo from '../assets/images/Group-46.png';
import kontrastLogo from '../assets/images/Group-47.png';
import ShellsFindlogo from '../assets/images/Vector.png';
import zoomerrLogo from '../assets/images/Vector-1.png';
import wavesMarathonLogo from '../assets/images/Vector-2.png';



import coreBankingIcon from '../assets/images/core-banking.png';
import digitalBankingIcon from '../assets/images/digital-banking.png';
import openBankingIcon from '../assets/images/open-banking.png';
import loanOriginationIcon from '../assets/images/loan-origination.png';
import loanManagementIcon from '../assets/images/loan-management.png';
import arrowRightIcon from '../assets/images/arrow-right.png';
import arrowLeftIcon from '../assets/images/arrow-left.png';

import AiMlDashboardOne from '../assets/images/ai-ml.png';
import AiMlDashboardTwo from '../assets/images/ai-ml-two.png';
import checkCircleIcon from '../assets/images/right.png';
import wavingHandIcon from '../assets/images/waving-hand.gif';
import frostBB7Icon from '../assets/images/ticket-cbj.png';

import phoneMockup1 from '../assets/images/phone-mockup-1.png';
import phoneMockup2 from '../assets/images/phone-mockup-2.png';
import phoneMockup3 from '../assets/images/phone-mockup-3.png';
import vectorArt from '../assets/images/Vector-art.png';

import Slider from '../componets/slider'

function Home() {

    const tickerText = (
        <span className="ticker-phrase d-inline-flex align-items-center">
            Say
            <img
                src={wavingHandIcon}
                alt="Waving Hand"
                className="ticker-img mx-2"
            />
            to the new way of banking
            <i className="fas fa-asterisk mx-3 ticker-divider"></i>
            <img
                src={frostBB7Icon}
                alt="CB7"
                className="ticker-img mx-2"
            /><span className="ticker-highlight">CB7</span>
            <img
                src={frostBB7Icon}
                alt="CB7"
                className="ticker-img mx-2"
            />
            <i className="fas fa-asterisk mx-3 ticker-divider"></i>
        </span>
    );


    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
            <section className="hero-section bg-dark-custom py-5">
                <div className="container py-lg-5">
                    <div className="row align-items-center gy-5">

                        {/* Left Column: Content */}
                        <div className="col-10 col-md-9 col-lg-6 text-start mx-auto mx-lg-0">
                            <h1 className="hero-title text-white mb-3">
                                The new foundation <br className="d-none d-sm-inline" /> of modern banking
                            </h1>
                            <p className="hero-subtitle mb-5">
                                We drive innovation and growth, provide seamless customer experience and operational excellence.
                            </p>
                            <div className="d-flex align-items-center gap-3">
                                <button className="btn btn-gradient  text-uppercase">
                                    Request Demo
                                </button>
                                <button className="btn btn-outline-custom text-uppercase">
                                    Contact Us
                                </button>
                            </div>
                        </div>

                        {/* Right Column: App UI Showcase with Ambient Glow */}
                        <div className="col-12 col-lg-6 d-flex justify-content-center">
                            <div className="ambient-glow"></div>
                            <div className="hero-image-card position-relative shadow-lg border-0">
                                <img
                                    src={heroImage}
                                    alt="Modern Banking Dashboard Preview"
                                    className="img-fluid rounded-4"
                                />
                            </div>
                        </div>

                    </div>

                    {/* Bottom Section: Trusted Logos Marquee */}
                    <div className="row mt-5 pt-5 border-secondary-subtle">
                        <div className="col-12">
                            <p className="trusted-title">Trusted By:</p>
                            <div className="d-flex flex-wrap align-items-center gap-3 gap-md-3">
                                {/* 1. SHELLS */}
                                <div className="logo-item">
                                    <img
                                        src={ShellsFindlogo}
                                        alt="Shells Logo"
                                        className="img-fluid  shot-hero-img"
                                    />
                                    <span>SHELLS</span>
                                </div>

                                {/* 2. SmartFinder */}
                                <div className="logo-item">
                                    <img
                                        src={smartFinderLogo}
                                        alt="SmartFinder Logo"
                                        className="img-fluid  shot-hero-img"
                                    />
                                    <span>SmartFinder</span>
                                </div>

                                {/* 3. Zoomerr */}
                                <div className="logo-item">
                                    <img
                                        src={zoomerrLogo}
                                        alt="Zoomerr Logo"
                                        className="img-fluid  shot-hero-img"
                                    />
                                    <span>Zoomerr</span>
                                </div>

                                {/* 4. ArtVenue */}
                                <div className="logo-item">
                                    <img
                                        src={artVenueLogo}
                                        alt="ArtVenue Logo"
                                        className="img-fluid  shot-hero-img"
                                    />
                                    <span>ArtVenue</span>
                                </div>

                                {/* 5. kontrast */}
                                <div className="logo-item">
                                    <img
                                        src={kontrastLogo}
                                        alt="Kontrast Logo"
                                        className="img-fluid  shot-hero-img"
                                    />
                                    <span>kontrast</span>
                                </div>

                                {/* 6. WAVESMARATHON */}
                                <div className="logo-item">
                                    <img
                                        src={wavesMarathonLogo}
                                        alt="WavesMarathon Logo"
                                        className="img-fluid  shot-hero-img"
                                    />
                                    <span>WAVESMARATHON</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="solutions-section bg-dark-custom py-4">
                <div className="container py-lg-5">
                    <div className="row gy-5">

                        {/* Left Sticky Column */}
                        <div className="col-12 col-lg-5 text-start">
                            <div className="heading-contain">
                                <h2 className="section-title text-white">
                                    All of our solutions are tailor-made to your needs
                                </h2>
                                <button className="btn btn-outline-custom px-4 py-2 mt-2 text-uppercase">
                                    Request Demo
                                </button>
                            </div>
                        </div>

                        {/* Right Columns: Feature Item Grid */}
                        <div className="col-12 col-lg-7">
                            <div className="row g-5">

                                {/* Feature 1 */}
                                <div className="col-12 col-md-6 text-start">
                                    <div className="feature-icon-wrapper mb-4">
                                        <img
                                            src={coreBankingIcon}
                                            alt="Core Banking CB7"
                                            className="img-fluid feature-icon-img"
                                        />
                                    </div>
                                    <h3 className="feature-card-title text-white mb-3">Core Banking CB7</h3>
                                    <p className="feature-card-text mb-4">
                                        CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.
                                    </p>
                                    <a href="/" className="btn-learn-more text-uppercase">
                                        <span className="btn-text">Learn More</span>
                                        <img src={arrowRightIcon} alt="Arrow Right" className="ms-2 arrow-icon-img" />
                                    </a>
                                </div>

                                {/* Feature 2 */}
                                <div className="col-12 col-md-6 text-start">
                                    <div className="feature-icon-wrapper mb-4">
                                        <img
                                            src={digitalBankingIcon}
                                            alt="Digital Banking N7"
                                            className="img-fluid feature-icon-img"
                                        />
                                    </div>
                                    <h3 className="feature-card-title text-white mb-3">Digital Banking N7</h3>
                                    <p className="feature-card-text mb-4">
                                        N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients
                                    </p>
                                    <a href="/" className="btn-learn-more text-uppercase">
                                        <span className="btn-text">Learn More</span>
                                        <img src={arrowRightIcon} alt="Arrow Right" className="ms-2 arrow-icon-img" />
                                    </a>
                                </div>

                                {/* Feature 3 */}
                                <div className="col-12 col-md-6 text-start">
                                    <div className="feature-icon-wrapper mb-4">
                                        <img
                                            src={openBankingIcon}
                                            alt="Open Banking"
                                            className="img-fluid feature-icon-img"
                                        />
                                    </div>
                                    <h3 className="feature-card-title text-white mb-3">Open Banking</h3>
                                    <p className="feature-card-text mb-4">
                                        Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.
                                    </p>
                                    <a href="/" className="btn-learn-more text-uppercase">
                                        <span className="btn-text">Learn More</span>
                                        <img src={arrowRightIcon} alt="Arrow Right" className="ms-2 arrow-icon-img" />
                                    </a>
                                </div>

                                {/* Feature 4 with NBFC Badge */}
                                <div className="col-12 col-md-6 text-start">
                                    <div className="d-flex justify-content-between align-items-end mb-4">
                                        <div className="feature-icon-wrapper">
                                            <img
                                                src={loanOriginationIcon}
                                                alt="Loan Origination System"
                                                className="img-fluid feature-icon-img"
                                            />
                                        </div>
                                        <span className="badge-nbfc text-uppercase mt-2">NBFC</span>
                                    </div>
                                    <h3 className="feature-card-title text-white mb-3">Loan Origination System</h3>
                                    <p className="feature-card-text mb-4">
                                        N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients
                                    </p>
                                    <a href="/" className="btn-learn-more text-uppercase">
                                        Learn More <img src={arrowRightIcon} alt="Arrow Right" className="ms-2 arrow-icon-img" />
                                    </a>
                                </div>

                                {/* Feature 5 with NBFC Badge */}
                                <div className="col-12 col-md-6 text-start">
                                    <div className="d-flex justify-content-between align-items-end mb-4">
                                        <div className="feature-icon-wrapper">
                                            <img
                                                src={loanManagementIcon}
                                                alt="Loan Management System"
                                                className="img-fluid feature-icon-img"
                                            />
                                        </div>
                                        <span className="badge-nbfc text-uppercase mt-2">NBFC</span>
                                    </div>
                                    <h3 className="feature-card-title text-white mb-3">Loan Management System</h3>
                                    <p className="feature-card-text mb-4">
                                        N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients
                                    </p>
                                    <a href="/" className="btn-learn-more text-uppercase">
                                        <span className="btn-text">Learn More</span>
                                        <img src={arrowRightIcon} alt="Arrow Right" className="ms-2 arrow-icon-img" />
                                    </a>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <section className="features-container-wrapper bg-dark-custom py-5">
                <div className="container py-lg-5">

                    {/* --- FIRST FEATURE ROW (Text Left, Image Right + Large Background Watermark) --- */}
                    <div className="row align-items-center gy-5 mb-5 pb-lg-5 position-relative overflow-hidden">

                        {/* Large absolute background watermarked token */}
                        <div className="bg-watermark-text d-none d-lg-block">CB7</div>

                        {/* Left Column Text Content */}
                        <div className="col-12 col-lg-6 text-start position-relative" style={{ zIndex: 2 }}>
                            <h2 className="feature-main-title text-white mb-4">
                                A complete cloud-based core banking.
                            </h2>
                            <p className="feature-main-subtitle mb-4">
                                Faster time to market with our cloud-based core banking services
                            </p>
                            <div className="d-flex flex-column  gap-4">
                                <button className="btn btn-gradient px-4 py-2 text-uppercase">
                                    Request Demo
                                </button>

                                <a href="/" className="btn-inline-link text-uppercase">
                                    <span className="btn-text">Learn More</span>
                                    <img src={arrowRightIcon} alt="Arrow Right" className="ms-2 arrow-icon-img" />
                                </a>
                            </div>
                        </div>

                        {/* Right Column Image Showcase */}
                        <div className="col-12 col-lg-6 text-center position-relative" style={{ zIndex: 2 }}>
                            <div className="laptop-preview-container ps-lg-4">
                                <img
                                    src={AiMlDashboardOne}
                                    alt="AML Dashboard Interface Preview"
                                    className="img-fluid rounded-3 shadow-lg img-crop-top"
                                />
                            </div>
                        </div>

                    </div>

                    {/* --- SECOND FEATURE ROW (Image Left, Checklist Right) --- */}
                    <div className="row align-items-center gy-5 mt-5 pt-lg-5">

                        {/* Left Column Image Preview (Orders second on mobile screen breakdown) */}
                        <div className="col-12 col-lg-6 order-2 order-lg-1 text-center">
                            <div className="laptop-preview-container pe-lg-4">
                                <img
                                    src={AiMlDashboardTwo}
                                    alt="Core Banking Dashboard Overview"
                                    className="img-fluid rounded-3 shadow-lg img-crop-bottom"
                                />
                            </div>
                        </div>

                        {/* Right Column Checklist Content (Orders first on mobile screen breakdown) */}
                        <div className="col-12 col-lg-6 order-1 order-lg-2 text-start">
                            <h2 className="feature-main-title-two text-white mb-4">
                                Run a more efficient, flexible, and digitally connected corebanking system
                            </h2>
                            <p className="list-section-heading mb-4">What you will get:</p>

                            {/* 2-Column Responsive Bootstrap Checkbox Grid */}
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <ul className="feature-checklist list-unstyled d-flex flex-column gap-3">
                                        <li className="d-flex align-items-center">
                                            <img src={checkCircleIcon} alt="Check" className="checklist-img me-2" />
                                            Customer-On Boarding
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <img src={checkCircleIcon} alt="Check" className="checklist-img me-2" />
                                            Managing deposits and withdrawals
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <img src={checkCircleIcon} alt="Check" className="checklist-img me-2" />
                                            Transaction management
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <img src={checkCircleIcon} alt="Check" className="checklist-img me-2" />
                                            Interest Calculation
                                        </li>
                                        <li className="d-flex align-items-start">
                                            <img src={checkCircleIcon} alt="Check" className="checklist-img me-2 mt-1" />
                                            Payments processing (cash, cheques, mandates, NEFT, RTGS etc)
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-12 col-sm-6">
                                    <ul className="feature-checklist list-unstyled d-flex flex-column gap-3">
                                        <li className="d-flex align-items-center">
                                            <img src={checkCircleIcon} alt="Check" className="checklist-img me-2" />
                                            CRM Activities
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <img src={checkCircleIcon} alt="Check" className="checklist-img me-2" />
                                            Configuring New Banking Products
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <img src={checkCircleIcon} alt="Check" className="checklist-img me-2" />
                                            Loan disbursal and Loan management
                                        </li>
                                        <li className="d-flex align-items-start">
                                            <img src={checkCircleIcon} alt="Check" className="checklist-img me-2 mt-1" />
                                            Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
            <section className="cta-section bg-dark-custom">
                <div className="container">

                    {/* Outer Card Panel Container */}
                    <div className="cta-card-panel position-relative overflow-hidden">

                        {/* Background Watermark Text */}
                        <div className="cta-bg-watermark d-none d-lg-block">CB7</div>

                        <div className="row align-items-center position-relative g-4" style={{ zIndex: 2 }}>

                            {/* Left Content Side */}
                            <div className="col-12 col-lg-7 text-start">
                                <h2 className="cta-title text-white mb-3">
                                    Take the full advantage of <br className="d-none d-sm-inline" /> going paper-less now.
                                </h2>
                                <p className="cta-text mb-0">
                                    CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
                                </p>
                            </div>

                            {/* Right Buttons Side */}
                            <div className="col-12 col-lg-5 d-flex flex-row justify-content-start justify-content-lg-end align-items-center gap-3">
                                <button className="btn btn-outline-custom px-4 py-2.5 text-uppercase">
                                    Contact Us
                                </button>
                                <button className="btn  btn-gradient px-4 py-2.5 text-uppercase">
                                    Request Demo
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section className="ticker-section w-100 py-3 overflow-hidden border-top border-bottom">
                <div className="ticker-wrap d-flex">
                    <div className="ticker-track d-flex whitespace-nowrap">
                        {tickerText}
                        {tickerText}
                        {tickerText}
                        {tickerText}
                    </div>
                </div>
            </section>
            <section className="digital-banking-features">
                {/* Giant Background Watermark Vector Asset */}
                <div className="features-watermark-bg"></div>
                <div className="features-watermark-bg-2"></div>
                <div className="features-watermark-bg-3"></div>
                {/* Corner Decorative Glow */}
                <div className="bottom-left-glow"></div>

                <div className="container">

                    <div className="row">
                        <div className="col-12 col-md-6 text-start content-side">
                            <h2 className="section-main-title">Digital banking out-of-the-box</h2>
                            <p className="section-desc-text">
                                N7 helps your financial institution improve the client experience, automate and optimize procedures.
                            </p>
                            <div className="mb-4">
                                <button className="btn-gradient">REQUEST DEMO</button>
                            </div>
                            <a href="/" className="btn-learn-more text-uppercase">
                                Learn More <img src={arrowRightIcon} alt="Arrow" className="arrow-icon-img" />
                            </a>
                        </div>
                        <div className="col-12 col-md-6 text-center image-side">
                            <div className="row align-items-center  flex-md-row-reverse first-phone">
                                <div className="col-12 col-md-6 text-start content-side ps-md-5">
                                    <h3 className="feature-sub-title mt-2">Fully compliant with regulatory requirements</h3>
                                    <p className="section-desc-text">
                                        The governance of risk management with regulatory requirements is standard... Digital banks allow list products and procedures.
                                    </p>
                                    <ul className="feature-checklist-two list-unstyled d-flex flex-column gap-3">
                                        <li className="d-flex align-items-center">
                                            <img src={checkCircleIcon} alt="Check" className="checklist-img me-2" /> Pre-integrated Security System
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <img src={checkCircleIcon} alt="Check" className="checklist-img me-2" /> Fully Compliant With Regulatory Requirement
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <img src={checkCircleIcon} alt="Check" className="checklist-img me-2" /> Digitally Connected Core
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 col-md-6 text-center image-side">
                                    <img src={phoneMockup1} alt="Mobile App Screen 2" className="img-fluid phone-mockup" />
                                </div>
                            </div>
                            <div className="row align-items-center middle-phone">
                                <div className="col-12 col-md-6 text-start content-side">
                                    <h3 className="feature-sub-title mt-2">No legacy IT systems</h3>
                                    <p className="section-desc-text">
                                        Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.                                    </p>
                                    <ul className="feature-checklist-two  list-unstyled d-flex flex-column gap-3">
                                        <li className="d-flex align-items-center">
                                            <img src={checkCircleIcon} alt="Check" className="checklist-img me-2" /> Adaptive & Intelligent API monetization
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <img src={checkCircleIcon} alt="Check" className="checklist-img me-2" /> Ambient User Experience
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <img src={checkCircleIcon} alt="Check" className="checklist-img me-2" /> Cloud-native With lower TCO
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 col-md-6 text-center image-side">
                                    <img src={phoneMockup2} alt="Mobile App Screen 3" className="img-fluid phone-mockup" />
                                </div>
                            </div>
                            <div className="row align-items-center feature-row flex-md-row-reverse last-phone">
                                <div className="col-12 col-md-6 text-start content-side ps-md-5">
                                    <h3 className="feature-sub-title mt-2">No traditional branches</h3>
                                    <p className="section-desc-text">
                                        Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.’                                    </p>
                                    <ul className="feature-checklist-two  list-unstyled d-flex flex-column gap-3">
                                        <li className="d-flex align-items-center">
                                            <img src={checkCircleIcon} alt="Check" className="checklist-img me-2" /> Branchless & Paperless Banking
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <img src={checkCircleIcon} alt="Check" className="checklist-img me-2" /> Digital Transformation Capability
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <img src={checkCircleIcon} alt="Check" className="checklist-img me-2" /> Optimized, Adoptable and Scalable
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 col-md-6 text-center image-side">
                                    <img src={phoneMockup3} alt="Mobile App Screen 2" className="img-fluid phone-mockup" />
                                </div>
                            </div>
                        </div>
                        <div className="banner-bleed-wrapper">
                            <div className="container">

                                {/* Embedded Inner Dark Shell */}
                                <div className="n7-panel-card position-relative overflow-hidden">

                                    {/* Absolute N7 Outline Watermark */}
                                    <div className="panel-n7-watermark d-none d-lg-block">N7</div>

                                    <div className="row align-items-center position-relative g-4" style={{ zIndex: 5 }}>

                                        {/* Text Block */}
                                        <div className="col-12 col-lg-7 text-start">
                                            <h2 className="panel-title text-white mb-3">
                                                Take the full advantage of <br className="d-none d-sm-inline" /> going paper-less now.
                                            </h2>
                                            <p className="panel-desc-text mb-0">
                                                N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
                                            </p>
                                        </div>

                                        {/* Interactive CTAs */}
                                        <div className="col-12 col-lg-5 d-flex flex-row justify-content-start justify-content-lg-end align-items-center gap-3">
                                            <button className="btn btn-outline-custom px-4 py-2.5 text-uppercase">
                                                Contact Us
                                            </button>
                                            <button className="btn btn-gradient  px-4 py-2.5 text-uppercase">
                                                Request Demo
                                            </button>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="insights-section bg-dark-custom py-5">
                <div className="container py-lg-5">
                    <div className="row gy-5">


                        <div className="col-12 col-lg-6 text-start">
                            <div className="insights-contain">
                                <h2 className="section-title text-white">
                                    Get yourself up-to-speed on all the things happening in fintech
                                </h2>

                                <button className="btn btn-outline-custom  px-4 py-2 mt-2 text-uppercase">
                                    Insights
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Grid of Articles */}
                        <div className="col-12 col-lg-6">
                            <div className="row g-4">

                                {/* 1. Featured Wide Card */}
                                <div className="col-12">
                                    <div className="card insight-card featured-card p-4 h-100 border-0 text-start">
                                        <div className="row align-items-center g-4">
                                            <div className="col-12 col-md-6">
                                                {/* Recreating the vector artwork block from image_66fcc1.png */}
                                                <div className="vector-art-placeholder d-flex align-items-center justify-content-center rounded-3">
                                                    <div className="graphic-grid">
                                                        <img src={vectorArt} alt="vector-art" className="vector-art-img me-2" />
                                                        <img src={vectorArt} alt="vector-art" className="vector-art-img me-2" />
                                                        <img src={vectorArt} alt="vector-art" className="vector-art-img me-2" />
                                                        <img src={vectorArt} alt="vector-art" className="vector-art-img me-2" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <span className="card-category text-uppercase mb-2 d-block">Getting Started</span>
                                                <h3 className="card-heading text-white mb-3">
                                                    How to transition from a traditional to a digital bank
                                                </h3>
                                                <div className="card-meta mb-4">
                                                    <span className="author-name me-3">David Grohl</span>
                                                    <span className="publish-date">17/08/24</span>
                                                </div>
                                                <button className="btn btn-card-action w-100 text-uppercase py-2">
                                                    Read More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Regular Bottom Left Card */}
                                <div className="col-12 col-md-6">
                                    <div className="card insight-card p-4 h-100 border-0 text-start d-flex flex-column justify-content-between">
                                        <div>
                                            <span className="card-category text-uppercase mb-2 d-block">Getting Started</span>
                                            <h3 className="card-heading text-white mb-3">
                                                How to transition from a traditional to a digital bank
                                            </h3>
                                            <div className="card-meta mb-4">
                                                <span className="author-name me-3">David Grohl</span>
                                                <span className="publish-date">17/08/24</span>
                                            </div>
                                        </div>
                                        <button className="btn btn-card-action w-100 text-uppercase py-2">
                                            Read More
                                        </button>
                                    </div>
                                </div>

                                {/* 3. Regular Bottom Right Card */}
                                <div className="col-12 col-md-6">
                                    <div className="card insight-card p-4 h-100 border-0 text-start d-flex flex-column justify-content-between">
                                        <div>
                                            <span className="card-category text-uppercase mb-2 d-block">Getting Started</span>
                                            <h3 className="card-heading text-white mb-3">
                                                How to transition from a traditional to a digital bank
                                            </h3>
                                            <div className="card-meta mb-4">
                                                <span className="author-name me-3">David Grohl</span>
                                                <span className="publish-date">17/08/24</span>
                                            </div>
                                        </div>
                                        <button className="btn btn-card-action w-100 text-uppercase py-2">
                                            Read More
                                        </button>
                                    </div>
                                </div>

                                {/* "Read All Insights" Navigation Link */}
                                <div className="col-12 d-flex justify-content-end mt-4">
                                    <a href="/" className="btn-inline-link text-uppercase">
                                        <span className="btn-text">Read All Insights </span>
                                        <img src={arrowRightIcon} alt="Arrow Right" className="ms-2 arrow-icon-img" />
                                    </a>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="case-studies-section bg-dark-custom  overflow-hidden">
                <div className="container position-relative">

                    {/* Section Title Header */}
                    <div className="row mb-3 text-center">
                        <div className="col-12">
                            <h2 className="section-main-heading text-white">Our Case Studies</h2>
                        </div>
                    </div>
                    
                    <Slider kontrastLogo={kontrastLogo} ShellsFindlogo={ShellsFindlogo} zoomerrLogo={zoomerrLogo}/>

                </div>
            </section>
            <section className="cb7-banner-section bg-dark-canvas py-5 position-relative overflow-hidden">
                <div className="container py-md-4">
                    <div className="row align-items-center gy-4 text-start">

                        {/* Left Typography Column */}
                        <div className="col-12 col-lg-7">
                            <h2 className="banner-display-heading text-white mb-5">
                                Take the full advantage of <br className="d-none d-sm-inline" /> going paper-less now.
                            </h2>
                            <p className="banner-supporting-text mb-0">
                                CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
                            </p>
                        </div>

                        {/* Right Interactive CTA Column */}
                        <div className="col-12 col-lg-5 d-flex flex-row justify-content-start justify-content-lg-end align-items-center gap-3">
                            <button className="btn btn-outline-custom text-uppercase px-4 py-2.5">
                                Contact Us
                            </button>
                            <button className="btn btn-gradient text-uppercase px-4 py-2.5">
                                Request Demo
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;