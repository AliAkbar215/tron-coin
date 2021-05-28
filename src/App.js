import logo from "./logo.svg";
import React from "react";
import $ from "jquery";
import "./App.css";
import Home from "./mainApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route } from "react-router-dom";
import "./UI/ui/ui8d.css";
import './UI/ui/styles1.css';
 
function App() {
  React.useEffect(() => {
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function () {
      if (this.href === path) {
        $(this).addClass("active");
      }
    });

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function (e) {
      e.preventDefault();
      $("body").toggleClass("sb-sidenav-toggled");
    });
  }, []);

  React.useEffect(() => {
    if (window.location.href.includes("?ref=")) {
      let getAddress = window.location.href.split("?ref=")[1];
      let final = getAddress.slice(0, 42);
      localStorage.setItem("TRON_EARN_REF", final);
    }
  }, []);

  
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
