import React from "react";
function Index2(){
    return(
        <>
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
    {/* hero area */}
    <div className="hero-section">
      <div className="hero-single">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-6">
              <div className="hero-content">
                <h6 className="hero-sub-title">We Have 250,000+ Live Jobs</h6>
                <h1 className="hero-title">
                  Find The <span>Job Easiest</span> Way That Fits Your Life
                </h1>
                <p>
                  There are many variations of passages orem psum available but
                  the majority have suffered alteration in some form by injected
                  humour or randomised.
                </p>
                <div className="search-form">
                  <div className="search-form-wrapper">
                    <form action="/">
                      <div className="row">
                        <div className="col-md-4 px-0">
                          <div className="form-group">
                            <div className="form-group-icon">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Type Keyword..."
                              />
                              <i className="fe-search" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 px-0">
                          <div className="form-group">
                            <div className="form-group-icon">
                              <select className="select">
                                <option value="">Location</option>
                                <option value={1}>Brazil</option>
                                <option value={2}>Canada</option>
                                <option value={3}>Germany</option>
                                <option value={4}>Italy</option>
                                <option value={5}>Japan</option>
                                <option value={6}>USA</option>
                                <option value={7}>UK</option>
                              </select>
                              <i className="fe-map-pin" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 px-0">
                          <div className="form-group">
                            <div className="form-group-icon">
                              <select className="select">
                                <option value="">Category</option>
                                <option value={1}>Web Designer</option>
                                <option value={2}>Developer</option>
                                <option value={3}>Software</option>
                                <option value={4}>Finance</option>
                                <option value={5}>Management</option>
                                <option value={6}>Advertising</option>
                                <option value={7}>Accountant</option>
                              </select>
                              <i className="fe-briefcase" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 px-1">
                          <div className="form-group">
                            <button type="submit" className="theme-btn">
                              <span className="fe-search" />
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="popular-search">
                    <span>Popular Search: </span>
                    <a href="/">Web</a>,<a href="/">App</a>,
                    <a href="/">Software</a>,<a href="/">Designer</a>,
                    <a href="/">Development</a>
                  </div>
                  <div className="hero-info-box">
                    <div className="hero-info-img">
                      <span>
                        <img src="assets/img/account/01.jpg" alt="" />
                      </span>
                      <span>
                        <img src="assets/img/account/02.jpg" alt="" />
                      </span>
                      <span>
                        <img src="assets/img/account/03.jpg" alt="" />
                      </span>
                      <span>
                        <img src="assets/img/account/04.jpg" alt="" />
                      </span>
                      <span>
                        <img src="assets/img/account/05.jpg" alt="" />
                      </span>
                      <span>
                        <img src="assets/img/account/06.jpg" alt="" />
                      </span>
                    </div>
                    <div className="hero-info-content">
                      <h6>
                        <span>10k+</span> Candidates
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xl-6">
              <div className="hero-right">
                <div className="hero-img">
                  <img src="assets/img/hero/01.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* hero area end */}
    {/* category-area */}
    <div className="category-area pt-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">Our Category</span>
              <h2 className="site-title">Browse By Category</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xl-3">
            <a href="/" className="category-item">
              <div className="category-icon">
                <i className="flaticon-promotion" />
              </div>
              <div className="category-content">
                <h6>Marketing &amp; Sale</h6>
                <p>280 Jobs Available</p>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <a href="/" className="category-item">
              <div className="category-icon">
                <i className="flaticon-money-1" />
              </div>
              <div className="category-content">
                <h6>Finance</h6>
                <p>150 Jobs Available</p>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <a href="/" className="category-item">
              <div className="category-icon">
                <i className="flaticon-support-1" />
              </div>
              <div className="category-content">
                <h6>Customer Service</h6>
                <p>420 Jobs Available</p>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <a href="/" className="category-item">
              <div className="category-icon">
                <i className="flaticon-startup" />
              </div>
              <div className="category-content">
                <h6>Management</h6>
                <p>170 Jobs Available</p>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <a href="/" className="category-item">
              <div className="category-icon">
                <i className="flaticon-monitor-1" />
              </div>
              <div className="category-content">
                <h6>Software</h6>
                <p>520 Jobs Available</p>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <a href="/" className="category-item">
              <div className="category-icon">
                <i className="flaticon-graph" />
              </div>
              <div className="category-content">
                <h6>Market Research</h6>
                <p>230 Jobs Available</p>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <a href="/" className="category-item">
              <div className="category-icon">
                <i className="flaticon-vector-1" />
              </div>
              <div className="category-content">
                <h6>Design</h6>
                <p>280 Jobs Available</p>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <a href="/" className="category-item">
              <div className="category-icon">
                <i className="flaticon-first-aid-kit-1" />
              </div>
              <div className="category-content">
                <h6>Health And Care</h6>
                <p>190 Jobs Available</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* category-area end */}
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
    {/* job area */}
    <div className="job-area bg py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">Recent Jobs</span>
              <h2 className="site-title">Find Your Dream Job</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-xl-6">
            <div className="job-item">
              <a href="/" className="job-bookmark">
                <i className="fe-bookmark" />
              </a>
              <div className="job-top">
                <div className="job-img">
                  <img src="assets/img/job/01.jpg" alt="" />
                </div>
                <div className="job-title">
                  <h5>
                    <a href="/">Application Developer</a>
                  </h5>
                  <a href="/" className="job-employer">
                    <i className="far fa-building" /> Circle Pixel
                  </a>
                </div>
              </div>
              <div className="job-content">
                <ul className="job-info-list">
                  <li>
                    <i className="fe-briefcase" /> Development
                  </li>
                  <li>
                    <i className="fe-check-circle" /> Full Time
                  </li>
                  <li>
                    <i className="fe-clock" /> 2 Hour Ago
                  </li>
                  <li>
                    <i className="fe-map-pin" /> 25/B Milford Road, New York
                  </li>
                </ul>
                <div className="job-skill">
                  <a href="/">Figma</a>
                  <a href="/">Photoshop</a>
                  <a href="/">Adobe XD</a>
                </div>
              </div>
              <div className="job-bottom">
                <div className="job-salary">
                  <span className="job-salary-amount">$150 - $180</span>{" "}
                  <span className="job-salary-type">/Hour</span>
                </div>
                <a href="/" className="theme-btn">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="job-item">
              <a href="/" className="job-bookmark">
                <i className="fe-bookmark" />
              </a>
              <div className="job-top">
                <div className="job-img">
                  <img src="assets/img/job/02.jpg" alt="" />
                </div>
                <div className="job-title">
                  <h5>
                    <a href="/">Finance Manager</a>
                  </h5>
                  <a href="/" className="job-employer">
                    <i className="far fa-building" /> Turbo Finance
                  </a>
                </div>
              </div>
              <div className="job-content">
                <ul className="job-info-list">
                  <li>
                    <i className="fe-briefcase" /> Finance
                  </li>
                  <li>
                    <i className="fe-check-circle" /> Full Time
                  </li>
                  <li>
                    <i className="fe-clock" /> 2 Hour Ago
                  </li>
                  <li>
                    <i className="fe-map-pin" /> 25/B Milford Road, New York
                  </li>
                </ul>
                <div className="job-skill">
                  <a href="/">Figma</a>
                  <a href="/">Photoshop</a>
                  <a href="/">Adobe XD</a>
                </div>
              </div>
              <div className="job-bottom">
                <div className="job-salary">
                  <span className="job-salary-amount">$150 - $180</span>{" "}
                  <span className="job-salary-type">/Hour</span>
                </div>
                <a href="/" className="theme-btn">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="job-item">
              <a href="/" className="job-bookmark">
                <i className="fe-bookmark" />
              </a>
              <div className="job-top">
                <div className="job-img">
                  <img src="assets/img/job/03.jpg" alt="" />
                </div>
                <div className="job-title">
                  <h5>
                    <a href="/">Marketing Manager</a>
                  </h5>
                  <a href="/" className="job-employer">
                    <i className="far fa-building" /> Azutine Growths
                  </a>
                </div>
              </div>
              <div className="job-content">
                <ul className="job-info-list">
                  <li>
                    <i className="fe-briefcase" /> Marketing
                  </li>
                  <li>
                    <i className="fe-check-circle" /> Freelance
                  </li>
                  <li>
                    <i className="fe-clock" /> 2 Hour Ago
                  </li>
                  <li>
                    <i className="fe-map-pin" /> 25/B Milford Road, New York
                  </li>
                </ul>
                <div className="job-skill">
                  <a href="/">Figma</a>
                  <a href="/">Photoshop</a>
                  <a href="/">Adobe XD</a>
                </div>
              </div>
              <div className="job-bottom">
                <div className="job-salary">
                  <span className="job-salary-amount">$150 - $180</span>{" "}
                  <span className="job-salary-type">/Hour</span>
                </div>
                <a href="/" className="theme-btn">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="job-item">
              <a href="/" className="job-bookmark">
                <i className="fe-bookmark" />
              </a>
              <div className="job-top">
                <div className="job-img">
                  <img src="assets/img/job/04.jpg" alt="" />
                </div>
                <div className="job-title">
                  <h5>
                    <a href="/">Product Designer</a>
                  </h5>
                  <a href="/" className="job-employer">
                    <i className="far fa-building" /> Larana Inc
                  </a>
                </div>
              </div>
              <div className="job-content">
                <ul className="job-info-list">
                  <li>
                    <i className="fe-briefcase" /> Design
                  </li>
                  <li>
                    <i className="fe-check-circle" /> Internship
                  </li>
                  <li>
                    <i className="fe-clock" /> 2 Hour Ago
                  </li>
                  <li>
                    <i className="fe-map-pin" /> 25/B Milford Road, New York
                  </li>
                </ul>
                <div className="job-skill">
                  <a href="/">Figma</a>
                  <a href="/">Photoshop</a>
                  <a href="/">Adobe XD</a>
                </div>
              </div>
              <div className="job-bottom">
                <div className="job-salary">
                  <span className="job-salary-amount">$150 - $180</span>{" "}
                  <span className="job-salary-type">/Hour</span>
                </div>
                <a href="/" className="theme-btn">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="job-item">
              <a href="/" className="job-bookmark">
                <i className="fe-bookmark" />
              </a>
              <div className="job-top">
                <div className="job-img">
                  <img src="assets/img/job/05.jpg" alt="" />
                </div>
                <div className="job-title">
                  <h5>
                    <a href="/">Creative Director</a>
                  </h5>
                  <a href="/" className="job-employer">
                    <i className="far fa-building" /> Rubic Corner
                  </a>
                </div>
              </div>
              <div className="job-content">
                <ul className="job-info-list">
                  <li>
                    <i className="fe-briefcase" /> Design
                  </li>
                  <li>
                    <i className="fe-check-circle" /> Full Time
                  </li>
                  <li>
                    <i className="fe-clock" /> 2 Hour Ago
                  </li>
                  <li>
                    <i className="fe-map-pin" /> 25/B Milford Road, New York
                  </li>
                </ul>
                <div className="job-skill">
                  <a href="/">Figma</a>
                  <a href="/">Photoshop</a>
                  <a href="/">Adobe XD</a>
                </div>
              </div>
              <div className="job-bottom">
                <div className="job-salary">
                  <span className="job-salary-amount">$150 - $180</span>{" "}
                  <span className="job-salary-type">/Hour</span>
                </div>
                <a href="/" className="theme-btn">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="job-item">
              <a href="/" className="job-bookmark">
                <i className="fe-bookmark" />
              </a>
              <div className="job-top">
                <div className="job-img">
                  <img src="assets/img/job/06.jpg" alt="" />
                </div>
                <div className="job-title">
                  <h5>
                    <a href="/">Software Engineer</a>
                  </h5>
                  <a href="/" className="job-employer">
                    <i className="far fa-building" /> Mariana Cahaya
                  </a>
                </div>
              </div>
              <div className="job-content">
                <ul className="job-info-list">
                  <li>
                    <i className="fe-briefcase" /> Design
                  </li>
                  <li>
                    <i className="fe-check-circle" /> Full Time
                  </li>
                  <li>
                    <i className="fe-clock" /> 2 Hour Ago
                  </li>
                  <li>
                    <i className="fe-map-pin" /> 25/B Milford Road, New York
                  </li>
                </ul>
                <div className="job-skill">
                  <a href="/">Java</a>
                  <a href="/">Python</a>
                  <a href="/">AWS</a>
                </div>
              </div>
              <div className="job-bottom">
                <div className="job-salary">
                  <span className="job-salary-amount">$150 - $180</span>{" "}
                  <span className="job-salary-type">/Hour</span>
                </div>
                <a href="/" className="theme-btn">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="job-item">
              <a href="/" className="job-bookmark">
                <i className="fe-bookmark" />
              </a>
              <div className="job-top">
                <div className="job-img">
                  <img src="assets/img/job/07.jpg" alt="" />
                </div>
                <div className="job-title">
                  <h5>
                    <a href="/">Web Developer</a>
                  </h5>
                  <a href="/" className="job-employer">
                    <i className="far fa-building" /> Ladang Tech
                  </a>
                </div>
              </div>
              <div className="job-content">
                <ul className="job-info-list">
                  <li>
                    <i className="fe-briefcase" /> Development
                  </li>
                  <li>
                    <i className="fe-check-circle" /> Full Time
                  </li>
                  <li>
                    <i className="fe-clock" /> 2 Hour Ago
                  </li>
                  <li>
                    <i className="fe-map-pin" /> 25/B Milford Road, New York
                  </li>
                </ul>
                <div className="job-skill">
                  <a href="/">Vue Js</a>
                  <a href="/">Node Js</a>
                  <a href="/">MySql</a>
                </div>
              </div>
              <div className="job-bottom">
                <div className="job-salary">
                  <span className="job-salary-amount">$150 - $180</span>{" "}
                  <span className="job-salary-type">/Hour</span>
                </div>
                <a href="/" className="theme-btn">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="job-item">
              <a href="/" className="job-bookmark">
                <i className="fe-bookmark" />
              </a>
              <div className="job-top">
                <div className="job-img">
                  <img src="assets/img/job/08.jpg" alt="" />
                </div>
                <div className="job-title">
                  <h5>
                    <a href="/">Techincal Support</a>
                  </h5>
                  <a href="/" className="job-employer">
                    <i className="far fa-building" /> Wardiere Inc
                  </a>
                </div>
              </div>
              <div className="job-content">
                <ul className="job-info-list">
                  <li>
                    <i className="fe-briefcase" /> Design
                  </li>
                  <li>
                    <i className="fe-check-circle" /> Full Time
                  </li>
                  <li>
                    <i className="fe-clock" /> 2 Hour Ago
                  </li>
                  <li>
                    <i className="fe-map-pin" /> 25/B Milford Road, New York
                  </li>
                </ul>
                <div className="job-skill">
                  <a href="/">Figma</a>
                  <a href="/">Photoshop</a>
                  <a href="/">Adobe XD</a>
                </div>
              </div>
              <div className="job-bottom">
                <div className="job-salary">
                  <span className="job-salary-amount">$150 - $180</span>{" "}
                  <span className="job-salary-type">/Hour</span>
                </div>
                <a href="/" className="theme-btn">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* job area end */}
    {/* career-area */}
    <div className="career-area py-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="career-left">
              <div className="career-img">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <img
                      className="career-img-1"
                      src="assets/img/career/01.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      className="career-img-2"
                      src="assets/img/career/02.jpg"
                      alt=""
                    />
                    <img
                      className="career-img-3"
                      src="assets/img/career/03.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="career-right">
              <div className="site-heading mb-3">
                <span className="site-title-tagline">Career Tips</span>
                <h2 className="site-title">
                  Quick Career Tips Help You To Get <span>The Best Job</span>{" "}
                  That Fits You
                </h2>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or repeat predefined chunks as necessary repeat
                predefined chunks as which don't look even.
              </p>
              <div className="career-list">
                <ul>
                  <li>
                    <i className="far fa-check-circle" /> Take a look at our
                    round up of the best shows
                  </li>
                  <li>
                    <i className="far fa-check-circle" /> Standard chunk of used
                    is reproduced below interested
                  </li>
                  <li>
                    <i className="far fa-check-circle" /> It has roots in a
                    piece of classical literature
                  </li>
                </ul>
              </div>
              <a href="/" className="theme-btn">
                Find Your Job
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* career-area end */}
    {/* employer-area */}
    <div className="employer-area pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">Employers</span>
              <h2 className="site-title">Top Company</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="employer-item">
              <div className="employer-img">
                <img src="assets/img/job/01.jpg" alt="" />
              </div>
              <div className="employer-content">
                <h5>
                  <a href="/">Circle Pixel</a>
                </h5>
                <span className="employer-job">
                  <i className="far fa-briefcase" /> 20 - Open Jobs
                </span>
                <p>
                  <i className="far fa-location-dot" /> Milford Road, New York
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="employer-item">
              <div className="employer-img">
                <img src="assets/img/job/02.jpg" alt="" />
              </div>
              <div className="employer-content">
                <h5>
                  <a href="/">Turbo Finance</a>
                </h5>
                <span className="employer-job">
                  <i className="far fa-briefcase" /> 30 - Open Jobs
                </span>
                <p>
                  <i className="far fa-location-dot" /> Milford Road, New York
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="employer-item">
              <div className="employer-img">
                <img src="assets/img/job/03.jpg" alt="" />
              </div>
              <div className="employer-content">
                <h5>
                  <a href="/">Larana Inc</a>
                </h5>
                <span className="employer-job">
                  <i className="far fa-briefcase" /> 25 - Open Jobs
                </span>
                <p>
                  <i className="far fa-location-dot" /> Milford Road, New York
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="employer-item">
              <div className="employer-img">
                <img src="assets/img/job/04.jpg" alt="" />
              </div>
              <div className="employer-content">
                <h5>
                  <a href="/">Rubic Corner</a>
                </h5>
                <span className="employer-job">
                  <i className="far fa-briefcase" /> 45 - Open Jobs
                </span>
                <p>
                  <i className="far fa-location-dot" /> Milford Road, New York
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="employer-item">
              <div className="employer-img">
                <img src="assets/img/job/05.jpg" alt="" />
              </div>
              <div className="employer-content">
                <h5>
                  <a href="/">Mariana Cahaya</a>
                </h5>
                <span className="employer-job">
                  <i className="far fa-briefcase" /> 80 - Open Jobs
                </span>
                <p>
                  <i className="far fa-location-dot" /> Milford Road, New York
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="employer-item">
              <div className="employer-img">
                <img src="assets/img/job/06.jpg" alt="" />
              </div>
              <div className="employer-content">
                <h5>
                  <a href="/">Ladang Tech</a>
                </h5>
                <span className="employer-job">
                  <i className="far fa-briefcase" /> 120 - Open Jobs
                </span>
                <p>
                  <i className="far fa-location-dot" /> Milford Road, New York
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="employer-item">
              <div className="employer-img">
                <img src="assets/img/job/07.jpg" alt="" />
              </div>
              <div className="employer-content">
                <h5>
                  <a href="/">Wardiere Inc</a>
                </h5>
                <span className="employer-job">
                  <i className="far fa-briefcase" /> 250 - Open Jobs
                </span>
                <p>
                  <i className="far fa-location-dot" /> Milford Road, New York
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="employer-item">
              <div className="employer-img">
                <img src="assets/img/job/08.jpg" alt="" />
              </div>
              <div className="employer-content">
                <h5>
                  <a href="/">Fire Digital</a>
                </h5>
                <span className="employer-job">
                  <i className="far fa-briefcase" /> 350 - Open Jobs
                </span>
                <p>
                  <i className="far fa-location-dot" /> Milford Road, New York
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* employer-area end */}
    {/* location-area */}
    <div className="location-area bg py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">Location</span>
              <h2 className="site-title">Jobs By Location</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="location-item">
              <div className="location-img">
                <img src="assets/img/location/01.jpg" alt="" />
              </div>
              <div className="location-content">
                <h5>
                  <a href="/">Brazzaville, corniche</a>
                </h5>
                <div className="location-content-info">
                  <span className="location-vacancy">
                    <i className="far fa-briefcase" /> 50 Vacancy
                  </span>
                  <span className="location-company">
                    <i className="far fa-building" /> 120 Companies
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="location-item">
              <div className="location-img">
                <img src="assets/img/location/02.jpg" alt="" />
              </div>
              <div className="location-content">
                <h5>
                  <a href="/">Pointe-noire</a>
                </h5>
                <div className="location-content-info">
                  <span className="location-vacancy">
                    <i className="far fa-briefcase" /> 80 Vacancy
                  </span>
                  <span className="location-company">
                    <i className="far fa-building" /> 320 Companies
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-12 col-xl-6">
            <div className="location-item">
              <div className="location-img">
                <img src="assets/img/location/04.jpg" alt="" />
              </div>
              <div className="location-content">
                <h5>
                  <a href="/">Brazzaville, Centre</a>
                </h5>
                <div className="location-content-info">
                  <span className="location-vacancy">
                    <i className="far fa-briefcase" /> 60 Vacancy
                  </span>
                  <span className="location-company">
                    <i className="far fa-building" /> 250 Companies
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-12 col-xl-6">
            <div className="location-item">
              <div className="location-img">
                <img src="assets/img/location/04.jpg" alt="" />
              </div>
              <div className="location-content">
                <h5>
                  <a href="/">Brazzaville</a>
                </h5>
                <div className="location-content-info">
                  <span className="location-vacancy">
                    <i className="far fa-briefcase" /> 30 Vacancy
                  </span>
                  <span className="location-company">
                    <i className="far fa-building" /> 360 Companies
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="location-item">
              <div className="location-img">
                <img src="assets/img/location/05.jpg" alt="" />
              </div>
              <div className="location-content">
                <h5>
                  <a href="/">Brazzaville,St Anna</a>
                </h5>
                <div className="location-content-info">
                  <span className="location-vacancy">
                    <i className="far fa-briefcase" /> 190 Vacancy
                  </span>
                  <span className="location-company">
                    <i className="far fa-building" /> 520 Companies
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="location-item">
              <div className="location-img">
                <img src="assets/img/location/06.jpg" alt="" />
              </div>
              <div className="location-content">
                <h5>
                  <a href="/">Brazzaville, Sud </a>
                </h5>
                <div className="location-content-info">
                  <span className="location-vacancy">
                    <i className="far fa-briefcase" /> 110 Vacancy
                  </span>
                  <span className="location-company">
                    <i className="far fa-building" /> 350 Companies
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* location-area end */}
    {/* testimonial-area */}
    <div className="testimonial-area py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">Testimonials</span>
              <h2 className="site-title">What Our Client Say's</h2>
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
    {/* partner area */}
    <div className="partner-area bg pt-30 pb-20">
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
    {/* blog-area */}
    <div className="blog-area py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">Our Blog</span>
              <h2 className="site-title">Latest News &amp; Blog</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="blog-item">
              <div className="blog-item-img">
                <img src="assets/img/blog/01.jpg" alt="Thumb" />
              </div>
              <div className="blog-item-info">
                <h5 className="blog-title">
                  <a href="/">
                    There are many variations of the passages available suffered
                  </a>
                </h5>
                <div className="blog-item-meta">
                  <ul>
                    <li>
                      <a href="/">
                        <i className="far fa-user-circle" /> By Alicia Davis
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="far fa-calendar-alt" /> August 30, 2024
                      </a>
                    </li>
                  </ul>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
                <a href="/" className="theme-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="blog-item">
              <div className="blog-item-img">
                <img src="assets/img/blog/02.jpg" alt="Thumb" />
              </div>
              <div className="blog-item-info">
                <h5 className="blog-title">
                  <a href="/">
                    There are many variations of the passages available suffered
                  </a>
                </h5>
                <div className="blog-item-meta">
                  <ul>
                    <li>
                      <a href="/">
                        <i className="far fa-user-circle" /> By Alicia Davis
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="far fa-calendar-alt" /> August 30, 2024
                      </a>
                    </li>
                  </ul>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
                <a href="/" className="theme-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="blog-item">
              <div className="blog-item-img">
                <img src="assets/img/blog/03.jpg" alt="Thumb" />
              </div>
              <div className="blog-item-info">
                <h5 className="blog-title">
                  <a href="/">
                    There are many variations of the passages available suffered
                  </a>
                </h5>
                <div className="blog-item-meta">
                  <ul>
                    <li>
                      <a href="/">
                        <i className="far fa-user-circle" /> By Alicia Davis
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="far fa-calendar-alt" /> August 30, 2024
                      </a>
                    </li>
                  </ul>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
                <a href="/" className="theme-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* blog-area end */}
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
                  25/B Milford Road, New York
                </li>
                <li>
                  <a href="/cdn-cgi/l/email-protection#1871767e77587d60797568747d367b7775">
                    <i className="far fa-envelope" />
                    <span
                      className="__cf_email__"
                      data-cfemail="741d1a121b34110c15190418115a171b19"
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

</>

    )
}
export default Index2