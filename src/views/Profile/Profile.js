import React from "react";
import styled from "styled-components";

import SideBar from "../../components/side-bar/SideBar";
import NavBar from "../../components/NavBar";

import { decodeUserObject } from "../../api/helpers";

const ProfileContainer = styled.div`
  /* border: 1px solid #7fcd91; */
  /* border-radius: 10px; */

  .card-header-text {
    position: absolute;
    width: 116px;
    height: 36px;
    left: 30px;
    top: 526px;

    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height */

    color: #5b5656;
  }

  .table-card-container {
    /* border: 1px solid #7fcd91; */
    width: 1000px;
    /* height: 447px; */
    border-radius: 4px;
    margin-top: 4.5rem;
    /* margin-left: 1rem; */
  }

  .details-card-table {
    width: 1191px;
    /* border: 0.5px solid #7fcd91; */
    border-left: none;
    border-right: none;
  }

  .details-card-table h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #5b5656;
  }
`;

const Profile = props => {
  const user = decodeUserObject();

  const { history } = props;
  const [newProjectView, setNewProjectView] = React.useState(false);

  const toggleNewProjectView = () => {
    setNewProjectView(!newProjectView);
  };

  return (
    <>
      <SideBar toggleNewProjectView={toggleNewProjectView} history={history} />
      <ProfileContainer
        className="mx-8 relative md:ml-64 bg-white flex flex-col md:flew-wrap"
        style={{ marginLeft: "18rem", marginRight: "2rem", height: "40vw" }}
      >
        <div
          className="table-card-container w-full xl:w-9/12 mb-12 xl:mb-0 pr-4"
          style={{ marginTop: "9rem" }}
        >
          <NavBar />

          {Object.keys(user).length > 0 && (
            <div
              className="d-flex jusify-content-center"
              style={{ height: "60vh" }}
            >
              <div className="row w-100">
                <div className="col-12 col-md-4 d-flex flex-column align-items-center justify-content-center">
                  <div
                    style={{
                      background: "#c4c4c4",
                      height: "107px",
                      width: "107px",
                      borderRadius: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "48px",
                      marginBottom: "10px"
                    }}
                    className="uppercase"
                  >
                    {user.firstname.charAt(0)}
                    {user.lastname.charAt(0)}
                  </div>
                  <h5
                    style={{
                      marginBottom: "10px"
                    }}
                  >
                    {user.firstname.replace(
                      user.firstname[0],
                      user.firstname[0].toUpperCase()
                    )}{" "}
                    {user.lastname.replace(
                      user.lastname[0],
                      user.lastname[0].toUpperCase()
                    )}
                  </h5>
                  <p>{user.email}</p>
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center">
                  <div className="w-75">
                    <h2
                      className="font-weight-bold"
                      style={{
                        fontSize: "24px",
                        marginBottom: "50px",
                        marginTop: "30px"
                      }}
                    >
                      Details
                    </h2>
                    <div style={{ marginBottom: "20px" }}>
                      <p className="title">Organization</p>
                      <p className="body font-weight-bold">{user.company}</p>
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      <p className="title">Designation</p>
                      <p className="body font-weight-bold">{user.role}</p>
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                      <p className="title">Profile created</p>
                      <p className="body font-weight-bold">0</p>
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                      <p className="title">Surveys created</p>
                      <p className="body font-weight-bold">0</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 px-0">
                  <div
                    className="w-100 h-100"
                    style={{
                      border: "1.5px solid #A4D4AE",
                      padding: "30px 37px",
                      boxSizing: "border-box",
                      borderRadius: "10px",
                      position: "relative"
                    }}
                  >
                    <h2
                      className="font-weight-bold"
                      style={{ fontSize: "24px" }}
                    >
                      Teammates
                    </h2>
                    <button
                      type="button"
                      className="btn-success btn"
                      style={{ position: "absolute", bottom: 30, right: 37 }}
                    >
                      <i className="fas fa-pencil" />
                      Invite teammate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ProfileContainer>
    </>
  );
};

export default Profile;
