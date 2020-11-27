import React from "react";
import { Link } from "react-router-dom";

import folderIcon from "../../assets/bigFolderNoFill.png";
import reportIcon from "../../assets/bigReport.png";
import "./projectCard.scss";


export default function ProjectCards() {
  return (
    <>

      <div className="card__section">
        <div className="card__section--img">
          <img alt="" src={folderIcon} />
        </div>
        <div className="card__section--detail">
          <h1>
            <span>5</span>
            <span>Recent Projects</span>
          </h1>
          <Link to="/projects">
            <button className="card__section--detail--btn">View</button>
          </Link>
        </div>
      </div>

      <div className="card__section">
        <div className="card__section--img">
        <img
            alt=""
            src={reportIcon}
            />
        </div>
        <div className="card__section--detail">
          <h1>
            <span>2</span>
            <span>New Surveys</span>
          </h1>
          <Link to="/surveys">
            <button className="card__section--detail--btn">View</button>
          </Link>
        </div>
      </div>

    </>
  );
}
