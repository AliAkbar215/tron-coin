import React from "react";
import { useSelector } from "react-redux";
import svg from "../UI/ui/like.svg";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import PdfPlan from "../Components/assets/pdfPlan/TronEarns.pdf";
import Question from "./Question";


export default function Header() {

      
   
  const ToggleMenues = () => {
    let ele = document.getElementsByClassName("coinz-page-content-fullwidth");
    ele[0].style.opacity = "0.4";

    let doc = document.getElementById("coinz-side-menu");

    doc.style.display = "block";
    doc.style.left = "0";
  };

  const cloSEbar = () => {
    let ele = document.getElementsByClassName("coinz-page-content-fullwidth");
    ele[0].style.opacity = "1";
    let doc = document.getElementById("coinz-side-menu");

    doc.style.display = "none";
    doc.style.left = "-30";
  };

  return (
    <div className="home page-template page-template-templates page-template-template-full-width page-template-templatestemplate-full-width-php page page-id-4446 page-child parent-pageid-10 woocommerce-no-js wpb-js-composer js-comp-ver-5.4.7 vc_responsive">
      <div class="main-wrapper">
        <div id="header">
          <div id="header-ticker-holder" class=" ">
            <div class="container">
              <div id="header-ticker-wrapper"></div>
            </div>
          </div>
          <div id="header-nav-holder" class="coinzfactory-default">
            <div class="header-nav header-nav-default header-nav-fixed">
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  margin: "0px auto",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div class="logo-main" style={{ flex: "1 1 10%" }}>
                  <a class="logo-wrapper">
                    <img src="logo.png" class="lgo" />
                  </a>
                </div>

                <div class="coinz-menu-wrapper" style={{ flex: "1 1 47%" }}>
                  <a
                    href="#coinz-side-menu"
                    class="coinz-trigger icon-mobile-menu "
                    id="mobile-menu"
                    onClick={ToggleMenues}
                  >
                    <span class="icon-wrap coinz-middle-line"></span>
                    <span class="icon-wrap coinz-top-line"></span>
                    <span class="icon-wrap coinz-bottom-line"></span>
                  </a>
                </div>

                <ul
                  className="navUl"
                  style={{
                    display: "flex",
                    flex: 3,
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <li class="menu-item  menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children   ">
                    <a class="menu-button-4445 ">
                      <span>Home</span>
                    </a>
                  </li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children   td-menu-item-4458">
                    <a class="menu-button-4458 ">
                      <span>About </span>
                    </a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page   td-menu-item-4469">
                    <a class="menu-button-4469 ">
                      <span>Contact</span>
                    </a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page   td-menu-item-4495">
                    <a class="menu-button-4495" href="#how-it-works">
                      <span>How it works</span>
                    </a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page   td-menu-item-4495">
                    <a class="menu-button-4495" href="#faq">
                      <span>FAQ</span>
                    </a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page   td-menu-item-4495">
                    <a class="menu-button-4495 " href={PdfPlan} download>
                      <span>Download</span>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        <div class="coinz-content-wrapper">
          <div class="">
            <div class="coinz-page-content-fullwidth  " onClick={cloSEbar}>
              <div class="overflow" style={{ display: "block" }}>
              <Fade top>
           
                <div class="main">
                  <div class="container relative clearfix">
                    <div class="main-section-right">
                      <div class="main-section-right-top">
                        <script
                          type="text/javascript"
                          src="https://files.coinmarketcap.com/static/widget/currency.js"
                        ></script>
                        <div
                          class="coinmarketcap-currency-widget"
                          data-currencyid="1958"
                          data-base="USD"
                          data-secondary=""
                          data-ticker="false"
                          data-rank="false"
                          data-marketcap="false"
                          data-volume="false"
                          data-statsticker="true"
                          data-stats="USD"
                        ></div>
                        <div class="main-section-right-bottom"></div>
                      </div>
                    </div>
                    <div class="city1">
                      <img src="/img/city.svg" alt="" style={{width:"100%",height:"100%"}} />
                    </div>
                    <div class="main-section-left" >
                      <h1>
                        TronEarn<span>.</span>Live
                      </h1>
                      <Link
                        className="btn bg "
                        id="logBtn"
                        to="/login"
                        title="Try Demo"
                      >
                        Login
                      </Link>
                      
                    </div>
                    
                    <div class="statistics">
                      <div class="statistics-block">
                        <span>900 TRX</span>
                        <p>Registration</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                </Fade>
                <div class=" container ">
                  <div class="worldwide">
                    <div class="column">
                      <div class="worldwide-title">
                        WORLDWIDE DECENTERLIZE BASE
                      </div>
                      <div class="worldwide-block">
                        {/* <b>Donate 20 TRX Earn 245,640+ TRX</b> */}
                        <p>Attractive Direct Income</p>
                        <p>12 Super Base Income</p>
                        <p>Infinite Time Limit</p>
                      </div>
                      <div class="worldwide-block">
                        <b>Entry With 900 TRX</b>
                        <p>Registration With 20 TRX</p>
                        <p>Buy Base 1 With 20 TRX</p>
                        <p>Do Unlimited Direct Referrals</p>
                      </div>
                    </div>
                    <div class="column">
                      <div class="worldwide-title">TRON BLOCKCHAIN SYSTEM</div>
                      <div class="worldwide-block">
                        <b>No Hacking</b>
                        <p>Secured System.</p>
                        <p>Decentralized</p>
                        <p>Transparent</p>
                      </div>
                      <div class="worldwide-block">
                        <b>Detailed Note</b>
                        <p>
                          Start Referring Members, Get 900 TRX For Direct
                          Referral
                        </p>
                        <p>Enter In Bases And Get Donations</p>
                        <p>
                          Get Base Income On First Come And First Serve Basics
                        </p>
                      </div>
                    </div>
                    <div class="cube">
                      <img src="/img/icons/cube.svg" alt="" />
                    </div>
                  </div>
                  <div id="how-to-start" class="how-to-start">
                    <div class="how-to-start-img">
                      <img src="/img/how-to-start.svg" alt="" />
                    </div>
                    <h2>
                      How To Start One Line
                      <br /> Worldwide Base ?
                    </h2>
                    <div class="how-to-start-block">
                      <b>LET’S START UNSTOPPABLE TronEarn.live</b>
                    </div>
                    <div class="how-to-start-block">
                      <b>INSTANT P2P MULTI PAYMENTS</b>
                      <p>
                        Startup Amount instantly distributed according to smart
                        contract protocols as direct income above the joined
                        users according to Line of sponsors.
                      </p>
                    </div>
                    <div class="cube2">
                      <img src="/img/icons/cube2.svg" alt="" />
                    </div>
                    <div class="cube3">
                      <img src="/img/icons/cube3.svg" alt="" />
                    </div>

                  </div>
                  <div id="how-it-works" class="how-it-works">
                    <div class="how-it-works-img">
                      <img src="/img/how-it-works.svg" alt="" />
                    </div>
                    <div class="how-it-works-content">
                      <h3>How It Works</h3>
                      <ul>
                        <li>WorldWide One line (Matrix 2x2) structure.</li>
                        <li>
                          Every new user will be placed under previous joined
                          user according to Base Entry amount transaction
                          ’Timestamp.’
                        </li>
                        <li>
                          Timestamp : It is recorded by the Tron Blockchain that
                          gives the received time of the respective
                          transactions.
                        </li>
                        <li>
                          One Line : Every new user pays entry amount to
                          previous joined user 100% from user’s wallet to user’s
                          wallet. (Pee to peer )
                        </li>
                        <li>
                          TigersTron Base : One line Base structure is
                          irrespective to referral line or sponsors line. Hence
                          this is real One line WorldWide Base system gives
                          opportunity to earn passive income by TigersTron
                          growth of Unstoppable ‘TigersTron’
                        </li>
                        <li>
                          Pool Entry Protocols : Base 1 to 12 entry protocols
                          are deployed and written on smart contract code.
                        </li>
                        <li>
                          Every New user starts from Base 1. It’s mandatory to
                          enter new Base in connective way.
                        </li>
                        <li>
                          Base one line structure is based on first enter first
                          get paid protocol.
                        </li>
                      </ul>
                    </div>
                    <div class="cube4">
                      <img src="/img/icons/cube4.svg" alt="" />
                    </div>
                  </div>
                  
                  <div class="referral-income">
                    <div class="column">
                      <h3>Referral Income</h3>
                      <p>TronEarn.live is having 12 Worldwide A/</p>
                    </div>
                  </div>
                  <div class="real-one-line">
                    <h4>
                      Real One Line Worldwide 12
                      <br /> Bases
                    </h4>
                    <p>
                      Worldwide One line base is connected to each other in
                      consecutive
                      <br /> way. From 1 to 12 Autopools multiply your 20 TRX to
                      245,640 TRX
                    </p>

                    <p>
                      ! 12 REAL ONE LINE WORLDWIDE BASES ! ! CONVERT 20 TO
                      245,640 TRX !
                    </p>
                  </div>

                  <Question />

                  <div id="contract" class="smart-contract">
                    <div class="smart-contract-title">
                      Smart Contract Address
                    </div>
                    <p>
                      A contract paper is an authoritative report or guide that
                      informs readers concisely about a complex issue and
                      presents the issuing body's philosophy on the matter. It
                      is meant to help readers understand an issue, solve a
                      problem, or make a decision.
                    </p>
                    <a
                      href="https://tronscan.org/#/contract/TQPJS5zEdMV6JxVUfo93HbYYBVG6Dm2dwo/code"
                      target="_blank"
                      class="btn view"
                    >
                      View
                    </a>
                    <div class="cube5">
                      <img src="/img/icons/cube5.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="coinz-side-menu" class="coinz-side-menu">
          <div class="coinz-side-top">
            <div class="logo-for-panel">
              <a class="blog-logo-image light-logo" href="#" rel="home">
                <img src="wp-content/logo-header.png" />{" "}
              </a>
            </div>
          </div>

          <div class="coinz-side-inner">
            <ul class="coinz-side-inner-menu">
              <li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children   td-menu-item-4445">
                <a class="menu-button-4445 ">
                  <span>Home</span>
                </a>
              </li>
              <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children   td-menu-item-4458">
                <a class="menu-button-4458 ">
                  <span>About </span>
                </a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page   td-menu-item-4469">
                <a class="menu-button-4469 ">
                  <span>Contact</span>
                </a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page   td-menu-item-4495">
                <a class="menu-button-4495" href="#how-it-works">
                  <span>How it works</span>
                </a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page   td-menu-item-4495">
                <a class="menu-button-4495" href="#faq" >
                  <span>Faq</span>
                </a>
              </li>
              <li
                id="menu-item-4491"
                class="coinz-cta-v2 menu-item menu-item-type-custom menu-item-object-custom menu-item-4491"
              >
                <a href={PdfPlan} download>
                  Download
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
