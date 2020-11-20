import React from 'react';

const UserProfileDetail = ({ company, role }) => {
    return (

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
                    <p className="body font-weight-bold">{company}</p>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <p className="title">Designation</p>
                    <p className="body font-weight-bold">{role}</p>
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
    )
}

export default UserProfileDetail