import React, { useState,useEffect } from "react";
import { 
    MainContainer,
    HeadingCard,
    Heading,
    Brief
 } from "./survey-done.styles";

const SurveyDone = (props) => {
    return (
        <>
        <MainContainer>
            <HeadingCard>
                <Heading>Your Response has been recorded successfully</Heading>
                <Brief>Thanks for filling this survey 🙂</Brief> 
            </HeadingCard>
        </MainContainer>
        </> 
    );
}

export default SurveyDone;