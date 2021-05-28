import React, { useState } from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { useSelector, useDispatch } from "react-redux";
import {Link} from 'react-router-dom'

import {
  smartMatrixAction,
  smartMatrixLevel2Action,
  silverMatrixAction,
  silverMatrixLevel2Action,
  goldMatrixAction,
  goldMatrixLevel2Action,
  royalMatrixAction,
  royalMatrixLevel2Action,
  crownMatrixAction,
  crownMatrixLevel2Action,
} from "../../../redux/actions";
import CircleLoader from "react-spinners/CircleLoader";
import { css } from "@emotion/core";
import impButn from "./buyButn.png";
import impButninActive from "./inActive.png";
import { toast } from "react-toastify";
/**
 * @author
 * @function Home
 **/

const Home = () => {
  <Progress percent={88} status="success" />;
  const dispatch = useDispatch();

  const {
    bStation1,
    bStation2,
    bStation3,
    bStation4,
    bStation5,
    bStation6,
    bStation7,
    smartMLevelOne,
    smartMLevelTwo,
    silverMLevelOne,
    silverMLevelTwo,
    goldMLevelOne,
    goldMLevelTwo,
    royalMLevelOne,
    royalMLevelTwo,
    crownMLevelOne,
    crownMLevelTwo,
    userWalletAddress,
    matrixIncome,
    levelIncome,
    isClickedForTrue,
    contract,
    tronWeb,
    usersID,
    refIncome ,
    uplineIncome,
    totalIncome,
    directSponsor,
    bussinessCounter,
  
  } = useSelector((state) => state.UserReducer);
  
  let str=directSponsor.slice(0,6)+"..."+directSponsor.slice(directSponsor.length-4,directSponsor.length)
  console.log("bStation3",bStation3);

  const [isLoaderTrue, setIsLoaderTrue] = React.useState(true);

  const override = css`
    display: block;
    margin-left: 45%;
    border-color: red;
  `;

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoaderTrue(false);
    }, 5000);
  }, []);

  //buy level functions

  //level 2
  const BuyLevelTwoFun = () => {
    contract.Level2().send({
      feeLimit: 100_000_000,
      callValue: tronWeb.toSun(1200),
    });
  };

  //level 3
  const BuyLevelThreeFun = () => {
    contract.Level3().send({
      feeLimit: 100_000_000,
      callValue: tronWeb.toSun(2800),
    });
  };

  //level 4
  const BuyLevelFourFun = () => {
    contract.Level4().send({
      feeLimit: 100_000_000,
      callValue: tronWeb.toSun(9000),
    });
  };

  //level 5
  const BuyLevelFiveFun = () => {
    contract.Level5().send({
      feeLimit: 100_000_000,
      callValue: tronWeb.toSun(25000),
    });
  };

  //level 6
  const BuyLevelSixFun = () => {
    contract.Level6().send({
      feeLimit: 100_000_000,
      callValue: tronWeb.toSun(50000),
    });
  };

  //level 7
  const BuyLevelSevenFun = () => {
    contract.Level7().send({
      feeLimit: 100_000_000,
      callValue: tronWeb.toSun(100000),
    });
  };

  // const withDrawFunction = () => {
  //   contract
  //     .withdraw()
  //     .send()
  //     .then((val) => {
  //       toast.success("withdrawl successfully!");
  //     })
  //     .catch((Err) => {
  //       toast.error("something went wrong!");
  //     });
  // };

  //bussiness
  const data = [
    {
      package: 900,
      team: 2,
      turnover: 1800,
      upgrade: 1200,
      income: 600,
      sponsorIncome: "",
      placementUpline: "",
      isTrue: bStation1,
      isBought: false,
    },
    {
      package: 1200,
      team: 2,
      turnover: 4800,
      upgrade: 2800,
      income: 2000,
      sponsorIncome: 960,
      placementUpline: 3840,
      isTrue: bStation2,
      isBought: bStation1 === true ? true : false,
      click: BuyLevelTwoFun,
    },
    {
      package: 2800,
      team: 2,
      turnover: 22400,
      upgrade: 9000,
      income: 13400,
      sponsorIncome: 4480,
      placementUpline: 17920,
      isTrue: bStation3,
      isBought: bStation2 === true ? true : false,
      click: BuyLevelThreeFun,
    },

    {
      package: 9000,
      team: 2,
      turnover: 144000,
      upgrade: 25000,
      income: 119400,
      sponsorIncome: 28800,
      placementUpline: 115200,
      isTrue: bStation4,
      isBought: bStation3 === true ? true : false,
      click: BuyLevelFourFun,
    },

    {
      package: 25000,
      team: 2,
      turnover: 800000,
      upgrade: 50000,
      income: 750000,
      sponsorIncome: 160000,
      placementUpline: 640000,
      isTrue: bStation5,
      isBought: bStation4 === true ? true : false,
      click: BuyLevelFiveFun,
    },

    {
      package: 50000,
      team: 2,
      turnover: 3200000,
      upgrade: 100000,
      income: 3100000,
      sponsorIncome: 640000,
      placementUpline: 2560000,
      isTrue: bStation6,
      isBought: bStation5 === true ? true : false,
      click: BuyLevelSixFun,
    },

    {
      package: "100000",
      team: 2,
      turnover: 12800000,
      upgrade: "",
      income: 12800000,
      sponsorIncome: 2560000,
      placementUpline: 10240000,
      isTrue: bStation7,
      isBought: bStation6 === true ? true : false,
      click: BuyLevelSevenFun,
    },
  ];

  //smart matrix
  let smartMatrixData = [
    {
      package: 5000,
      team: 2,
      turnover: 15000,
      upgrade: 10000,
      income: 5000,
      sponsorIncome: "",
      placementUpline: "",
      isTrue: smartMLevelOne,
    },
    {
      package: 10000,
      team: 2,
      turnover: 90000,
      upgrade: "",
      income: 90000,
      sponsorIncome: "",
      placementUpline: "",
      isTrue: smartMLevelTwo,
    },
  ];

  //silver matrix
  let silverMatrixData = [
    {
      package: 50000,
      team: 2,
      turnover: 150000,
      upgrade: "100000",
      income: 50000,
      sponsorIncome: "",
      placementUpline: "",
      isTrue: silverMLevelOne,
    },
    {
      package: "100000",
      team: 2,
      turnover: "900000",
      upgrade: "",
      income: "900000",
      sponsorIncome: "",
      placementUpline: "",
      isTrue: silverMLevelTwo,
    },
  ];

  //gold matrix
  let goldMatrixData = [
    {
      package: "100000",
      team: 2,
      turnover: "300000",
      upgrade: "200000",
      income: "100000",
      sponsorIncome: "",
      placementUpline: "",
      isTrue: goldMLevelOne,
    },
    {
      package: "200000",
      team: 2,
      turnover: "1800000",
      upgrade: "",
      income: "1800000",
      sponsorIncome: "",
      placementUpline: "",
      isTrue: goldMLevelTwo,
    },
  ];

  //royal matrix
  let royalMatrixData = [
    {
      package: "500000",
      team: 2,
      turnover: "1500000",
      upgrade: "1000000",
      income: "500000",
      sponsorIncome: "",
      placementUpline: "",
      isTrue: goldMLevelOne,
    },
    {
      package: "1000000",
      team: 2,
      turnover: "90000000",
      upgrade: "",
      income: "90000000",
      sponsorIncome: "",
      placementUpline: "",
      isTrue: goldMLevelTwo,
    },
  ];

  //crown matrix
  let crownMatrixData = [
    {
      package: "5000000",
      team: 2,
      turnover: "1.5 Cr",
      upgrade: "1 Cr",
      income: "5000000",
      sponsorIncome: "",
      placementUpline: "",
      isTrue: crownMLevelOne,
    },

    {
      package: "1 Cr",
      team: 2,
      turnover: "9 Cr",
      upgrade: "",
      income: "9 Cr",
      sponsorIncome: "",
      placementUpline: "",
      isTrue: crownMLevelTwo,
    },

  ];
   
  const copyReferralLink = () => {
    let get = document.getElementById("refer").select();
    document.execCommand("copy");
  };

  const upgradeFunction=()=>{
    return data.map((item, index) => {
      return (
        <>
          {item.isBought && !item.isTrue ? (
            <button
              type="submit"
              class="btn btn-info margin-top-10"
              onClick={item.click}
            >
              {"Upgrade for" + " " + item.package}
            </button>
          ) : null}
        </>
      );
    });
  }

  // console.log("here is my withdrawable====>", withdrawAble);

  return (
    <>
      <h1
        class="mt-4"
        id="dashboard"
        style={{ marginTop: "70px", color: "#b8c0f1" }}
      >
        Dashboard
      </h1>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active">Dashboard</li>
      </ol>
      <div class="input-group mb-3">
        <input
          style={{ height: "100%" }}
          type="text"
          class="form-control pl-15 bg-transparent"
          placeholder="View"
          id="refer"
          value={`${window.location.origin}/login/?ref=${usersID}`}
          // onChange={(e) => setReferrerAdd(e.target.value)}
        />
        <input
          type="hidden"
          name="type"
          value="VIEW"
          id="type"
          readonly="true"
        />
        <span style={{ paddingRight: 10, paddingLeft: 10 }}></span>
        <button
          type="submit"
          class="btn btn-info margin-top-10"
          onClick={copyReferralLink}
        >
          COPY
        </button>
      </div>

      <div
        id="business"
        style={{
          textAlign: "center",
          fontSize: 25,
          paddingTop: 13,
          paddingBottom: 13,
          color:"#b8c0f1"
        }}
      >
        PLANS INFO
      </div>
      <div class="row">

        <div class="col-lg-4">
          <div class={`info-box info-box1`}>
            <span class="info-box-icon push-bottom rounded">
              <img src="https://tronsquire.io/auth/img/icon1.png" />
              <span class="path1"></span>
              <span class="path2"></span>
            </span>
            <div class="info-box-content changeColor">
              <span class="info-box-text">MATRIX INCOME</span>{" "}
              <span class="info-box-number">{matrixIncome} Trx</span>{" "}
            </div>
          </div>
        </div>
       
        <div class="col-lg-4">
          <div class={`info-box info-box2`}>
            <span class="info-box-icon push-bottom rounded">
              <img src="https://tronsquire.io/auth/img/icon1.png" />
              <span class="path1"></span>
              <span class="path2"></span>
            </span>
            <div class="info-box-content changeColor">
              <span class="info-box-text">MY LEVEL </span>{" "}
              <span class="info-box-number">{levelIncome} Trx</span>{" "}
            </div>
          </div>
        </div>
        <div class="col-lg-4"  >
          <div class={`info-box info-box8`}>
            <span class="info-box-icon push-bottom rounded">
              <img src="https://tronsquire.io/auth/img/icon1.png" />
              <span class="path1"></span>
              <span class="path2"></span>
            </span>
            <Link to="/dashboard/downline">
            <div class="info-box-content changeColor">
              <span class="info-box-text">MY TEAM </span>{" "}
              <span class="info-box-number">{levelIncome} Trx</span>{" "}
            </div>
             </Link>
          </div>
        </div>
        
        <div class="col-lg-4">
          <div class={`info-box info-box9`}>
            <span class="info-box-icon push-bottom rounded">
              <img src="https://tronsquire.io/auth/img/icon1.png" />
              <span class="path1"></span>
              <span class="path2"></span>
            </span>
            <div class="info-box-content changeColor">
              <span class="info-box-text">UPLINE INCOME </span>{" "}
              <span class="info-box-number">{uplineIncome} Trx</span>{" "}
            </div>
          </div>
        </div>
     
       
        <div class="col-lg-4">
          <div class={`info-box info-box3`}>
            <span class="info-box-icon push-bottom rounded">
              <img src="https://tronsquire.io/auth/img/icon1.png" />
              <span class="path1"></span>
              <span class="path2"></span>
            </span>
            <div class="info-box-content changeColor">
              <span class="info-box-text">TOTAL INCOME</span>{" "}
              <span class="info-box-number">
                {totalIncome} Trx
              </span>{" "}
            </div>
          </div>
        </div>
       
        <div class="col-lg-4">
          <div class={`info-box info-box4`}>
            <span class="info-box-icon push-bottom rounded">
              <img src="https://tronsquire.io/auth/img/icon1.png" />
              <span class="path1"></span>
              <span class="path2"></span>
            </span>
            <div class="info-box-content changeColor">
              <span class="info-box-text">DIRECT SPONSOR</span>{" "}
              <span class="info-box-number">{str}</span>{" "}
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class={`info-box info-box5`}>
            <span class="info-box-icon push-bottom rounded">
              <img src="https://tronsquire.io/auth/img/icon1.png" />
              <span class="path1"></span>
              <span class="path2"></span>
            </span>
            <div class="info-box-content changeColor">
              <span class="info-box-text">DIRECT INCOME</span>{" "}
              <span class="info-box-number">{refIncome ? refIncome : 0}</span>{" "}
            </div>
          </div>
        </div>
     
        <div class="col-lg-4">
          <div class={`info-box info-box7`}>
            <span class="info-box-icon push-bottom rounded">
              <img src="https://tronsquire.io/auth/img/icon1.png" />
              <span class="path1"></span>
              <span class="path2"></span>
            </span>
            <div class="info-box-content changeColor">
              <span class="info-box-text">GLOBAL MATRIX</span>
              <span class="info-box-number">{bussinessCounter}</span>
            </div>
          </div>
        </div>
     
      </div>

      {isLoaderTrue ? (
        <CircleLoader
          color="red"
          loading={isLoaderTrue}
          css={override}
          size={100}
        />
      ) : (
        <>
          {!isClickedForTrue ? upgradeFunction() : null} &nbsp;
          {/* {!isClickedForTrue ? (
            <button
              type="submit"
              class="btn btn-info margin-top-10"
              disabled={withdrawAble <= 0 ? true : false}
              onClick={withDrawFunction}
            >
              Withdraw {withdrawAble}
            </button>
          ) : null} */}
          <div
            id="business"
            style={{
              textAlign: "center",
              fontSize: 30,
              paddingTop: 13,
              paddingBottom: 13,
              color:"#b8c0f1"
            }}
          >
            BUSINESS PLAN
          </div>
          <div class="row">
            {data.map((items,i) => {
              return (
                <div class="col-lg-4 setOnHover">
                  {/* {
                    items.isBought ? (
                      <img
                        src={impButn}
                        className="buy-button"
                        style={{ opacity: items.isTrue ? 0.5 : 1 }}
                        onClick={items.isTrue ? null : items.click}
                      />
                    ) : null
                    // <img src={impButninActive} className="buy-button" />
                  } */}
                  <div
                    class={`info-box ${
                      items.isTrue ? `bg-info${i}`  : "non-active-info"
                    }`}
                  > 
                    <span class="info-box-icon push-bottom rounded">
                      <img src="https://tronsquire.io/auth/img/icon1.png" />
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </span>
                    <div class="info-box-content">
                      <span class="info-box-text">PACKAGE</span>{" "}
                      <span class="info-box-number">{items.package} Trx</span>{" "}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* global community */}
          </div>
          <div class="row" id="global">
            <div
              style={{
                textAlign: "center",
                fontSize: 30,
                paddingTop: 13,
                paddingBottom: 13,
                width: "100%",
                color:"#b8c0f1"
              }}
            >
              {" "}
              Global community
            </div>

            {bStation3 === true && isClickedForTrue === false ? (
              <div
                style={{
                  width: "100%",
                  // height: 30,
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  paddingTop: 20,
                  paddingBottom: 20,
                  flexDirection: "column",
                }}
                className="bg-info"
              >
                Now you can proceed to the Global community (Smart Matrix).
                Click below to go to global Community
                <div class="row" style={{ marginTop: 20 }}>
                  <div class="col-lg-6 col-xs-12 text-center">
                    <button
                      type="submit"
                      class="btn btn-info margin-top-10"
                      onClick={() => dispatch(smartMatrixAction())}
                    >
                      Click
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div class="row" id="smart">
            <div
              style={{
                textAlign: "center",
                fontSize: 30,
                paddingTop: 13,
                paddingBottom: 13,
                width: "100%",
                color:"#b8c0f1"
              }}
            >
              Smart Matrix
            </div>
            {smartMatrixData.map((items, i) => {
              return (
                <div class="col-lg-6">
                  {items.isTrue != true && i === 1 ? (
                    <img
                      src={impButn}
                      className="buy-button"
                      onClick={() =>
                        smartMLevelOne === true &&
                        dispatch(smartMatrixLevel2Action())
                      }
                    />
                  ) : null}
                  <div
                    class={`info-box ${
                      items.isTrue ? "smart-bg-info" : "non-active-info"
                    }`}
                  >
                    <span class="info-box-icon push-bottom rounded">
                      <img src="https://tronsquire.io/auth/img/icon1.png" />
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </span>
                    <div class="info-box-content">
                      <span class="info-box-text">PACKAGE</span>{" "}
                      <span class="info-box-number">{items.package} Trx</span>{" "}
                    </div>
                  </div>
                </div>
              );
            })}

            {bStation4 === true && isClickedForTrue === false ? (
              <div
                style={{
                  width: "100%",
                  // height: 30,
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",

                  paddingTop: 20,
                  paddingBottom: 20,
                  flexDirection: "column",
                }}
                className="bg-info"
              >
                Now you can proceed to the Silver Matrix. Click below to go to
                global Community
                <div class="row" style={{ marginTop: 20 }}>
                  <div class="col-lg-6 col-xs-12 text-center">
                    <button
                      type="submit"
                      class="btn btn-info margin-top-10"
                      onClick={() => dispatch(silverMatrixAction())}
                    >
                      Click
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div class="row" id="silver">
            <div
              style={{
                textAlign: "center",
                fontSize: 30,
                paddingTop: 13,
                paddingBottom: 13,
                width: "100%",
                color:"#b8c0f1"
              }}
            >
              Silver Matrix
            </div>
            {silverMatrixData.map((items, i) => {
              return (
                <div class="col-lg-6">
                  {items.isTrue != true && i === 1 ? (
                    <img
                      src={impButn}
                      className="buy-button"
                      onClick={() =>
                        silverMLevelOne === true &&
                        dispatch(silverMatrixLevel2Action())
                      }
                    />
                  ) : null}
                  <div
                    class={`info-box ${
                      items.isTrue ? "silver-bg-info" : "non-active-info"
                    }`}
                  >
                    <span class="info-box-icon push-bottom rounded">
                      <img src="https://tronsquire.io/auth/img/icon1.png" />
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </span>
                    <div class="info-box-content">
                      <span class="info-box-text">PACKAGE</span>{" "}
                      <span class="info-box-number">{items.package} Trx</span>{" "}
                    </div>
                  </div>
                </div>
              );
            })}

            {bStation5 === true && isClickedForTrue === false ? (
              <div
                style={{
                  width: "100%",
                  // height: 30,
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",

                  paddingTop: 20,
                  paddingBottom: 20,
                  flexDirection: "column",
                }}
                className="bg-info"
              >
                Now you can proceed to the GOLD Matrix . Click below to go to
                global Community
                <div class="row" style={{ marginTop: 20 }}>
                  <div class="col-lg-6 col-xs-12 text-center">
                    <button
                      type="submit"
                      class="btn btn-info margin-top-10"
                      onClick={() => dispatch(goldMatrixAction())}
                    >
                      Click
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div class="row" id="gold">
            <div
              style={{
                textAlign: "center",
                fontSize: 30,
                paddingTop: 13,
                paddingBottom: 13,
                width: "100%",
                color:"#b8c0f1"
              }}
            >
              GOLD Matrix
            </div>
            {goldMatrixData.map((items, i) => {
              return (
                <div class="col-lg-6">
                  {items.isTrue != true && i === 1 ? (
                    <img
                      src={impButn}
                      className="buy-button"
                      onClick={() =>
                        goldMLevelOne === true &&
                        dispatch(goldMatrixLevel2Action())
                      }
                    />
                  ) : null}
                  <div
                    class={`info-box ${
                      items.isTrue ? "gold-bg-info" : "non-active-info"
                    }`}
                  >
                    <span class="info-box-icon push-bottom rounded">
                      <img src="https://tronsquire.io/auth/img/icon1.png" />
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </span>
                    <div class="info-box-content">
                      <span class="info-box-text">PACKAGE</span>{" "}
                      <span class="info-box-number">{items.package} Trx</span>{" "}
                    </div>
                  </div>
                </div>
              );
            })}

            {bStation6 === true && isClickedForTrue === false ? (
              <div
                style={{
                  width: "100%",
                  // height: 30,
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",

                  paddingTop: 20,
                  paddingBottom: 20,
                  flexDirection: "column",
                }}
                className="bg-info"
              >
                Now you can proceed to the Royal Matrix . Click below to go to
                global Community
                <div class="row" style={{ marginTop: 20 }}>
                  <div class="col-lg-6 col-xs-12 text-center">
                    <button
                      type="submit"
                      class="btn btn-info margin-top-10"
                      onClick={() => dispatch(royalMatrixAction())}
                    >
                      Click
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div class="row" id="royal">
            <div
              style={{
                textAlign: "center",
                fontSize: 30,
                paddingTop: 13,
                paddingBottom: 13,
                width: "100%",
                color:"#b8c0f1"
              }}
            >
              Royal Matrix
            </div>
            {royalMatrixData.map((items, i) => {
              return (
                <div class="col-lg-6">
                  {items.isTrue != true && i === 1 ? (
                    <img
                      src={impButn}
                      className="buy-button"
                      onClick={() =>
                        royalMLevelOne === true &&
                        dispatch(royalMatrixLevel2Action())
                      }
                    />
                  ) : null}
                  <div
                    class={`info-box ${
                      items.isTrue ? "royal-bg-info" : "non-active-info"
                    }`}
                  >
                    <span class="info-box-icon push-bottom rounded">
                      <img src="https://tronsquire.io/auth/img/icon1.png" />
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </span>
                    <div class="info-box-content">
                      <span class="info-box-text">PACKAGE</span>{" "}
                      <span class="info-box-number">{items.package} Trx</span>{" "}
                    </div>
                  </div>
                </div>
              );
            })}

            {bStation6 === true && isClickedForTrue === false ? (
              <div
                style={{
                  width: "100%",
                  // height: 30,
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",

                  paddingTop: 20,
                  paddingBottom: 20,
                  flexDirection: "column",
                }}
                className="bg-info"
              >
                Now you can proceed to the Crown Matrix . Click below to go to
                global Community
                <div class="row" style={{ marginTop: 20 }}>
                  <div class="col-lg-6 col-xs-12 text-center">
                    <button
                      type="submit"
                      class="btn btn-info margin-top-10"
                      onClick={() => dispatch(crownMatrixAction())}
                    >
                      Click
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div class="row" id="crown">
            <div
              style={{
                textAlign: "center",
                fontSize: 30,
                paddingTop: 13,
                paddingBottom: 13,
                width: "100%",
                color:"#b8c0f1"
              }}
            >
              Crown Matrix
            </div>
            {crownMatrixData.map((items, i) => {
              return (
                <div class="col-lg-6">
                  {items.isTrue != true && i === 1 ? (
                    <img
                      src={impButn}
                      className="buy-button"
                      onClick={() =>
                        crownMLevelOne === true &&
                        dispatch(crownMatrixLevel2Action())
                      }
                    />
                  ) : null}
                  <div
                    class={`info-box ${
                      items.isTrue ? "crown-bg-info" : "non-active-info"
                    }`}
                  >
                    <span class="info-box-icon push-bottom rounded">
                      <img src="https://tronsquire.io/auth/img/icon1.png" />
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </span>
                    <div class="info-box-content">
                      <span class="info-box-text">PACKAGE</span>{" "}
                      <span class="info-box-number">{items.package} Trx</span>{" "}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
