import React, { Component } from "react";

export default class LeftNav extends Component {
  render() {
    return (
      <div>
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
            CMMS
          </a>
          <button
            className="navbar-toggler position-absolute d-md-none collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <input
            className="form-control form-control-dark w-100"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <a className="nav-link active" aria-current="page" href>
                <span data-feather="home"></span>
                Sign out
              </a>
            </div>
          </div>
        </header>

        <div className="container-fluid">
          <div className="row">
            <nav
              id="sidebarMenu"
              class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
            >
              <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/Dashboard"
                    >
                      <span data-feather="home"></span>
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Assets">
                      <span data-feather="file"></span>
                      Assets
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Reports">
                      <span data-feather="shopping-cart"></span>
                      Reports
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/Users">
                      <span data-feather="layers"></span>
                      Users
                    </a>
                  </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                  <span>Saved reports</span>
                  <a
                    className="link-secondary"
                    href="#"
                    aria-label="Add a new report"
                  >
                    <span data-feather="plus-circle"></span>
                  </a>
                </h6>
                <ul className="nav flex-column mb-2">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="file-text"></span>
                      Current month
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="file-text"></span>
                      Last quarter
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="file-text"></span>
                      Social engagement
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="file-text"></span>
                      Year-end sale
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
