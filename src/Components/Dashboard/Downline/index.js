import React from "react";
import { useSelector } from "react-redux";
import Tree from "react-d3-tree";

/**
 * @author
 * @function Downline
 **/

const Downline = (props) => {
  
  const { downlineCount, binaryTree } = useSelector(
    (state) => state.UserReducer
  );
  const [tronWeb, setTronWeb] = React.useState();

  // console.log(downlineCount,"downlineCount==>")
  React.useEffect(() => {
    const tronLoader = setInterval(() => {
      if (window.tronWeb && window.tronWeb.ready) {
        setTronWeb(window.tronWeb);
        clearInterval(tronLoader);
      }
    }, 500);
  }, []);

  return (
    <>
      <div>
        <div>
          <h2 style={{ textAlign: "center", color:"#b8c0f1" }}>Downline</h2>
        </div>
        <table class="table table-striped" >
          <thead>
            <tr >
              <th scope="col" style={{ color:"#e4e6f7"}}>#</th>
              {/* <th scope="col">First</th> */}
              <th scope="col" style={{ color:"#e4e6f7"}}>Address</th>
            </tr>
          </thead>
          <tbody>
            {downlineCount
              ? downlineCount.map((item, i) => {
                  // console.log(item,"item=======>")
                  return (
                    <tr >
                      <th scope="row" style={{ color:"#e4e6f7"}}> {+i + 1}</th>
                      {/* <td> {+i + 1}</td> */}
                      <th style={{ color:"#e4e6f7"}}>{tronWeb && tronWeb.address.fromHex(item)}</th>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>

      <div id="treeWrapper" style={{ width: "100%", height: "50em" }}>
        <div>
          <h2 style={{color:"#b8c0f1"}}>Binary Tree</h2>
        </div>
        {binaryTree && <Tree data={binaryTree} />}
      </div>
    </>
  );
};

export default Downline;
