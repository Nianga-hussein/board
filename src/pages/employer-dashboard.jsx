import React from "react";
function Employerdashboard(){
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
                  <div className="header-account">
                    <div className="dropdown">
                      <div data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="assets/img/job/04.jpg" alt="" />
                      </div>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="employer-dashboard">
                            <i className="far fa-gauge-high" /> Dashboard
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="employer-profile">
                            <i className="far fa-user-tie" /> Company Profile
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="employer-post-job">
                            <i className="far fa-paper-plane" /> Post A Job
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="employer-settings">
                            <i className="far fa-cog" /> Settings
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            <i className="far fa-sign-out" /> Log Out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
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
                    <div className="header-account">
                      <div className="dropdown">
                        <div data-bs-toggle="dropdown" aria-expanded="false">
                          <img src="assets/img/job/04.jpg" alt="" />
                        </div>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a
                              className="dropdown-item"
                              href="employer-dashboard"
                            >
                              <i className="far fa-gauge-high" /> Dashboard
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="employer-profile">
                              <i className="far fa-user-tie" /> Company Profile
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="employer-post-job"
                            >
                              <i className="far fa-paper-plane" /> Post A Job
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="employer-settings"
                            >
                              <i className="far fa-cog" /> Settings
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              <i className="far fa-sign-out" /> Log Out
                            </a>
                          </li>
                        </ul>
                      </div>
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
              <h2 className="breadcrumb-title">Dashboard</h2>
              <ul className="breadcrumb-menu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="active">Dashboard</li>
              </ul>
            </div>
            <div className="hero-shape">
              <img className="hero-shape-1" src="assets/img/shape/03.svg" alt="" />
              <img className="hero-shape-2" src="assets/img/shape/05.svg" alt="" />
              <img className="hero-shape-3" src="assets/img/shape/06.svg" alt="" />
              <img className="hero-shape-4" src="assets/img/shape/07.svg" alt="" />
            </div>
          </div>
          {/* employer-dashboard */}
          <div className="user-profile py-120">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="user-profile-sidebar">
                    <div className="user-profile-sidebar-top">
                      <div className="user-profile-img">
                        <img src="assets/img/job/04.jpg" alt="" />
                        <button type="button" className="profile-img-btn">
                          <i className="far fa-camera" />
                        </button>
                        <input type="file" className="profile-img-file" />
                      </div>
                      <h4>Rubic Corner</h4>
                      <p>Software &amp; Technology Company</p>
                    </div>
                    <ul className="user-profile-sidebar-list">
                      <li>
                        <a className="active" href="employer-dashboard">
                          <i className="far fa-gauge-high" /> Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="employer-profile">
                          <i className="far fa-user-tie" /> Company Profile
                        </a>
                      </li>
                      <li>
                        <a href="employer-post-job">
                          <i className="far fa-paper-plane" /> Post A Job
                        </a>
                      </li>
                      <li>
                        <a href="employer-manage-job">
                          <i className="far fa-briefcase" /> Manage Jobs
                        </a>
                      </li>
                      <li>
                        <a href="employer-candidate">
                          <i className="far fa-file-lines" /> All Candidates
                        </a>
                      </li>
                      <li>
                        <a href="employer-shortlisted-resume">
                          <i className="far fa-file-zipper" /> Shortlisted Resumes
                        </a>
                      </li>
                      <li>
                        <a href="employer-message">
                          <i className="far fa-envelope" /> Messages{" "}
                          <span className="badge">02</span>
                        </a>
                      </li>
                      <li>
                        <a href="employer-transaction">
                          <i className="far fa-coins" /> Transaction
                        </a>
                      </li>
                      <li>
                        <a href="employer-resume-alert">
                          <i className="far fa-bell" /> Resume Alerts{" "}
                          <span className="badge">05</span>
                        </a>
                      </li>
                      <li>
                        <a href="employer-settings">
                          <i className="far fa-cog" /> Settings
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="far fa-trash-can" /> Delete Profile
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="far fa-sign-out" /> Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="user-profile-wrapper">
                    <div className="row">
                      <div className="col-md-6 col-lg-4">
                        <div className="dashboard-widget dashboard-widget-color-1">
                          <div className="dashboard-widget-info">
                            <h1>620</h1>
                            <span>Posted Jobs</span>
                          </div>
                          <div className="dashboard-widget-icon">
                            <i className="fal fa-briefcase" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="dashboard-widget dashboard-widget-color-2">
                          <div className="dashboard-widget-info">
                            <h1>25k</h1>
                            <span>Profile Views</span>
                          </div>
                          <div className="dashboard-widget-icon">
                            <i className="fal fa-eye" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="dashboard-widget dashboard-widget-color-3">
                          <div className="dashboard-widget-info">
                            <h1>150</h1>
                            <span>Total Application</span>
                          </div>
                          <div className="dashboard-widget-icon">
                            <i className="fal fa-layer-group" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="user-profile-card">
                          <h4 className="user-profile-card-title">
                            Your Profile Views
                          </h4>
                          <div className="row">
                            <div className="col-lg-12">
                              <div id="chart" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="user-profile-card">
                          <h4 className="user-profile-card-title">Notifications</h4>
                          <div className="user-notification">
                            <div className="user-notification-item">
                              <a href="/">
                                <div className="user-notification-icon">
                                  <i className="far fa-briefcase" />
                                </div>
                                <div className="user-notification-info">
                                  <p>
                                    You Have New Application For <b>Web Designer</b>!
                                  </p>
                                  <span>just now</span>
                                </div>
                              </a>
                            </div>
                            <div className="user-notification-item">
                              <a href="/">
                                <div className="user-notification-icon">
                                  <i className="far fa-envelope" />
                                </div>
                                <div className="user-notification-info">
                                  <p>
                                    Tesla Jonsin Has Sent You <b>Private Message</b>!
                                  </p>
                                  <span>15 min ago</span>
                                </div>
                              </a>
                            </div>
                            <div className="user-notification-item">
                              <a href="/">
                                <div className="user-notification-icon">
                                  <i className="far fa-briefcase" />
                                </div>
                                <div className="user-notification-info">
                                  <p>
                                    <b>Henry Wilson</b> Applied For A Job Senior
                                    Product Designer
                                  </p>
                                  <span>2 months ago</span>
                                </div>
                              </a>
                            </div>
                            <div className="user-notification-item">
                              <a href="/">
                                <div className="user-notification-icon">
                                  <i className="far fa-comment" />
                                </div>
                                <div className="user-notification-info">
                                  <p>
                                    You Have New Review For <b>#53454</b> This List
                                  </p>
                                  <span>15 days ago</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="user-profile-card">
                          <h4 className="user-profile-card-title">
                            Recent Applicants
                          </h4>
                          <div className="user-profile-candidate">
                            <div className="row">
                              <div className="col-md-6 col-lg-6">
                                <div className="candidate-item">
                                  <div className="candidate-bio">
                                    <div className="candidate-img">
                                      <img
                                        src="assets/img/candidate/01.jpg"
                                        alt="thumb"
                                      />
                                    </div>
                                    <div className="candidate-bio-content">
                                      <h5>
                                        <a href="/">Laura Packer</a>
                                      </h5>
                                      <span>Product Designer</span>
                                      <div className="candidate-bio-rate">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <span>(560)</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="candidate-content">
                                    <p>
                                      <i className="far fa-location-dot" /> 5/B
                                      Milford Road, New York
                                    </p>
                                    <div className="candidate-skill">
                                      <a href="/">Figma</a>
                                      <a href="/">App</a>
                                      <a href="/">PSD</a>
                                      <a href="/">Adobe XD</a>
                                      <a href="/">Digital</a>
                                    </div>
                                    <div className="candidate-bottom">
                                      <div className="candidate-salary">
                                        $80 <span>/Hour</span>
                                      </div>
                                      <a href="/" className="theme-btn">
                                        View Profile
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6">
                                <div className="candidate-item">
                                  <div className="candidate-bio">
                                    <div className="candidate-img">
                                      <img
                                        src="assets/img/candidate/02.jpg"
                                        alt="thumb"
                                      />
                                    </div>
                                    <div className="candidate-bio-content">
                                      <h5>
                                        <a href="/">Shirley Grigsby</a>
                                      </h5>
                                      <span>Product Designer</span>
                                      <div className="candidate-bio-rate">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <span>(560)</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="candidate-content">
                                    <p>
                                      <i className="far fa-location-dot" /> 5/B
                                      Milford Road, New York
                                    </p>
                                    <div className="candidate-skill">
                                      <a href="/">Figma</a>
                                      <a href="/">App</a>
                                      <a href="/">PSD</a>
                                      <a href="/">Adobe XD</a>
                                      <a href="/">Digital</a>
                                    </div>
                                    <div className="candidate-bottom">
                                      <div className="candidate-salary">
                                        $80 <span>/Hour</span>
                                      </div>
                                      <a href="/" className="theme-btn">
                                        View Profile
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6">
                                <div className="candidate-item">
                                  <div className="candidate-bio">
                                    <div className="candidate-img">
                                      <img
                                        src="assets/img/candidate/03.jpg"
                                        alt="thumb"
                                      />
                                    </div>
                                    <div className="candidate-bio-content">
                                      <h5>
                                        <a href="/">Marie Choate</a>
                                      </h5>
                                      <span>Product Designer</span>
                                      <div className="candidate-bio-rate">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <span>(560)</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="candidate-content">
                                    <p>
                                      <i className="far fa-location-dot" /> 5/B
                                      Milford Road, New York
                                    </p>
                                    <div className="candidate-skill">
                                      <a href="/">Figma</a>
                                      <a href="/">App</a>
                                      <a href="/">PSD</a>
                                      <a href="/">Adobe XD</a>
                                      <a href="/">Digital</a>
                                    </div>
                                    <div className="candidate-bottom">
                                      <div className="candidate-salary">
                                        $80 <span>/Hour</span>
                                      </div>
                                      <a href="/" className="theme-btn">
                                        View Profile
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6">
                                <div className="candidate-item">
                                  <div className="candidate-bio">
                                    <div className="candidate-img">
                                      <img
                                        src="assets/img/candidate/04.jpg"
                                        alt="thumb"
                                      />
                                    </div>
                                    <div className="candidate-bio-content">
                                      <h5>
                                        <a href="/">William Hess</a>
                                      </h5>
                                      <span>Product Designer</span>
                                      <div className="candidate-bio-rate">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <span>(560)</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="candidate-content">
                                    <p>
                                      <i className="far fa-location-dot" /> 5/B
                                      Milford Road, New York
                                    </p>
                                    <div className="candidate-skill">
                                      <a href="/">Figma</a>
                                      <a href="/">App</a>
                                      <a href="/">PSD</a>
                                      <a href="/">Adobe XD</a>
                                      <a href="/">Digital</a>
                                    </div>
                                    <div className="candidate-bottom">
                                      <div className="candidate-salary">
                                        $80 <span>/Hour</span>
                                      </div>
                                      <a href="/" className="theme-btn">
                                        View Profile
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* employer-dashboard end */}
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
                        <a href="/cdn-cgi/l/email-protection#61080f070e210419000c110d044f020e0c">
                          <i className="far fa-envelope" />
                          <span
                            className="__cf_email__"
                            data-cfemail="98f1f6fef7d8fde0f9f5e8f4fdb6fbf7f5"
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
export default Employerdashboard