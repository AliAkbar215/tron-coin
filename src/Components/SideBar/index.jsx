import React from "react";
import { Link } from "react-router-dom";

/**
 * @author
 * @function SideBar
 **/

const SideBar = (props) => {
  return (
    <div id="layoutSidenav_nav">
      <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div class="sb-sidenav-menu">
          <div class="nav">
            <div class="sb-sidenav-menu-heading"></div>
            <Link class="nav-link" to="/dashboard">
              <div class="sb-nav-link-icon">
                <i class="fas fa-tachometer-alt"></i>
              </div>
              Dashboard
            </Link>
            <Link class="nav-link" to="/dashboard/downline">
              <div class="sb-nav-link-icon">
                <i class="fas fa-tachometer-alt"></i>
              </div>
              Downline
            </Link>
            <a class="nav-link" href="#business">
              <div class="sb-nav-link-icon">
                <i class="fas fa-tachometer-alt"></i>
              </div>
              Business Plan
            </a>

            <a class="nav-link" href="#global">
              <div class="sb-nav-link-icon">
                <i class="fas fa-tachometer-alt"></i>
              </div>
              Global Community
            </a>

            <a class="nav-link" href="#smart">
              <div class="sb-nav-link-icon">
                <i class="fas fa-tachometer-alt"></i>
              </div>
              Smart Matrix
            </a>

            <a class="nav-link" href="#silver">
              <div class="sb-nav-link-icon">
                <i class="fas fa-tachometer-alt"></i>
              </div>
              Silver Matrix
            </a>

            <a class="nav-link" href="#gold">
              <div class="sb-nav-link-icon">
                <i class="fas fa-tachometer-alt"></i>
              </div>
              Gold Matrix
            </a>

            <a class="nav-link" href="#royal">
              <div class="sb-nav-link-icon">
                <i class="fas fa-tachometer-alt"></i>
              </div>
              Royal Matrix
            </a>

            <a class="nav-link" href="#crown">
              <div class="sb-nav-link-icon">
                <i class="fas fa-tachometer-alt"></i>
              </div>
              Crown Matrix
            </a>
            {/* dashboard/income */}
            <Link class="nav-link" to="/dashboard/income">
              <div class="sb-nav-link-icon">
                <i class="fas fa-tachometer-alt"></i>
              </div>
                      Income
            </Link>
            {/* <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapsePages"
              aria-expanded="false"
              aria-controls="collapsePages"
            >
              <div class="sb-nav-link-icon">
                <i class="fas fa-book-open"></i>
              </div>
              Downlines
            </a> */}
            {/* <div
              class="collapse"
              id="collapsePages"
              aria-labelledby="headingTwo"
              data-parent="#sidenavAccordion"
            >
              <nav
                class="sb-sidenav-menu-nested nav accordion"
                id="sidenavAccordionPages"
              >
                <a
                  class="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#pagesCollapseAuth"
                  aria-expanded="false"
                  aria-controls="pagesCollapseAuth"
                >
                  Authentication
                  <div class="sb-sidenav-collapse-arrow">
                    <i class="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  class="collapse"
                  id="pagesCollapseAuth"
                  aria-labelledby="headingOne"
                  data-parent="#sidenavAccordionPages"
                >
                  <nav class="sb-sidenav-menu-nested nav">
                    <a class="nav-link" href="login.html">
                      Login
                    </a>
                    <a class="nav-link" href="register.html">
                      Register
                    </a>
                    <a class="nav-link" href="password.html">
                      Forgot Password
                    </a>
                  </nav>
                </div>
                <a
                  class="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#pagesCollapseError"
                  aria-expanded="false"
                  aria-controls="pagesCollapseError"
                >
                  Error
                  <div class="sb-sidenav-collapse-arrow">
                    <i class="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  class="collapse"
                  id="pagesCollapseError"
                  aria-labelledby="headingOne"
                  data-parent="#sidenavAccordionPages"
                >
                  <nav class="sb-sidenav-menu-nested nav">
                    <a class="nav-link" href="401.html">
                      401 Page
                    </a>
                    <a class="nav-link" href="404.html">
                      404 Page
                    </a>
                    <a class="nav-link" href="500.html">
                      500 Page
                    </a>
                  </nav>
                </div>
              </nav>
            </div> */}
            {/* <div class="sb-sidenav-menu-heading">Addons</div> */}
            {/* <a class="nav-link" href="charts.html">
              <div class="sb-nav-link-icon">
                <i class="fas fa-chart-area"></i>
              </div>
              Charts
            </a> */}
            {/* <a class="nav-link" href="tables.html">
              <div class="sb-nav-link-icon">
                <i class="fas fa-table"></i>
              </div>
              Tables
            </a> */}
          </div>
        </div>
        <div class="sb-sidenav-footer">
          <div class="small">Logged in as:</div>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
