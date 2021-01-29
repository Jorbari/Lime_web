import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import folderIcon from "../../assets/bigFolderNoFill.png";
import reportIcon from "../../assets/bigReport.png";
import "./projectCard.scss";

function ProjectCards(props) {
  const { recentProjects, recentSurveys } = props;
  return (
    <>
      <div className="card__section">
        <div className="card__section--img">
          <img alt="" src={folderIcon} />
        </div>
        <div className="card__section--detail">
          <h1>
            <span>{recentProjects}</span>
            <span>Recent Projects</span>
          </h1>
          <Link to="/projects">
            <button className="card__section--detail--btn">View</button>
          </Link>
        </div>
      </div>

      <div className="card__section">
        <div className="card__section--img">
          <img alt="" src={reportIcon} />
        </div>
        <div className="card__section--detail">
          <h1>
            <span>{recentSurveys}</span>
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

const mapStateToProps = (state) => ({
  recentProjects: state.dashboard.recent_projects,
  recentSurveys: state.dashboard.recent_surveys,
});

export default connect(mapStateToProps)(ProjectCards);
