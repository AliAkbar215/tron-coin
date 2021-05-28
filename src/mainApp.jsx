import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Login from "./Components/Auth/signIn";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { UserDataAction, CheckCurrentUser } from "./redux/actions";
import LandingPage from "./views/Header";
import CircleLoader from "react-spinners/CircleLoader";
import { css } from "@emotion/core";

/**
 * @author
 * @function MainApp
 **/

const AuthRoute = ({ component: Component, authUser, ...rest }) => (
  <Route
    path="/dashboard"
    // exact
    render={(props) =>
      !authUser ? (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      ) : (
          //  || isDemo
          <Component {...props} />
        )
    }
  />
);

const MainApp = () => {
  
  const { isUserAuthenticated, checkAuth,userWalletAddress } = useSelector(
    (state) => state.UserReducer
  );

  const [tronWeb, setTronWeb] = React.useState();
  const dispatch = useDispatch();
  const [auth, setAuth] = useState();

  let isAuth = localStorage.getItem("isAuth");
  React.useEffect(() => {
    const tronLoader = setInterval(() => {
      if (window.tronWeb && window.tronWeb.ready) {
        setTronWeb(window.tronWeb);
        clearInterval(tronLoader);
        setAuth(isAuth ? isAuth : false);
      } else {
        dispatch({
          type: "AUTH_FAILED",
        });
      }
    }, 500);
  }, []);

  // console.log("here is the auth",auth);
  
  React.useEffect(() => {
    if (tronWeb && auth) {
      dispatch(CheckCurrentUser(tronWeb.defaultAddress.base58, tronWeb, auth));
    } else if (auth != undefined) {
      dispatch({
        type: "AUTH_FAILED",
      });
    }
  }, [tronWeb, auth]);

  React.useEffect(() => {
    if (tronWeb) {
      if (isUserAuthenticated) {
       let endInterval= setInterval(() => {
          dispatch(UserDataAction(userWalletAddress, tronWeb, auth));
          clearInterval(endInterval);

        }, 3000);
        
      }
    }
  }, [tronWeb,isUserAuthenticated,userWalletAddress]);

  React.useEffect(() => {
    if (tronWeb) {
      dispatch(UserDataAction(tronWeb.defaultAddress.base58, tronWeb, auth));
    }
  }, [tronWeb]);

  const override = css`
    display: block;
    margin-top: 20%;
    margin-left: 45%;
    border-color: red;
  `;

  const [loading, setLoading] = useState(true);

  if (checkAuth ==null) {
    return (
      <CircleLoader color="red" loading={loading} css={override} size={100} />
    );
  } else
    return (
      <>
        <Route exact path="/" component={LandingPage} />
        <AuthRoute authUser={isUserAuthenticated} component={Dashboard} />
        <Route
          exact
          path="/login"
          component={() =>
            isUserAuthenticated ? <Redirect to="/dashboard" /> : <Login />
          }
        />
      </>
    );
};

export default MainApp;
