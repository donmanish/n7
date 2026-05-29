import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const headerRef = useRef(null);


    // Close dropdowns if user clicks outside the header
    useEffect(() => {
        function handleClickOutside(event) {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Reusable toggle handler for any dropdown menu
    const toggleDropdown = (e, menuName) => {
        e.preventDefault();
        setOpenDropdown(openDropdown === menuName ? null : menuName);
    };

    return (
        <header className="header-wrapper">
            <div className="header-container">

                {/* Logo Section */}
                <div className="logo">
                    <h1>N7</h1>
                </div>

                {/* Mobile Toggle Button */}
                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Navigation"
                >
                    <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
                </button>

                {/* Navigation Menu Links */}
                <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>

                    {/* Solutions Dropdown */}
                    <div
                        className="nav-item-dropdown"
                    >
                        <a href="#solutions" onClick={(e) => toggleDropdown(e, 'solutions')}>
                            <span>SOLUTIONS</span>
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className={`dropdown-arrow ${openDropdown === 'solutions' ? 'open' : ''}`}
                            />
                        </a>

                        {openDropdown === 'solutions' && (
                            <ul className={`dropdown-menu ${openDropdown ? 'd-block': ''}`}>
                                <li><a href="/solution-1">Cloud Services</a></li>
                                <li><a href="/solution-2">Cyber Security</a></li>
                                <li><a href="/solution-3">Data Analytics</a></li>
                            </ul>
                        )}
                    </div>

                    {/* Resources Link */}
                    <div className="nav-item-dropdown">
                        <a href="#resources" onClick={(e) => toggleDropdown(e, 'resources')}>
                            <span>RESOURCES</span>
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className={`dropdown-arrow ${openDropdown === 'resources' ? 'open' : ''}`}
                            />
                        </a>

                        {openDropdown === 'resources' && (
                            <ul className={`dropdown-menu ${openDropdown ? 'd-block': ''}`}>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/whitepapers">Whitepapers</a></li>
                                <li><a href="/case-studies">Case Studies</a></li>
                            </ul>
                        )}
                    </div>

                    {/* About Us Link */}
                    <a href="/about">
                        <span>ABOUT US</span>
                    </a>

                    {/* Request Demo Button duplicated inside mobile nav drawer */}
                    <button className="demo-btn mobile-only-btn">
                        REQUEST DEMO
                    </button>
                </nav>

                {/* Desktop Action Button */}
                <button className="demo-btn desktop-only-btn">
                    REQUEST DEMO
                </button>

            </div>
        </header>
    );
}

export default Header;
