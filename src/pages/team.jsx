import React from "react";
function Team(){
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
        <h2 className="breadcrumb-title">Our Team</h2>
        <ul className="breadcrumb-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li className="active">Our Team</li>
        </ul>
      </div>
      <div className="hero-shape">
        <img className="hero-shape-1" src="assets/img/shape/03.svg" alt="" />
        <img className="hero-shape-2" src="assets/img/shape/05.svg" alt="" />
        <img className="hero-shape-3" src="assets/img/shape/06.svg" alt="" />
        <img className="hero-shape-4" src="assets/img/shape/07.svg" alt="" />
      </div>
    </div>
    {/* team-area */}
    <div className="team-area py-120">
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
                  <a href="/cdn-cgi/l/email-protection#d7beb9b1b897b2afb6baa7bbb2f9b4b8ba">
                    <i className="far fa-envelope" />
                    <span
                      className="__cf_email__"
                      data-cfemail="523b3c343d12372a333f223e377c313d3f"
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
                    <img src="assets" alt="" />
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
export default Team