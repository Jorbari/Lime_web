import React from "react";

const Teammates = () => {
    return (
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
    )
}
export default Teammates;