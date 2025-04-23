import React from "react";
function Employersingle(){
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
        <h2 className="breadcrumb-title">Employer Single</h2>
        <ul className="breadcrumb-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li className="active">Employer Single</li>
        </ul>
      </div>
      <div className="hero-shape">
        <img className="hero-shape-1" src="assets/img/shape/03.svg" alt="" />
        <img className="hero-shape-2" src="assets/img/shape/05.svg" alt="" />
        <img className="hero-shape-3" src="assets/img/shape/06.svg" alt="" />
        <img className="hero-shape-4" src="assets/img/shape/07.svg" alt="" />
      </div>
    </div>
    {/* employer-single */}
    <div className="employer-single py-120">
      <div className="container">
        <div className="employer-single-wrapper">
          <div className="row">
            <div className="col-lg-8 mb-5">
              <div className="employer-single-detail">
                <div className="employer-heading">
                  <a href="/" className="employer-bookmark">
                    <i className="fe-bookmark" />
                  </a>
                  <div className="employer-heading-content">
                    <img src="assets/img/job/01.jpg" alt="" />
                    <div className="employer-heading-info">
                      <h4>Mariana Cahaya</h4>
                      <ul className="employer-heading-list">
                        <li>
                          <i className="far fa-location-dot" /> 5/B Milford, New
                          York
                        </li>
                        <li>
                          <i className="far fa-briefcase" /> Finance
                        </li>
                        <li>
                          <i className="far fa-clock" /> Since 2024
                        </li>
                      </ul>
                      <div className="employer-heading-rate">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span>5.0 (20 Reviews)</span>
                      </div>
                      <div className="employer-heading-tag">
                        <a href="/">20 Open Jobs</a>
                        <a href="/">30 Completed Jobs</a>
                      </div>
                    </div>
                  </div>
                  <a href="/" className="theme-btn">
                    Apply For Job
                  </a>
                </div>
                <div className="mt-5">
                  <h4 className="mb-3">About Company</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                  <p className="mt-3">
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary, making this the first
                    true generator on the Internet. It uses a dictionary of over
                    200 Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words
                    etc.
                  </p>
                  <div className="employer-gallery mt-4">
                    <h4 className="mb-4">Photo Gallery</h4>
                    <div className="row popup-gallery">
                      <div className="col-md-6 col-lg-4">
                        <div className="employer-gallery-item">
                          <img src="assets/img/employer/01.jpg" alt="" />
                          <a
                            className="popup-img gallery-link"
                            href="assets/img/employer/01.jpg"
                          >
                            <i className="far fa-plus" />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="employer-gallery-item">
                          <img src="assets/img/employer/02.jpg" alt="" />
                          <a
                            className="popup-img gallery-link"
                            href="assets/img/employer/02.jpg"
                          >
                            <i className="far fa-plus" />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="employer-gallery-item">
                          <img src="assets/img/employer/03.jpg" alt="" />
                          <a
                            className="popup-img gallery-link"
                            href="assets/img/employer/03.jpg"
                          >
                            <i className="far fa-plus" />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="employer-gallery-item">
                          <img src="assets/img/employer/04.jpg" alt="" />
                          <a
                            className="popup-img gallery-link"
                            href="assets/img/employer/04.jpg"
                          >
                            <i className="far fa-plus" />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="employer-gallery-item">
                          <img src="assets/img/employer/05.jpg" alt="" />
                          <a
                            className="popup-img gallery-link"
                            href="assets/img/employer/05.jpg"
                          >
                            <i className="far fa-plus" />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="employer-gallery-item">
                          <img src="assets/img/employer/06.jpg" alt="" />
                          <a
                            className="popup-img gallery-link"
                            href="assets/img/employer/06.jpg"
                          >
                            <i className="far fa-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="job-single-info mt-2">
                  <h4 className="mb-3">Essential Knowledge &amp; Experience</h4>
                  <p className="mb-3">
                    In a free hour when our power of choice is untrammelled and
                    when nothing being able to do what we like best, every
                    pleasure is to be welcomed and every pain avoided. But in
                    certain circumstances and owing to the claims of duty or the
                    obligations of business it will frequently occur that
                    pleasures have to be repudiated and annoyances accepted.
                  </p>
                  <ul>
                    <li>
                      <i className="fad fa-check-circle" /> Nor again is there
                      anyone who loves pursues desires
                    </li>
                    <li>
                      <i className="fad fa-check-circle" /> At vero eos et
                      accusamus et iusto odio dignissimos ducimus
                    </li>
                    <li>
                      <i className="fad fa-check-circle" /> Qui blanditiis
                      praesentium voluptatum deleniti atque corrupti quos
                    </li>
                    <li>
                      <i className="fad fa-check-circle" /> Dolores et quas
                      molestias excepturi sint occaecati cupiditate
                    </li>
                    <li>
                      <i className="fad fa-check-circle" /> Harum quidem rerum
                      facilis est et expedita distinctio
                    </li>
                    <li>
                      <i className="fad fa-check-circle" /> Omnis voluptas
                      assumenda est, omnis dolor repellendus
                    </li>
                    <li>
                      <i className="fad fa-check-circle" /> Temporibus autem
                      quibusdam et aut officiis debitis aut rerum
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="mb-4">Latest Video</h4>
                  <div className="video-area">
                    <div className="container-fluid px-0">
                      <div
                        className="video-content"
                        style={{
                          backgroundImage: "url(assets/img/employer/video.jpg)"
                        }}
                      >
                        <div className="row align-items-center">
                          <div className="col-lg-12">
                            <div className="video-wrapper">
                              <a
                                className="play-btn popup-youtube"
                                href="https://www.youtube.com/watch?v=ckHzmP1evNU"
                              >
                                <i className="fas fa-play" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="employer-single-job mt-5">
                  <h4 className="mb-4">Available Jobs</h4>
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
                              <i className="fe-map-pin" />{" "}
                              Brazzaville,Poto-Potok
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
                            <span className="job-salary-amount">
                              $150 - $180
                            </span>{" "}
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
                              <i className="fe-map-pin" />{" "}
                              Brazzaville,Poto-Potok
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
                            <span className="job-salary-amount">
                              $150 - $180
                            </span>{" "}
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
                              <i className="fe-map-pin" />{" "}
                              Brazzaville,Poto-Potok
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
                            <span className="job-salary-amount">
                              $150 - $180
                            </span>{" "}
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
                              <i className="fe-map-pin" />{" "}
                              Brazzaville,Poto-Potok
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
                            <span className="job-salary-amount">
                              $150 - $180
                            </span>{" "}
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
                          <a
                            className="page-link"
                            href="/"
                            aria-label="Previous"
                          >
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
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="job-sidebar">
                <div className="employer-overview">
                  <h4>Employer Overview</h4>
                  <ul>
                    <li>
                      Primary Industry: <span>Software</span>
                    </li>
                    <li>
                      Categories: <span>Finance</span>
                    </li>
                    <li>
                      Established: <span>1990</span>
                    </li>
                    <li>
                      Employees: <span>250</span>
                    </li>
                    <li>
                      Location: <span>5/B Milford, New York</span>
                    </li>
                    <li>
                      Phone Number: <span>+2 123 654 7898</span>
                    </li>
                    <li>
                      Email:{" "}
                      <span>
                        <a
                          href="/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="3b52555d547b5e435a564b575e15585456"
                        >
                          [email&nbsp;protected]
                        </a>
                      </span>
                    </li>
                    <li>
                      Website:{" "}
                      <span>
                        <a href="/">www.marianacahaya.com</a>
                      </span>
                    </li>
                  </ul>
                  <a href="/" className="theme-btn">
                    <span className="far fa-paper-plane" /> Send Message
                  </a>
                </div>
                <div className="employer-location-map">
                  <h4>Location Map</h4>
                  <div className="location-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.759040329405195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a01c8df6fb3cb8!2sSolomon%20R.%20Guggenheim%20Museum!5e0!3m2!1sen!2sbd!4v1619410634508!5m2!1sen!2s"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="employer-social">
                  <h4>Social Link</h4>
                  <div className="employer-social-link">
                    <a href="/">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="/">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="/">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* employer-single end */}
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
                  <a href="/cdn-cgi/l/email-protection#8ae3e4ece5caeff2ebe7fae6efa4e9e5e7">
                    <i className="far fa-envelope" />
                    <span
                      className="__cf_email__"
                      data-cfemail="92fbfcf4fdd2f7eaf3ffe2fef7bcf1fdff"
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
export default Employersingle