import styled from "styled-components";
import { ReportBuiderContainerMixin, ReportBuilderTitleMixin } from "../../../styles/mixins";

export const ReportTeamContainer = styled.div`
   ${ReportBuiderContainerMixin}
`
export const Title = styled.h1`
    ${ReportBuilderTitleMixin}
`
export const TeamMemberBody = styled.div`
    display:flex;
    flex-direction: column;
    padding: 0 2rem;    
    margin: 1rem 0;
    font-size: 1.5rem;

    & h3{
        font-weight: 500;
    }
    & p{
        padding: .3rem 1rem;
        margin-bottom: 2rem;
    }
`