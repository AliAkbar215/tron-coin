import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import './sign.css'
import {
  RegisterAction,
  AutoLoginAction,
  ViewAction,
} from "../../redux/actions";
import axios from "axios";

/**
 * @author
 * @function Login
 **/

const Login = () => {
  const dispatch = useDispatch();
  const { userWalletAddress } = useSelector((state) => state.UserReducer);
  const [referrerAdd, setReferrerAdd] = React.useState(userWalletAddress);
  let getRef = localStorage.getItem("TRON_EARN_REF");
  const [userIdForView, setUserIdForView] = React.useState(
    getRef ? getRef : ""
  );

  const RegisterFunction = () => {
    // if (referrerAdd === "") {
    //   toast.error("please enter refer address");
    // } else {
    dispatch(RegisterAction(referrerAdd));
    // }
  };

  const AutoLoginFunction = () => {
    dispatch(AutoLoginAction());
  };

  const ViewFunction = () => {
    dispatch(ViewAction(userIdForView));
  };

  return (
    <>
   

      <div class="main-wrapper">
        <div class="account-content">
          <div class="container">
            <div class="account-box">
              <div class="account-wrapper">
                <div class="account-logo">
                  <a href="#">
                    <img style={{marginTop:"4em"}}
                      src="/img/nav_logo.png"
                      alt="tronlink"
                    />
                  </a>
                </div>
                {/* <h3 class="account-title">Login</h3> */}
                <div class="form-group text-center">
                    <button
                      class="btn btn-primary account-btn"
                      type="button"
                      onClick={AutoLoginFunction}
                    >
                       {userWalletAddress ? "AUTO LOGIN" : "Loading..."}
                    </button>
                  </div>
                <p class="account-subtitle">Access to our dashboard</p>

                <div class="account-logo">
                  <a href="javascript:login(0)">
                    <img
                      src="https://tronpool.online/images/tronlink.png"
                      alt="tronlink"
                      style={{ height: "75px", width: "75px" }}
                    />
                  </a>
                  <a href="javascript:login(0)">
                    <img
                      src="https://tronpool.online/images/tronwallet.png"
                      alt="tronwallet"
                      style={{ height: "75px", width: "75px" }}
                    />
                  </a>
                  <a href="javascript:login(0)">
                    <img
                      src="https://tronpool.online/images/token-pocket.png"
                      alt="token-pocket"
                      style={{ height: "75px", width: "75px" }}
                    />

                  </a>
                  <a href="javascript:login(0)">
                    <img
                      src="https://tronpool.online/images/dapp-pocket.png"
                      alt="dapp-pocket"
                      style={{ height: "75px", width: "75px" }}
                    />
                  </a>
                </div>

                <div>
                  <div class="form-group">
                    <div class="input-group mb-3">
                     <div class="input-group-prepend">
                      <span class="input-group-text bg-transparent">
                        <i class="fa fa-users"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control pl-15 bg-transparent"
                      placeholder="View"
                      value={userIdForView}
                      onChange={(e) => {
                        setUserIdForView(e.target.value);
                      }}
                    />
                    <input
                      type="hidden"
                      name="type"
                      value="VIEW"
                      id="type"
                      readonly="true"
                    />
                     <div class="col-lg-12 ">
                    <button
                      type="submit"
                      class="btn btn-info margin-top-10"
                      onClick={ViewFunction}
                    >
                      View
                    </button>
                  </div>
                  </div>
                
                </div>

                  <div class="form-group text-center">
                    <button
                      class="btn btn-primary account-btn"
                      type="button"
                      onClick={RegisterFunction}
                    >
                       {userWalletAddress ? "REGISTER" : "Loading..."}
                    </button>
                  </div>
                  {/* <div class="account-footer">
                    <p>
                      Don't have an account yet?{" "}
                      <a href="https://tronpool.online/dashboard/register.html">
                        Register
                      </a>
                    </p>
                  </div> */}
                  {/* <div class="account-footer m-t-10">
                    <p>
                      Smart Contract Address{" "}
                      <a
                        href="#"
                        id="contractAddress"
                        style={{color: "#fc6075"}}
                        target="_blank"
                      >
                        {" "}
                      </a>
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;



   {/* <div
        class="w-100"
        style={{
          width: "100%",
          background: 'url("https://tronsquire.io/images/bg-2-1.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            alignItems: "center",
          }}
        >
          <div
            className="set_login_width_style"
            style={{
              backgroundColor: "white",
              width: "40%",
              borderRadius: "10px",
              textAlign: "center",
              padding: 30,
            }}
           >
            <div>
              <h2 style={{ fontSize: 20, marginBottom: 20 }}>
                Register OR AutoLogin
              </h2>

              <div class="row" style={{ marginTop: 20 }}>
                <div
                  class="col-lg-6 col-xs-12 text-center"
                  style={{ marginTop: 10, marginBottom: 10 }}
                >
                  <button
                    type="submit"
                    class="btn btn-info margin-top-10"
                    onClick={RegisterFunction}
                  >
                    {userWalletAddress ? "REGISTER" : "Loading..."}
                  </button>
                </div>
                <div
                  class="col-lg-6 col-xs-12 text-center"
                  style={{ marginTop: 10, marginBottom: 10 }}
                >
                  <button
                    type="submit"
                    class="btn btn-info margin-top-10"
                    onClick={AutoLoginFunction}
                  >
                    {userWalletAddress ? "AUTO LOGIN" : "Loading..."}
                  </button>
                </div>
                <div class="col-lg-12" style={{ marginTop: 20 }}>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text bg-transparent">
                        <i class="fa fa-users"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control pl-15 bg-transparent"
                      placeholder="View"
                      value={userIdForView}
                      onChange={(e) => {
                        setUserIdForView(e.target.value);
                      }}
                    />
                    <input
                      type="hidden"
                      name="type"
                      value="VIEW"
                      id="type"
                      readonly="true"
                    />
                  </div>
                  <div class="col-lg-12">
                    <button
                      type="submit"
                      class="btn btn-info margin-top-10"
                      onClick={ViewFunction}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    */}