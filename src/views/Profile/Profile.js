import React from "react";

import SideBar from "../../components/side-bar/SideBar";
import NavBar from "../../components/NavBar";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { decodeUserObject } from "../../api/helpers";
import { ProfileContainer } from './profile.styles'

import UserProfileImage from '../../components/user-profile-image/user-profile-image.components'
import UserProfileDetail from "../../components/user-profile-details/user-profile-details.component";
import Teammates from "../../components/teammates/teammates.component";

const Profile = props => {
  const user = decodeUserObject();

  const { history } = props;
  const [newProjectView, setNewProjectView] = React.useState(false);

  const toggleNewProjectView = () => {
    setNewProjectView(!newProjectView);
  };

  return (
    <>
      <ProfileContainer
        className="mx-8 relative bg-white flex flex-col md:flew-wrap"
        style={{ height: "40vw" }}
      >
        <div
          className="table-card-container w-full xl:w-9/12 mb-12 xl:mb-0 pr-4"
          style={{ marginTop: "9rem", width: "100%" }}
        >
          <Tabs >
            <TabList>
              <Tab style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                Summary
              </Tab>
              <Tab style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                Billing
              </Tab>
            </TabList>
            <TabPanel style={{ marginTop:"5rem" }}>
              {Object.keys(user).length > 0 && (
                <div
                  className="d-flex jusify-content-center"
                  style={{ height: "60vh", display:"flex", justifyContent:"space-around" }}
                >
                  <div className="row w-100">

                    <UserProfileImage firstname={user.firstname} lastname={user.lastname} email={user.email} />

                    <UserProfileDetail company={user.company} role={user.role} />

                    <Teammates />

                  </div>
                </div>
              )}
            </TabPanel>
            <TabPanel>
              {Object.keys(user).length > 0 && (
                <div
                  className="d-flex jusify-content-center"
                  style={{ height: "60vh" }}
                >
                  <div className="row w-100">

                    <UserProfileImage firstname={user.firstname} lastname={user.lastname} email={user.email} />

                    <UserProfileDetail company={user.company} role={user.role} />
                  </div>
                </div>)}
            </TabPanel>
          </Tabs>
        </div>
      </ProfileContainer>
    </>
  );
};

export default Profile;
