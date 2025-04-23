import React from "react";
function Jobgrid(){
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
    <div className="site-breadcrumb pb-5">
      <div className="container">
        <h2 className="breadcrumb-title">Job Grid</h2>
        <ul className="breadcrumb-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li className="active">Job Grid</li>
        </ul>
        <div className="search-form mt-5 mb-3">
          <div className="col-lg-9 mx-auto">
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
                      <button type="submit" className="theme-btn w-100">
                        <span className="fe-search" />
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-shape">
        <img className="hero-shape-1" src="assets/img/shape/03.svg" alt="" />
        <img className="hero-shape-2" src="assets/img/shape/05.svg" alt="" />
        <img className="hero-shape-3" src="assets/img/shape/06.svg" alt="" />
        <img className="hero-shape-4" src="assets/img/shape/07.svg" alt="" />
      </div>
    </div>
    {/* job grid */}
    <div className="job-grid py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-xl-3 mb-4">
            <div className="job-sidebar">
              <div className="job-sidebar-item">
                <h4 className="job-sidebar-title">Job Type</h4>
                <div className="job-type">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="job-type"
                      type="checkbox"
                      defaultValue={1}
                      id="job-type1"
                    />
                    <label className="form-check-label" htmlFor="job-type1">
                      Full Time Job <span>(20)</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="job-type"
                      type="checkbox"
                      defaultValue={2}
                      id="job-type2"
                    />
                    <label className="form-check-label" htmlFor="job-type2">
                      Part Time Job <span>(15)</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="job-type"
                      type="checkbox"
                      defaultValue={3}
                      id="job-type3"
                    />
                    <label className="form-check-label" htmlFor="job-type3">
                      Remote Job <span>(18)</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="job-type"
                      type="checkbox"
                      defaultValue={4}
                      id="job-type4"
                    />
                    <label className="form-check-label" htmlFor="job-type4">
                      Internship <span>(35)</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="job-type"
                      type="checkbox"
                      defaultValue={5}
                      id="job-type5"
                    />
                    <label className="form-check-label" htmlFor="job-type5">
                      Freelance <span>(49)</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="job-type"
                      type="checkbox"
                      defaultValue={6}
                      id="job-type6"
                    />
                    <label className="form-check-label" htmlFor="job-type6">
                      Temporary <span>(23)</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="job-sidebar-item">
                <h4 className="job-sidebar-title">Job Salary</h4>
                <div className="job-salary">
                  <div className="price-range-slider">
                    <div className="price-range-info">
                      <label htmlFor="priceRange1">Price:</label>
                      <input
                        type="text"
                        className="priceRange"
                        id="priceRange1"
                        readOnly=""
                      />
                    </div>
                    <div id="price-range1" className="price-range slider" />
                  </div>
                </div>
              </div>
              <div className="job-sidebar-item">
                <h4 className="job-sidebar-title">Experience Level</h4>
                <div className="job-experience">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="experience"
                      type="checkbox"
                      defaultValue={1}
                      id="experience1"
                    />
                    <label className="form-check-label" htmlFor="experience1">
                      Expert <span>(20)</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="experience"
                      type="checkbox"
                      defaultValue={2}
                      id="experience2"
                    />
                    <label className="form-check-label" htmlFor="experience2">
                      Senior <span>(15)</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="experience"
                      type="checkbox"
                      defaultValue={3}
                      id="experience3"
                    />
                    <label className="form-check-label" htmlFor="experience3">
                      Junior <span>(18)</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="experience"
                      type="checkbox"
                      defaultValue={4}
                      id="experience4"
                    />
                    <label className="form-check-label" htmlFor="experience4">
                      Regular <span>(35)</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="experience"
                      type="checkbox"
                      defaultValue={5}
                      id="experience5"
                    />
                    <label className="form-check-label" htmlFor="experience5">
                      Fresher <span>(49)</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="job-sidebar-item">
                <h4 className="job-sidebar-title">Job Posted</h4>
                <div className="job-posted">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="job-posted"
                      type="checkbox"
                      defaultValue={1}
                      id="job-posted1"
                    />
                    <label className="form-check-label" htmlFor="job-posted1">
                      All <span>(20)</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="job-posted"
                      type="checkbox"
                      defaultValue={2}
                      id="job-posted2"
                    />
                    <label className="form-check-label" htmlFor="job-posted2">
                      Last Hour <span>(15)</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="job-posted"
                      type="checkbox"
                      defaultValue={3}
                      id="job-posted3"
                    />
                    <label className="form-check-label" htmlFor="job-posted3">
                      Last 24 Hours <span>(18)</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="job-posted"
                      type="checkbox"
                      defaultValue={4}
                      id="job-posted4"
                    />
                    <label className="form-check-label" htmlFor="job-posted4">
                      Last 7 Days <span>(35)</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="job-posted"
                      type="checkbox"
                      defaultValue={5}
                      id="job-posted5"
                    />
                    <label className="form-check-label" htmlFor="job-posted5">
                      Last 30 Days <span>(49)</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="job-sidebar-item">
                <h4 className="job-sidebar-title">Candidate Gender</h4>
                <div className="candidate-gender">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="gender"
                      type="checkbox"
                      defaultValue={1}
                      id="gender1"
                    />
                    <label className="form-check-label" htmlFor="gender1">
                      Male <span>(20)</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="gender"
                      type="checkbox"
                      defaultValue={2}
                      id="gender2"
                    />
                    <label className="form-check-label" htmlFor="gender2">
                      Female <span>(15)</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-xl-9">
            <div className="col-md-12">
              <div className="job-sort">
                <h5>2,350 Results Found</h5>
                <div className="job-sort-list-grid">
                  <a className="job-sort-grid active" href="job-grid">
                    <i className="far fa-grid-2" />
                  </a>
                  <a className="job-sort-list" href="job-list">
                    <i className="far fa-list-ul" />
                  </a>
                </div>
                <div className="col-md-3 job-sort-box">
                  <select className="select">
                    <option value={1}>Sort By Default</option>
                    <option value={2}>Sort By Popular</option>
                    <option value={3}>Sort By Low Price</option>
                    <option value={4}>Sort By High Price</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
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
                        <i className="fe-map-pin" /> Brazzaville,Poto-Potok
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
              <div className="col-lg-6">
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
                        <i className="fe-map-pin" /> Brazzaville,Poto-Potok
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
              <div className="col-lg-6">
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
                        <i className="fe-map-pin" /> Brazzaville,Poto-Potok
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
              <div className="col-lg-6">
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
                        <i className="fe-map-pin" /> Brazzaville,Poto-Potok
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
              <div className="col-lg-6">
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
                        <i className="fe-map-pin" /> Brazzaville,Poto-Potok
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
              <div className="col-lg-6">
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
                        <i className="fe-map-pin" /> Brazzaville,Poto-Potok
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
              <div className="col-lg-6">
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
                        <i className="fe-map-pin" /> Brazzaville,Poto-Potok
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
              <div className="col-lg-6">
                <div className="job-item">
                  <a href="/" className="job-bookmark">
                    <i className="fe-bookmark" />
                  </a>
                  <div className="job-top">
                    <div className="job-img">
                      <img src="assets/img/job/09.jpg" alt="" />
                    </div>
                    <div className="job-title">
                      <h5>
                        <a href="/">Social Media Expert</a>
                      </h5>
                      <a href="/" className="job-employer">
                        <i className="far fa-building" /> Fire Digital
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
                        <i className="fe-map-pin" /> Brazzaville,Poto-Potok
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
              <div className="col-lg-6">
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
                        <i className="fe-alert-triangle" /> Urgent
                      </li>
                      <li>
                        <i className="fe-clock" /> 2 Hour Ago
                      </li>
                      <li>
                        <i className="fe-map-pin" /> 25/B Milford, New York
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
              <div className="col-lg-6">
                <div className="job-item">
                  <a href="/" className="job-bookmark">
                    <i className="fe-bookmark" />
                  </a>
                  <div className="job-top">
                    <div className="job-img">
                      <img src="assets/img/job/09.jpg" alt="" />
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
                        <i className="fe-alert-triangle" /> Urgent
                      </li>
                      <li>
                        <i className="fe-clock" /> 2 Hour Ago
                      </li>
                      <li>
                        <i className="fe-map-pin" /> 25/B Milford, New York
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
            {/* pagination */}
            <div className="pagination-area">
              <div aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="/" aria-label="Previous">
                      <span aria-hidden="true">
                        <i className="far fa-angle-double-left" />
                      </span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="/">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/" aria-label="Next">
                      <span aria-hidden="true">
                        <i className="far fa-angle-double-right" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pagination-showing">
                <p>Showing 1 - 6 of 24 Jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* job grid end */}
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
                  <a href="/cdn-cgi/l/email-protection#b5dcdbd3daf5d0cdd4d8c5d9d09bd6dad8">
                    <i className="far fa-envelope" />
                    <span
                      className="__cf_email__"
                      data-cfemail="036a6d656c43667b626e736f662d606c6e"
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
export default Jobgrid