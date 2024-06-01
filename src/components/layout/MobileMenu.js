'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
    return (
        <>
            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu} ></div>
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu} ><i className="fa fa-times"></i></span>

                    <div className="logo-box">
                        <a href="index" aria-label="logo image"><img src="assets/images/resources/logo-2.png" width="150"
                                alt="" /></a>
                    </div>

                    <div className="mobile-nav__container">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="main-menu__list">
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/">Home</Link>
                                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <li><Link href="/">Home One</Link></li>
                                        <li className="current"><Link href="/index-2">Home Two</Link></li>
                                        <li><Link href="/index-3">Home Three</Link></li>
                                        <li><Link href="/index-4">Home Four</Link></li>
                                        <li><Link href="/index-5">Home Five</Link></li>
                                    </ul>
                                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li><Link href="/about/">About</Link></li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#">Pages</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>                                 
                                        <li><Link href="team">Team</Link></li>
                                        <li><Link href="team-details">Team Details</Link></li>
                                        <li><Link href="testimonial">Testimonials</Link></li>
                                        <li><Link href="portfolio">Portfolio</Link></li>
                                        <li><Link href="portfolio-details">Portfolio Details</Link></li>
                                        <li><Link href="pricing">Pricing</Link></li>
                                        <li><Link href="faq">Faq</Link></li>
                                        <li><Link href="/error">404 Error</Link></li>
                                    </ul>

                                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                                </li>

                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/#">Insurance</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>                                 
                                        <li><Link href="insurance">Insurance</Link></li>
                                        <li><Link href="life-insurance">Life Insurance</Link></li>
                                        <li><Link href="health-insurance">Health Insurance</Link></li>
                                        <li><Link href="car-insurance">Car Insurance</Link></li>
                                        <li><Link href="home-insurance">Home Insurance</Link></li>
                                        <li><Link href="family-insurance">Family Insurance</Link></li>
                                        <li><Link href="business-insurance">Buisness Insurance</Link></li>
                                    </ul>

                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                                </li>

                                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/#">Blog</Link>
                                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>                                 
                                        <li><Link href="blog">Blog</Link></li>
                                        <li><Link href="blog-sidebar">Blog Sidebar</Link></li>
                                        <li><Link href="blog-details">Blog Details</Link></li>
                                    </ul>
                                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div>
                                </li>

                                <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}><Link href="/#">Shop</Link>
                                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>                                 
                                        <li><Link href="products">Products</Link></li>
                                        <li><Link href="product-details">Product Details</Link></li>
                                    </ul>

                                    <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <a href="mailto:needhelp@packageName__.com">needhelp@sonchoy.com</a>
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            <a href="tel:666-888-0000">666 888 0000</a>
                        </li>
                    </ul>
                    <div className="mobile-nav__top">
                        <div className="mobile-nav__social">
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-facebook-square"></a>
                            <a href="#" className="fab fa-pinterest-p"></a>
                            <a href="#" className="fab fa-instagram"></a>
                        </div>
                    </div>
                </div>
            </div>

          

        </>
    )
}
export default MobileMenu;
