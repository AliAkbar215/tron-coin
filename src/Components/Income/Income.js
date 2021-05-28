import React, { useEffect } from "react";
import { useState } from "react";
import { environment } from "../../environment";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
// const TronWeb = require("tronweb");
// const TronGrid = require("trongrid");
/**
 * @author
 * @function
 **/

const Income = ({ tronWeb }) => {
  const { userIdForIncome } = useSelector((state) => state.UserReducer);
  // console.log(usersID,"usersID")
  const [eventsArray, setEventsArray] = useState([]);
  useEffect(() => {
    if (tronWeb) {
      tronWeb
        .getEventResult(environment.contractAddress, {
          eventName: "INCOME",
          // size: 2,
        })
        .then(
          (res) => {
            // console.log(res)
            setEventsArray(res);
          },
          [tronWeb]
        )
        .catch((e) => {});
    }
  }, [tronWeb]);
  let EventsArray =
    eventsArray !== undefined && eventsArray !== null ? eventsArray : [];
  // console.log("EventsArray", EventsArray);
  // const  FilterArray = EventsArray.filter((id)=> Number(id.result[0]=== Number(usersID)))

  const FilterArray = EventsArray.filter((i) => {
    return +i.result[0] === Number(userIdForIncome);
  });
  // console.log(userIdForIncome,"FilterArray")

  return (
    <div>
      <table
        class="table table-bordered"
        id="dataTable"
        width="100%"
        cellspacing="0"
      >
        <thead>
          <tr >
            <th className="incomHeading">User</th>
            <th className="incomHeading">Level1</th>
            <th className="incomHeading">Amount</th>
            <th className="incomHeading">Type</th>
            <th className="incomHeading">View Txn</th>
            <th className="incomHeading">Time</th>
          </tr>
        </thead>

        <tbody>
          {FilterArray != undefined
            ? FilterArray.map((arr) => {
                  // console.log(arr.result,"arr")
                return (
                  <tr className="incomHeading">
                    <td>{arr.result[0]}</td>
                    <td>{arr.result[2]}</td>
                    <td>{tronWeb.fromSun(arr.result[3])}</td>
                    <td>{arr.result[1]}</td>
                    <td>
                      <a
                        href={`https://shasta.tronscan.org/#/transaction/${arr.transaction}`}
                        target="_blank"
                      >
                        {arr.transaction.slice(0, 9)}....
                      </a>
                    </td>
                    <td>{moment.unix(arr.result[4]).format("MMM Do YY")}</td>
                  </tr>
                );
              })
            : []}
          {/* <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>61</td>
                          <td>2011/04/25</td>
                          <td>$320,800</td>
                        </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Income;
