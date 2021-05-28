import React, { useEffect, useState } from "react";
import Home from "../Components/Dashboard/Home";
import SideBar from "../Components/SideBar";
import Headers from "../Components/Header";
import Footer from "../Components/Footer";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import Downline from "../Components/Dashboard/Downline";
import Income from "../Components/Income/Income";

/**
 * @author
 * @function Dashboard
 **/

const Dashboard = (props) => {
  const [tronWeb, setTronWeb] = useState();
  const [lastTronWalletAddress, setTronWalletAddress] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const tronLoader = setInterval(() => {
      if (window.tronWeb && window.tronWeb.ready) {
        setTronWeb(window.tronWeb);
        clearInterval(tronLoader);
      }
    }, 500);
  }, []);

  useEffect(() => {
    if (tronWeb && tronWeb.ready) {
      setTronWalletAddress(tronWeb.defaultAddress.base58);
    }
  }, [tronWeb]);

  useEffect(() => {
    if (tronWeb && tronWeb.ready && lastTronWalletAddress) {
      let forclear = setInterval(() => {
        if (tronWeb.defaultAddress.base58 === lastTronWalletAddress) {
        } else {
          localStorage.removeItem("isAuth");
          setTronWalletAddress("");
          dispatch({
            type: "LOGOUT",
          });
          window.location.reload();
          clearInterval(forclear);
        }
      }, 1000);
    }
  }, [tronWeb, lastTronWalletAddress]);

  return (
    <div class="sb-nav-fixed">
      <Headers />
      <div id="layoutSidenav">
        <SideBar />
        <div id="layoutSidenav_content">
          <main>
            <div class="container-fluid">
              <Route exact path="/dashboard" component={Home}/>
              <Route exact path="/dashboard/downline" component={Downline}/>
              <Route exact path="/dashboard/income" >

                <Income tronWeb={tronWeb}></Income>
              </Route>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
