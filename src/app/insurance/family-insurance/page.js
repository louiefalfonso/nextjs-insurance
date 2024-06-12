"use client";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Family Insurance"
      >
        <section className="insurance-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="insurance-details__left">
                  <h3 className="insurance-details__title-1">
                    We Werve a Wide
                    <br /> Variety of Industries Insurance
                  </h3>
                  <p className="insurance-details__text-1">
                    We embrace holistic development and support for employees
                    with the aim of being a first-choice employer within our
                    sectors. Through a unique combination of engineering,
                    construction and design disciplines and expertise.
                  </p>
                  <div className="insurance-details__img-1">
                    <img
                      src="assets/images/services/insurance-details-img-3.jpg"
                      alt=""
                    />
                  </div>
                  <h3 className="insurance-details__title-2">
                    Family Insurance
                  </h3>
                  <p className="insurance-details__text-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas varius tortor nibh, sit amet tempor nibh finibus
                    et. Aenean eu enim justo. Vestibulum aliquam hendrerit
                    molestie. Mauris malesuada nisi sit amet augue accumsan
                    tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar,
                    tortor eros facilisis libero, vitae commodo nunc quam et
                    ligula
                  </p>
                  <div className="insurance-details__points-and-text-box">
                    <div className="insurance-details__points-box">
                      <h3 className="insurance-details__points-title">
                        Our Goals
                      </h3>
                      <ul className="insurance-details__points list-unstyled">
                        <li>
                          <div className="icon">
                            <span className="icon-check-mark-1"></span>
                          </div>
                          <p>Aliquam accumsan et ante id</p>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-check-mark-1"></span>
                          </div>
                          <p>Lorem ipsum dolor sit dgdr</p>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-check-mark-1"></span>
                          </div>
                          <p>Maecenas varius tortor</p>
                        </li>
                      </ul>
                    </div>
                    <div className="insurance-details__text-box">
                      <h3>The Challenges</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
                        <br />
                        elit. Maecenas varius tortor nibh, sit amet tempor
                        <br /> finibus et. Aenean eu enim justo. Vestibulum
                      </p>
                    </div>
                  </div>
                  <div className="insurance-details__faq">
                    <div
                      className="accrodion-grp faq-one-accrodion"
                      data-grp-name="faq-one-accrodion-1"
                    >
                      <div
                        className={
                          isActive.key == 1 ? "accrodion active" : "accrodion"
                        }
                        onClick={() => handleToggle(1)}
                      >
                        <div className="accrodion-title">
                          <h4>Nulla fermentum leo nibh, a vestibulum?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>
                              Your applicant may have limited help desk
                              wexperience. In that case, look for applicants who
                              are motivated to grow and have some transferable
                              nibh finibus et. Aenean eu enim justo. Vestibulum
                              aliquam hendrerit moles accumsan
                            </p>
                          </div>
                          {/*  /.inner  */}
                        </div>
                      </div>
                      <div
                        className={
                          isActive.key == 2 ? "accrodion active" : "accrodion"
                        }
                        onClick={() => handleToggle(2)}
                      >
                        <div className="accrodion-title">
                          <h4>Which technical skills would you improve?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>
                              Your applicant may have limited help desk
                              wexperience. In that case, look for applicants who
                              are motivated to grow and have some transferable
                              nibh finibus et. Aenean eu enim justo. Vestibulum
                              aliquam hendrerit moles accumsan
                            </p>
                          </div>
                          {/*  /.inner  */}
                        </div>
                      </div>
                      <div
                        className={
                          isActive.key == 3 ? "accrodion active" : "accrodion"
                        }
                        onClick={() => handleToggle(3)}
                      >
                        <div className="accrodion-title">
                          <h4>What do Logical Drives do?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>
                              Your applicant may have limited help desk
                              wexperience. In that case, look for applicants who
                              are motivated to grow and have some transferable
                              nibh finibus et. Aenean eu enim justo. Vestibulum
                              aliquam hendrerit moles accumsan
                            </p>
                          </div>
                          {/*  /.inner  */}
                        </div>
                      </div>
                      <div
                        className={
                          isActive.key == 4 ? "accrodion active" : "accrodion"
                        }
                        onClick={() => handleToggle(4)}
                      >
                        <div className="accrodion-title">
                          <h4>What about our safety measures ?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>
                              Your applicant may have limited help desk
                              wexperience. In that case, look for applicants who
                              are motivated to grow and have some transferable
                              nibh finibus et. Aenean eu enim justo. Vestibulum
                              aliquam hendrerit moles accumsan
                            </p>
                          </div>
                          {/*  /.inner  */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="insurance-details__right">
                  <div className="insurance-details__catagories">
                    <h3 className="insurance-details__catagories-title">
                      Catagories
                    </h3>
                    <ul className="insurance-details__catagories-list list-unstyled">
                      <li>
                        <Link href="life-insurance">
                          Life Insurance<span className="icon-next"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="health-insurance">
                          Health Insurance<span className="icon-next"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="car-insurance">
                          Car Insurance<span className="icon-next"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="home-insurance">
                          Home Insurance<span className="icon-next"></span>
                        </Link>
                      </li>
                      <li className="active">
                        <Link href="family-insurance">
                          Family Insurance<span className="icon-next"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="business-insurance">
                          Buisness Insurance
                          <span className="icon-next"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="insurance-details__need-help">
                    <div
                      className="insurance-details__need-help-bg"
                      style={{
                        backgroundImage:
                          "url(assets/images/backgrounds/insurance-details-need-help-bg.jpg)",
                      }}
                    ></div>
                    <h3 className="insurance-details__need-help-title">
                      Need Any Types
                      <br /> of Service
                      <br /> from us
                    </h3>
                    <div className="insurance-details__need-help-btn-box">
                      <Link
                        href="contact"
                        className="insurance-details__need-help-btn thm-btn"
                      >
                        FIND SOLUTION
                      </Link>
                    </div>
                  </div>
                  <div className="insurance-details__contact">
                    <div className="insurance-details__contact-icon">
                      <span className="icon-telephone-1"></span>
                    </div>
                    <div className="insurance-details__contact-content">
                      <span>You can call anytime</span>
                      <p>
                        Free<Link href="tel:+997868765">+99 (786) 8765</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
