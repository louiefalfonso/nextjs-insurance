"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const pathname = usePathname();

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
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        ></div>
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <a href="index" aria-label="logo image">
              <img
                src="../assets/images/resources/Philam_Life_logo-white.png"
                width="150"
                alt=""
              />
            </a>
          </div>

          <div className="mobile-nav__container">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="main-menu__list">
                <li>
                  <Link className={pathname == "/" ? "active" : ""} href="/">
                    Home{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className={pathname == "/about" ? "active" : ""}
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className={pathname == "/teams" ? "active" : ""}
                    href="/teams"
                  >
                    Teams
                  </Link>
                </li>
                <li>
                  <Link
                    className={pathname == "/insurance" ? "active" : ""}
                    href="/insurance"
                  >
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link
                    className={pathname == "/faq" ? "active" : ""}
                    href="/faq"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    className={pathname == "/testimonials" ? "active" : ""}
                    href="/testimonials"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    className={pathname == "/news" ? "active" : ""}
                    href="/news"
                  >
                    Latest News
                  </Link>
                </li>
                <li>
                  <Link
                    className={pathname == "/contact" ? "active" : ""}
                    href="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link href="/">philamlife-group@gmail.com</Link>
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
  );
};
export default MobileMenu;
