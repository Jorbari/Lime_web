import React, { useEffect } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { decodeUserObject } from "../../api/helpers";
import { ProfileContainer, ProfileContainerStyle } from "./profile.styles";

import UserProfileImage from "../../components/user-profile-image/user-profile-image.components";
import UserProfileDetail from "../../components/user-profile-details/user-profile-details.component";
import Teammates from "../../components/teammates/teammates.component";

const Profile = (props) => {
  const user = decodeUserObject();

  const { history } = props;
  const [newProjectView, setNewProjectView] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState("");

  const [mobileNumber, setMobileNumber] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [organization, setOrganization] = React.useState("");
  const [designation, setDesignation] = React.useState("");
  const [email, setEmail] = React.useState("");

  const toggleNewProjectView = () => {
    setNewProjectView(!newProjectView);
  };

  useEffect(() => {
    console.log(user);
    setMobileNumber();
    setFirstName(user.firstname);
    setLastName(user.lastname);
    setOrganization(user.company);
    setDesignation(user.role);
    setEmail(user.email);
  }, []);

  const readImageUrl = (event) => {
    const limit = 5;

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const fileSizeInMb = file.size / (1024 * 1024);
      if (fileSizeInMb < limit) {
        const previewReader = new FileReader();
        previewReader.readAsDataURL(file);
        previewReader.onload = (e) => {
          const fileBinary = e.target.result.split("base64,")[1];
          setImageUrl(`data:image/png;base64,${fileBinary}`);
        };
      }
    }
  };

  const updateValue = (event) => {};

  return (
    <>
      <ProfileContainerStyle>
        <div className="content__wrapper">
          <div className="flex__right">
            <button>Save</button>
          </div>

          <Tabs>
            <TabList className="tab">
              <Tab className="tab__list">Account</Tab>
              <Tab className="tab__list">Billing</Tab>
            </TabList>

            <TabPanel>
              <div className="content">
                <div className="flex__one">
                  <section className="key__info">
                    <p>Key Information</p>
                  </section>

                  <section className="profile__detail">
                    <div className="grid__2 form__space">
                      <div className="grid__profile">
                        <section className="detail">
                          <h4>Profile Picture</h4>
                          <label htmlFor="changeProfileImg">Change</label>
                          <input
                            type="file"
                            id="changeProfileImg"
                            onChange={readImageUrl}
                          />
                        </section>

                        <section className="displayImage">
                          {imageUrl ? (
                            <img src={imageUrl} alt="profile Image" />
                          ) : (
                            <h4>
                              {`${user.firstname.charAt(
                                0
                              )}${user.lastname.charAt(0)}`}
                            </h4>
                          )}
                        </section>
                      </div>

                      <div className="form-group">
                        <label htmlFor="">Mobile Number:</label>
                        <input type="tel" className="form-control" />
                      </div>
                    </div>

                    <div className="grid__2 form__space">
                      <div className="form-group">
                        <label htmlFor="">First Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={firstName}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Last Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={lastName}
                        />
                      </div>
                    </div>

                    <div className="grid__2 form__space">
                      <div className="form-group">
                        <label htmlFor="">Organization:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={organization}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Designation:</label>
                        <input
                          type="text"
                          className="form-control"
                          value={designation}
                        />
                      </div>
                    </div>

                    <div className="form-group form__space">
                      <label htmlFor="">E-mail:</label>
                      <input
                        type="text"
                        className="form-control"
                        value={email}
                      />
                    </div>
                  </section>
                </div>

                <div className="flex__two">
                  <section className="key__info">
                    <p>Activity</p>
                  </section>

                  <section className="profile__detail">
                    <div className="grid__profile">
                      <h4>Surveys Created</h4>
                      <button>5</button>
                    </div>
                    <div className="grid__profile">
                      <h4>Projects Created</h4>
                      <button>8</button>
                    </div>
                  </section>
                </div>
              </div>
            </TabPanel>
            <TabPanel>hello two</TabPanel>
          </Tabs>
        </div>
      </ProfileContainerStyle>

      {/* ************** */}

      {/* <ProfileContainer
        className="mx-8 relative bg-white flex flex-col md:flew-wrap"
        style={{ height: "40vw" }}
      >
        <div
          className="table-card-container w-full xl:w-9/12 mb-12 xl:mb-0 pr-4"
          style={{ marginTop: "9rem", width: "100%" }}
        >
          <Tabs>
            <TabList>
              <Tab style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                Summary
              </Tab>
              <Tab style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                Billing
              </Tab>
            </TabList>
            <TabPanel style={{ marginTop: "5rem" }}>
              {Object.keys(user).length > 0 && (
                <div
                  className="d-flex jusify-content-center"
                  style={{
                    height: "60vh",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <div className="row w-100">
                    <UserProfileImage
                      firstname={user.firstname}
                      lastname={user.lastname}
                      email={user.email}
                    />

                    <UserProfileDetail
                      company={user.company}
                      role={user.role}
                    />

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
                    <UserProfileImage
                      firstname={user.firstname}
                      lastname={user.lastname}
                      email={user.email}
                    />

                    <UserProfileDetail
                      company={user.company}
                      role={user.role}
                    />
                  </div>
                </div>
              )}
            </TabPanel>
          </Tabs>
        </div>
      </ProfileContainer> */}
    </>
  );
};

export default Profile;
