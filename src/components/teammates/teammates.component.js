import React from "react";
import TeammateCard from "../teammate-card/teammate-card.component";
import * as Style from "./teammates.style";

const teammateData = [
    {
        name: "Ralph Philips",
        email: "ralph@mm.com",
        id: 1
    },
    {
        name: "Toahh kerl",
        email: "kerl@mm.com",
        id: 2
    },
    {
        name: "Adam jones",
        email: "adam@mm.com",
        id: 3
    },
    {
        name: "helen dan",
        email: "helen@mm.com",
        id: 4
    },
    {
        name: "abraham jay",
        email: "jay@mm.com",
        id: 5
    },
    {
        name: "abrajellyham fish",
        email: "fish@mm.com",
        id: 6
    },
    {
        name: "kkk amm",
        email: "eee@mm.s",
        id: 7
    }
]

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
                <Style.TeammateTitle>
                    <h2>
                        Teammates
                    </h2>
                    <p>
                        7 members
                    </p>
                </Style.TeammateTitle>
                <Style.TeamMateBody>
                    {
                        teammateData.map((teammateDatum, idx) => <TeammateCard name={teammateDatum.name} email={teammateDatum.email} key={idx} />)
                    }
                </Style.TeamMateBody>
                <Style.InviteButton primary>
                    <i className="fas fa-pencil" />
                      Invite teammate
                </Style.InviteButton>

            </div>
        </div>
    )
}
export default Teammates;