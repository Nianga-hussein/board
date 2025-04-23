import React from "react";
function Candidatesettings(){
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
                  <img src="assets/img/candidate/01.jpg" alt="" />
                </div>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a
                      className="dropdown-item"
                      href="candidate-dashboard"
                    >
                      <i className="far fa-gauge-high" /> Dashboard
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="candidate-profile">
                      <i className="far fa-user-tie" /> My Profile
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="candidate-applied-job"
                    >
                      <i className="far fa-briefcase" /> Applied Jobs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="candidate-settings">
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
                    <img src="assets/img/candidate/01.jpg" alt="" />
                  </div>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a
                        className="dropdown-item"
                        href="candidate-dashboard"
                      >
                        <i className="far fa-gauge-high" /> Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="candidate-profile"
                      >
                        <i className="far fa-user-tie" /> My Profile
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="candidate-applied-job"
                      >
                        <i className="far fa-briefcase" /> Applied Jobs
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="candidate-settings"
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
        <h2 className="breadcrumb-title">Settings</h2>
        <ul className="breadcrumb-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li className="active">Settings</li>
        </ul>
      </div>
      <div className="hero-shape">
        <img className="hero-shape-1" src="assets/img/shape/03.svg" alt="" />
        <img className="hero-shape-2" src="assets/img/shape/05.svg" alt="" />
        <img className="hero-shape-3" src="assets/img/shape/06.svg" alt="" />
        <img className="hero-shape-4" src="assets/img/shape/07.svg" alt="" />
      </div>
    </div>
    {/* candidate-settings */}
    <div className="user-profile py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="user-profile-sidebar">
              <div className="user-profile-sidebar-top">
                <div className="user-profile-img">
                  <img src="assets/img/candidate/01.jpg" alt="" />
                  <button type="button" className="profile-img-btn">
                    <i className="far fa-camera" />
                  </button>
                  <input type="file" className="profile-img-file" />
                </div>
                <h4>Laura Packer</h4>
                <p>Full Stack Web Developer</p>
              </div>
              <ul className="user-profile-sidebar-list">
                <li>
                  <a href="candidate-dashboard">
                    <i className="far fa-gauge-high" /> Dashboard
                  </a>
                </li>
                <li>
                  <a href="candidate-profile">
                    <i className="far fa-user-tie" /> My Profile
                  </a>
                </li>
                <li>
                  <a href="candidate-resume">
                    <i className="far fa-file-lines" /> My Resume
                  </a>
                </li>
                <li>
                  <a href="candidate-applied-job">
                    <i className="far fa-briefcase" /> Applied Jobs
                  </a>
                </li>
                <li>
                  <a href="candidate-shortlisted-job">
                    <i className="far fa-layer-group" /> Shortlisted Jobs
                  </a>
                </li>
                <li>
                  <a href="candidate-cv-manager">
                    <i className="far fa-file-zipper" /> CV Manager
                  </a>
                </li>
                <li>
                  <a href="candidate-saved-job">
                    <i className="far fa-bookmark" /> Saved Jobs
                  </a>
                </li>
                <li>
                  <a href="candidate-message">
                    <i className="far fa-envelope" /> Messages{" "}
                    <span className="badge">02</span>
                  </a>
                </li>
                <li>
                  <a href="candidate-transaction">
                    <i className="far fa-coins" /> Transaction
                  </a>
                </li>
                <li>
                  <a href="candidate-job-alert">
                    <i className="far fa-bell" /> Job Alerts{" "}
                    <span className="badge">05</span>
                  </a>
                </li>
                <li>
                  <a className="active" href="candidate-settings">
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
              <div className="col-lg-12 mb-4">
                <div className="user-profile-card">
                  <h4 className="user-profile-card-title">
                    Update Profile Info
                  </h4>
                  <div className="profile-form">
                    <form action="/">
                      <div className="row">
                        <h6 className="mb-3">Basic Info</h6>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Full Name</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Laura Packer"
                              placeholder="Full Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Email</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="laurapacker@example.com"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Contact Number</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="+2 134 562 458"
                              placeholder="Contact Number"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Personal Website</label>
                            <input
                              type="url"
                              className="form-control"
                              defaultValue="www.example.com"
                              placeholder="Personal Website"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Age</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={35}
                              placeholder="Age"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Gender</label>
                            <select className="select">
                              <option value="">Choose Gender</option>
                              <option value={1}>Male</option>
                              <option selected="" value={2}>
                                Female
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Education Level</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Master Degree"
                              placeholder="Education Level"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Language</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="English, German"
                              placeholder="Language"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Job Category</label>
                            <select className="select">
                              <option value="">Choose Category</option>
                              <option value={1}>Web Designer</option>
                              <option value={2}>Developer</option>
                              <option value={3} selected="">
                                IT &amp; Software
                              </option>
                              <option value={4}>Finance</option>
                              <option value={5}>Management</option>
                              <option value={6}>Advertising</option>
                              <option value={7}>Accountant</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Experience</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={4}
                              placeholder="Experience"
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Date Of Birth</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="21 August, 1986"
                              placeholder="Date Of Birth"
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Current Salary</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="$50k - $60k"
                              placeholder="Current Salary"
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Expected Salary</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="$70k - $85k"
                              placeholder="Expected Salary"
                            />
                          </div>
                        </div>
                        <h6 className="mb-3">Key Skills</h6>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Skills (Max 10 Skills)</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Figma, Adobe XD, Next Js, React Js, App, Node Js"
                              placeholder="Skills"
                            />
                          </div>
                        </div>
                        <h6 className="mb-3">Bio</h6>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>About You</label>
                            <textarea
                              className="form-control"
                              cols={30}
                              rows={3}
                              placeholder="Write About You"
                              defaultValue={
                                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                              }
                            />
                          </div>
                        </div>
                        <h6 className="mb-3">Contact Info</h6>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Country</label>
                            <select className="select">
                              <option value="">Choose Country</option>
                              <option value={1}>Australia</option>
                              <option value={2}>Germany</option>
                              <option value={3}>Canada</option>
                              <option value={4} selected="">
                                United States
                              </option>
                              <option value={5}>United Kingdom</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>City</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="New York"
                              placeholder="City"
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>State</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Arizona"
                              placeholder="State"
                            />
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="form-group">
                            <label>Zip Code</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={85001}
                              placeholder="Zip Code"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Full Address</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="25/B Milford Road, AZ 85001, New York, USA"
                              placeholder="Full Address"
                            />
                          </div>
                        </div>
                        <h6 className="mb-3">Social Network</h6>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Facebook URL</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="https://www.facebook.com/"
                              placeholder="https://www.facebook.com/"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Twitter URL</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="https://www.twitter.com/"
                              placeholder="https://www.twitter.com/"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Linkedin URL</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="https://www.linkedin.com/"
                              placeholder="https://www.linkedin.com/"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Pinterest URL</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="https://www.pinterest.com/"
                              placeholder="https://www.pinterest.com/"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Whatsapp URL</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="https://www.whatsapp.com"
                              placeholder="https://www.whatsapp.com/"
                            />
                          </div>
                        </div>
                      </div>
                      <button type="button" className="theme-btn mt-4">
                        Update Profile Info <i className="far fa-user" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="user-profile-card">
                  <h4 className="user-profile-card-title">Change Password</h4>
                  <div className="col-lg-12">
                    <div className="profile-form">
                      <form action="/">
                        <div className="form-group">
                          <label>Old Password</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Old Password"
                          />
                        </div>
                        <div className="form-group">
                          <label>New Password</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="New Password"
                          />
                        </div>
                        <div className="form-group">
                          <label>Re-Type Password</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Re-Type Password"
                          />
                        </div>
                        <button type="button" className="theme-btn mt-4">
                          Change Password <i className="far fa-key" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* candidate-settings end */}
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
                  <a href="/cdn-cgi/l/email-protection#60090e060f200518010d100c054e030f0d">
                    <i className="far fa-envelope" />
                    <span
                      className="__cf_email__"
                      data-cfemail="a0c9cec6cfe0c5d8c1cdd0ccc58ec3cfcd"
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
export default Candidatesettings