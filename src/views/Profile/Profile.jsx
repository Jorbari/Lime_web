import React, { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Spinner } from "react-bootstrap";

import { decodeUserObject, encodeUserProfile } from "../../api/helpers";
import { ProfileContainerStyle } from "./profile.styles";
import { updateUserDetails, updateUserProfileImage } from "../../api/user";
import Notifier from "../../components/Notifier/notifier.component";

// import Teammates from "../../components/teammates/teammates.component";

const Profile = (props) => {
  const user = decodeUserObject();
  console.log(user);

  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiMessageFeedback, setApiMessageFeedback] = useState("");
  const [form, setState] = useState({
    userName: "",
    imageUrl: "",
    mobileNumber: "",
    firstName: "",
    lastName: "",
    organization: "",
    designation: "",
    email: "",
  });

  useEffect(() => {
    console.log(user);
    setState({
      ...form,
      imageUrl: user.imageUrl,
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      organization: user.company,
      designation: user.role,
      email: user.email,
    });
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
          setState({
            ...form,
            imageUrl: `data:image/png;base64,${fileBinary}`,
          });
          updateProfileImage(fileBinary);
        };
      }
    }
  };

  const updateProfileImage = async (fileBinary) => {
    const payload = {
      imageBinary: fileBinary,
    };
    const profileData = await updateUserProfileImage(payload);
    console.log(profileData);
  };

  const updateValue = (event) => {
    setState({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = () => {
    setOpen(false);
  };

  const updateProfile = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const payload = {
      username: form.username,
      firstname: form.firstname,
      lastname: form.lastname,
      company: form.organization,
      role: form.designation,
    };

    const returnedValue = await updateUserDetails(payload);
    if (returnedValue.data !== undefined || returnedValue.data !== null) {
      setOpen(true);
      setApiMessageFeedback("Profile updated successfully");
      const userData = { ...user, ...payload };
      encodeUserProfile(userData);
      setIsLoading(false);
      console.log(returnedValue);
    } else {
      setOpen(true);
      setApiMessageFeedback("An error occurred, please try again !!!");
      setIsLoading(false);
    }
  };

  return (
    <>
      <Notifier
        open={open}
        handleClick={() => handleClick()}
        message={apiMessageFeedback}
      />

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

                  <form className="profile__detail" onSubmit={updateProfile}>
                    <div className="grid__2 form__space">
                      <div className="grid__profile">
                        <section className="detail">
                          <h4>Profile Picture</h4>
                          <label htmlFor="changeProfileImg">Change</label>
                          <input
                            type="file"
                            id="changeProfileImg"
                            name="imageUrl"
                            onChange={readImageUrl}
                          />
                        </section>

                        <section className="displayImage">
                          {form.imageUrl ? (
                            <img src={form.imageUrl} alt="profile Image" />
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
                        <label>Mobile Number:</label>
                        <input
                          type="tel"
                          name="mobileNumber"
                          className="form-control"
                          value={form.mobileNumber}
                          onChange={updateValue}
                        />
                      </div>
                    </div>

                    <div className="grid__2 form__space">
                      <div className="form-group">
                        <label>First Name:</label>
                        <input
                          type="text"
                          name="firstname"
                          className="form-control"
                          value={form.firstname || ""}
                          onChange={updateValue}
                        />
                      </div>
                      <div className="form-group">
                        <label>Last Name:</label>
                        <input
                          type="text"
                          name="lastname"
                          className="form-control"
                          value={form.lastname || ""}
                          onChange={updateValue}
                        />
                      </div>
                    </div>

                    <div className="grid__2 form__space">
                      <div className="form-group">
                        <label>Organization:</label>
                        <input
                          type="text"
                          name="organization"
                          className="form-control"
                          value={form.organization || ""}
                          onChange={updateValue}
                        />
                      </div>
                      <div className="form-group">
                        <label>Designation:</label>
                        <input
                          type="text"
                          name="designation"
                          className="form-control"
                          value={form.designation || ""}
                          onChange={updateValue}
                        />
                      </div>
                    </div>

                    <div className="form-group form__space">
                      <label>E-mail:</label>
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        value={form.email || ""}
                        onChange={updateValue}
                      />
                    </div>

                    <div className="grid__2 form__space">
                      {/* <div className="form-group">
                        <p>Gender</p>

                        <section className="form__radios">
                          <div>
                            <label htmlFor="male">Male</label>

                            <input
                              type="radio"
                              name="gender"
                              className="form-control"
                            />
                          </div>
                          <div>
                            <label htmlFor="female">Female</label>

                            <input
                              type="radio"
                              name="gender"
                              className="form-control"
                            />
                          </div>
                        </section>
                      </div> */}

                      <div className="form-group flex__right">
                        <button onClick={updateProfile} type="submit">
                          {isLoading ? (
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />
                          ) : (
                            "Save"
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
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
    </>
  );
};

export default Profile;
