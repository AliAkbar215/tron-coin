import React from "react";
import { useDispatch } from "react-redux";
import { environment } from "../../environment";
import { LogoutAction } from "../../redux/actions";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  const dispatch = useDispatch();
let str=environment.contractAddress
 let finalAddress=str.slice(0,4)+"..."+str.slice(str.length-4)
  return (
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="logo.png" style={{ width: "10rem" }} />
      </a>
      {/* <button
        class="btn btn-link btn-sm order-1 order-lg-0"
        id="sidebarToggle"
        href="#"
      >
        <i class="fas fa-bars"></i>
      </button> */}

      <form
        style={{ visibility: "hidden" }}
        class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0"
      >
        <div class="input-group">
          <input
            class="form-control"
            type="text"
            placeholder="Search for..."
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button class="btn btn-primary" type="button">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>

      <ul class="navbar-nav ml-auto ml-md-0">
        <li
          class="nav-item nav-item-text"
          style={{ alignItems: "center", color: "white",paddingRight:0 }}
        >
          {finalAddress}
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="userDropdown"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fas fa-user fa-fw"></i>
          </a>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="userDropdown"
          >
            {/* <a class="dropdown-item" href="#">
              Settings
            </a>
            <a class="dropdown-item" href="#">
              Activity Log
            </a> */}
            {/* <div class="dropdown-divider"></div> */}
            <a class="dropdown-item" onClick={() => dispatch(LogoutAction())}>
              Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
