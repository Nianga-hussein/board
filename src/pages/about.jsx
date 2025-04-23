import React from "react";
function About(){
    return(
        <>
  {/* preloader */}
  <div className="preloader">
    <div className="loader">
      <span />
      <span />
      <span />
    </div>
  </div>
  {/* preloader end */}
  {/* header area */}
  <header className="header">
    <div className="main-navigation">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="assets/img/logo/logo.png" alt="logo" />
          </a>
          <div className="mobile-menu-right">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-btn-icon">
                <i className="far fa-bars" />
              </span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown"></li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  home
                </a>
              </li>
              <li className="nav-item dropdown"></li>
              <li className="nav-item">
                <a className="nav-link" href="job-grid">
                  Jobs
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  data-bs-toggle="dropdown"
                >
                  Employers
                </a>
                <ul className="dropdown-menu fade-down">
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="/">
                      Dashboard
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="employer-dashboard"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="employer-profile"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="employer-post-job"
                        >
                          Post A Job{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="employer-manage-job"
                        >
                          Manage Job
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="employer-candidate"
                        >
                          All Candidates
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="employer-shortlisted-resume"
                        >
                          Shortlisted Resumes
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="employer-message"
                        >
                          Messages
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="employer-resume-alert"
                        >
                          Resume Alerts
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="employer-transaction"
                        >
                          Transaction
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="employer-settings"
                        >
                          Settings
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  data-bs-toggle="dropdown"
                >
                  Candidates
                </a>
                <ul className="dropdown-menu fade-down">
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="/">
                      Dashboard
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="candidate-dashboard"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="candidate-profile"
                        >
                          My Profile
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="candidate-resume"
                        >
                          My Resume
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="candidate-applied-job"
                        >
                          Applied Jobs
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="candidate-shortlisted-job"
                        >
                          Shortlisted Jobs
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="candidate-cv-manager"
                        >
                          CV Manager
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="candidate-saved-job"
                        >
                          Saved Jobs
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="candidate-message"
                        >
                          Messages
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="candidate-job-alert"
                        >
                          Job Alerts
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="candidate-transaction"
                        >
                          Transaction
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="candidate-settings"
                        >
                          Settings
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <ul className="dropdown-menu fade-down">
                  <li>
                    <a className="dropdown-item" href="about">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="team">
                      Our Team
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="header-nav-right">
              <div className="header-btn">
                <a href="login" className="theme-btn theme-btn2">
                  <span className="far fa-sign-in" /> Sign In
                </a>
                <a href="/" className="theme-btn">
                  <span className="far fa-suitcase" /> Post Job
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
  {/* header area end */}
  <main className="main">
    {/* breadcrumb */}
    <div className="site-breadcrumb">
      <div className="container">
        <h2 className="breadcrumb-title">About Us</h2>
        <ul className="breadcrumb-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li className="active">About Us</li>
        </ul>
      </div>
      <div className="hero-shape">
        <img className="hero-shape-1" src="assets/img/shape/03.svg" alt="" />
        <img className="hero-shape-2" src="assets/img/shape/05.svg" alt="" />
        <img className="hero-shape-3" src="assets/img/shape/06.svg" alt="" />
        <img className="hero-shape-4" src="assets/img/shape/07.svg" alt="" />
      </div>
    </div>
    {/* about area */}
    <div className="about-area py-120 mb-30">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-left">
              <div className="about-img">
                <img src="assets/img/about/01.jpg" alt="" />
              </div>
              <div className="about-shape">
                <img src="assets/img/shape/01.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-right">
              <div className="site-heading mb-3">
                <span className="site-title-tagline">About Us</span>
                <h2 className="site-title">
                  Get the Best Job That <span>Fits You And We Create</span>{" "}
                  Unique Experiences
                </h2>
              </div>
              <p className="about-text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form by
                injected humour or randomised content of a page when looking at
                its layout words which don't look even.
              </p>
              <div className="about-list-wrapper">
                <ul className="about-list list-unstyled">
                  <li>
                    <div className="about-icon">
                      <span className="fas fa-check-circle" />
                    </div>
                    <div className="about-list-text">
                      <p>Take a look at our round up of the best shows</p>
                    </div>
                  </li>
                  <li>
                    <div className="about-icon">
                      <span className="fas fa-check-circle" />
                    </div>
                    <div className="about-list-text">
                      <p>
                        Lorem Ipsum has been the ndustry standard dummy text
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="about-icon">
                      <span className="fas fa-check-circle" />
                    </div>
                    <div className="about-list-text">
                      <p>It has survived not only five centuries</p>
                    </div>
                  </li>
                </ul>
              </div>
              <a href="about" className="theme-btn">
                Read More <i className="far fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* about area end */}
    {/* counter area */}
    <div className="counter-area pb-120">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="counter-box">
              <div className="icon">
                <i className="fal fa-users" />
              </div>
              <div className="counter-content">
                <div className="counter-number">
                  <span
                    className="counter"
                    data-count="+"
                    data-to={20}
                    data-speed={3000}
                  >
                    20
                  </span>
                  <span className="counter-sign">M</span>
                </div>
                <h6 className="title">Daily Users</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="counter-box">
              <div className="icon">
                <i className="fal fa-address-book" />
              </div>
              <div className="counter-content">
                <div className="counter-number">
                  <span
                    className="counter"
                    data-count="+"
                    data-to={50}
                    data-speed={3000}
                  >
                    50
                  </span>
                  <span className="counter-sign">K</span>
                </div>
                <h6 className="title">Job Positions</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="counter-box">
              <div className="icon">
                <i className="fal fa-smile" />
              </div>
              <div className="counter-content">
                <div className="counter-number">
                  <span
                    className="counter"
                    data-count="+"
                    data-to={30}
                    data-speed={3000}
                  >
                    30
                  </span>
                  <span className="counter-sign">M</span>
                </div>
                <h6 className="title">Happy Clients</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="counter-box">
              <div className="icon">
                <i className="fal fa-buildings" />
              </div>
              <div className="counter-content">
                <div className="counter-number">
                  <span
                    className="counter"
                    data-count="+"
                    data-to={50}
                    data-speed={3000}
                  >
                    50
                  </span>
                  <span className="counter-sign">k</span>
                </div>
                <h6 className="title">Total Employers</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* counter area end */}
    {/* testimonial-area */}
    <div className="testimonial-area pb-120">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 mx-auto wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay=".25s"
          >
            <div className="site-heading text-center">
              <span className="site-title-tagline">Testimonials</span>
              <h2 className="site-title">What Our Client Say's</h2>
              <p>
                We Collect Reviews From Our Users So You Can Get An Honest
                Opinion
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial-slider owl-carousel owl-theme">
          <div className="testimonial-item">
            <div className="testimonial-rate">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <div className="testimonial-quote">
              <p>
                There are many variations of passages available but the majority
                have suffered alteration in some form by injected popularity
                belief believable.
              </p>
            </div>
            <div className="testimonial-content">
              <div className="testimonial-author-img">
                <img src="assets/img/testimonial/01.jpg" alt="" />
              </div>
              <div className="testimonial-author-info">
                <h5>Reid E Butt</h5>
                <p>Web Developer</p>
              </div>
            </div>
            <span className="testimonial-quote-icon">
              <i className="flaticon-quote-1" />
            </span>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-rate">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <div className="testimonial-quote">
              <p>
                There are many variations of passages available but the majority
                have suffered alteration in some form by injected popularity
                belief believable.
              </p>
            </div>
            <div className="testimonial-content">
              <div className="testimonial-author-img">
                <img src="assets/img/testimonial/02.jpg" alt="" />
              </div>
              <div className="testimonial-author-info">
                <h5>Gordo Novak</h5>
                <p>Graphics Designer</p>
              </div>
            </div>
            <span className="testimonial-quote-icon">
              <i className="flaticon-quote-1" />
            </span>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-rate">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <div className="testimonial-quote">
              <p>
                There are many variations of passages available but the majority
                have suffered alteration in some form by injected popularity
                belief believable.
              </p>
            </div>
            <div className="testimonial-content">
              <div className="testimonial-author-img">
                <img src="assets/img/testimonial/03.jpg" alt="" />
              </div>
              <div className="testimonial-author-info">
                <h5>Parker Jimenez</h5>
                <p>Project Manager</p>
              </div>
            </div>
            <span className="testimonial-quote-icon">
              <i className="flaticon-quote-1" />
            </span>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-rate">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <div className="testimonial-quote">
              <p>
                There are many variations of passages available but the majority
                have suffered alteration in some form by injected popularity
                belief believable.
              </p>
            </div>
            <div className="testimonial-content">
              <div className="testimonial-author-img">
                <img src="assets/img/testimonial/04.jpg" alt="" />
              </div>
              <div className="testimonial-author-info">
                <h5>Sylvia H Green</h5>
                <p>Digital Marketer</p>
              </div>
            </div>
            <span className="testimonial-quote-icon">
              <i className="flaticon-quote-1" />
            </span>
          </div>
        </div>
      </div>
    </div>
    {/* testimonial-area end */}
    {/* team-area */}
    <div className="team-area">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 mx-auto wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay=".25s"
          >
            <div className="site-heading text-center">
              <span className="site-title-tagline">Our Team</span>
              <h2 className="site-title">Meet With Our Experts</h2>
              <p>We Help Companies And Candidates Find The Right Fit</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="team-item">
              <div className="team-img">
                <img src="assets/img/team/01.jpg" alt="thumb" />
              </div>
              <div className="team-content">
                <div className="team-bio">
                  <h5>
                    <a href="/">NIANGA Hussein</a>
                  </h5>
                  <span>Project Manager</span>
                </div>
                <ul className="team-social">
                  <li>
                    <a href="/">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="team-item">
              <div className="team-img">
                <img src="assets/img/team/02.jpg" alt="thumb" />
              </div>
              <div className="team-content">
                <div className="team-bio">
                  <h5>
                    <a href="/">Jeffrey Cox</a>
                  </h5>
                  <span>CEO &amp; Founder</span>
                </div>
                <ul className="team-social">
                  <li>
                    <a href="/">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="team-item">
              <div className="team-img">
                <img src="assets/img/team/03.jpg" alt="thumb" />
              </div>
              <div className="team-content">
                <div className="team-bio">
                  <h5>
                    <a href="/">Audrey Gaddis</a>
                  </h5>
                  <span>Frontend Developer</span>
                </div>
                <ul className="team-social">
                  <li>
                    <a href="/">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="team-item">
              <div className="team-img">
                <img src="assets/img/team/04.jpg" alt="thumb" />
              </div>
              <div className="team-content">
                <div className="team-bio">
                  <h5>
                    <a href="/">Rodger Garza</a>
                  </h5>
                  <span>Backend Developer</span>
                </div>
                <ul className="team-social">
                  <li>
                    <a href="/">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* team-area end */}
    {/* partner area */}
    <div className="partner-area pt-80 pb-90">
      <div className="container">
        <div className="partner-wrapper">
          <div className="partner-slider owl-carousel owl-theme">
            <div className="partner-item">
              <img src="assets/img/partner/01.png" alt="thumb" />
            </div>
            <div className="partner-item">
              <img src="assets/img/partner/02.png" alt="thumb" />
            </div>
            <div className="partner-item">
              <img src="assets/img/partner/03.png" alt="thumb" />
            </div>
            <div className="partner-item">
              <img src="assets/img/partner/04.png" alt="thumb" />
            </div>
            <div className="partner-item">
              <img src="assets/img/partner/05.png" alt="thumb" />
            </div>
            <div className="partner-item">
              <img src="assets/img/partner/06.png" alt="thumb" />
            </div>
            <div className="partner-item">
              <img src="assets/img/partner/03.png" alt="thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* partner area end */}
  </main>
  {/* footer area */}
  <footer className="footer-area">
    <div className="footer-widget">
      <div className="container">
        <div className="row footer-widget-wrapper pt-100 pb-70">
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="footer-widget-box about-us">
              <a href="/" className="footer-logo">
                <img src="assets/img/logo/logo.png" alt="" />
              </a>
              <p className="mb-4">
                We are many variations of passages available but the majority
                have suffered alteration in some form by injected.
              </p>
              <ul className="footer-contact">
                <li>
                  <a href="tel:+21236547898">
                    <i className="far fa-phone" />
                    +2 123 654 7898
                  </a>
                </li>
                <li>
                  <i className="far fa-map-marker-alt" />
                  Brazzaville,Poto-Potok
                </li>
                <li>
                  <a href="/cdn-cgi/l/email-protection#3e575058517e5b465f534e525b105d5153">
                    <i className="far fa-envelope" />
                    <span
                      className="__cf_email__"
                      data-cfemail="2a43444c456a4f524b475a464f04494547"
                    >
                      [email&nbsp;protected]
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-2">
            <div className="footer-widget-box list">
              <h4 className="footer-widget-title">Company</h4>
              <ul className="footer-list">
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Pricing Plan</a>
                </li>
                <li>
                  <a href="/">Site Map</a>
                </li>
                <li>
                  <a href="/">Security Center</a>
                </li>
                <li>
                  <a href="/">Our Team</a>
                </li>
                <li>
                  <a href="/">Latest Blog</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-2">
            <div className="footer-widget-box list">
              <h4 className="footer-widget-title">Quick Links</h4>
              <ul className="footer-list">
                <li>
                  <a href="/">Find Jobs</a>
                </li>
                <li>
                  <a href="/">Employers</a>
                </li>
                <li>
                  <a href="/">Candidates</a>
                </li>
                <li>
                  <a href="/">Post Job</a>
                </li>
                <li>
                  <a href="/">Sign In</a>
                </li>
                <li>
                  <a href="/">Sign Up</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-2">
            <div className="footer-widget-box list">
              <h4 className="footer-widget-title">Support</h4>
              <ul className="footer-list">
                <li>
                  <a href="/">Contact Us</a>
                </li>
                <li>
                  <a href="/">Faq's</a>
                </li>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Terms Of Service</a>
                </li>
                <li>
                  <a href="/">Need Help</a>
                </li>
                <li>
                  <a href="/">Live Chat</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="footer-widget-box list">
              <h4 className="footer-widget-title">Newsletter</h4>
              <div className="footer-newsletter">
                <p>Subscribe Our Newsletter To Get Latest Update And News</p>
                <div className="subscribe-form">
                  <form action="/">
                    <div className="form-group">
                      <div className="form-group-icon">
                        <i className="fe-mail" />
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                        />
                        <button className="theme-btn" type="submit">
                          <span className="fe-send" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="footer-download">
                <h5>Download</h5>
                <div className="footer-download-content">
                  <a href="/">
                    <img src="assets/img/download/google-play.png" alt="" />
                  </a>
                  <a href="/">
                    <img src="assets/img/download/app-store.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <p className="copyright-text">
              © Copyright <span id="date" /> <a href="/"> Jobox </a> All Rights
              Reserved.
            </p>
          </div>
          <div className="col-md-6 align-self-center">
            <ul className="footer-social">
              <li>
                <a href="/">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* footer area end */}
  {/* scroll-top */}
  <a href="/" id="scroll-top">
    <i className="far fa-angle-up" />
  </a>
  {/* scroll-top end */}
</>

    )
}
export default About