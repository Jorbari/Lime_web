import React from 'react';
import * as Style from './user-profile-image.styles';

const UserProfileImage = ({ firstname, lastname, email }) => {
    return (
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
                {firstname.charAt(0)}
                {lastname.charAt(0)}
            </div>
            <h5
                style={{
                    marginBottom: "10px"
                }}
            >
                {firstname.replace(
                    firstname[0],
                    firstname[0].toUpperCase()
                )}{" "}
                {lastname.replace(
                    lastname[0],
                    lastname[0].toUpperCase()
                )}
            </h5>
            <p>{email}</p>
            <Style.EditProfileButton>
                Edit Profile
            </Style.EditProfileButton>
        </div>
    )
}

export default UserProfileImage