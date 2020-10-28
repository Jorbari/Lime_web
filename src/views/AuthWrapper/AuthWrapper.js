import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import SignUp from "../Signup/SignUp";
import Login from "../Login/Login";

import limeLogo from "../../assets/Group 9.svg";
// import limeText from "./assets/LIME..svg";
import people from "../../assets/30816651.svg";

import { authenticate } from "../../reducers/auth";

import "./AuthWrapper.css";

const AuthWrapper = ({ location: { pathname }, history }) => {
  return (
    <div className="auth-container mw-100">
      <Link to="/">
        <Image src={limeLogo} className="limeLogo" />
      </Link>
      <div className="d-flex justify-content-center">
        <div className="row w-100 pt-1">
          <div className="col-12 col-lg-7 p-0 image-container">
            <Image
              src={people}
              width="739px"
              height="493px"
              style={{ paddingTop: "62px" }}
            />
          </div>
          <div className="col-12 col-lg-5 p-0 d-flex justify-content-center justify-content-lg-end form-container">
            {pathname === "/signup" ? (
              <SignUp history={history} />
            ) : (
              <Login history={history} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
