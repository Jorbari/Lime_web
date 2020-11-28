import styled from "styled-components";
import { ReportBuiderContainerMixin, ReportBuilderTitleMixin } from "../../../styles/mixins";

export const ReportBuilderDateContainer = styled.div`
    ${ReportBuiderContainerMixin}
`

export const Title = styled.h1`
    ${ReportBuilderTitleMixin}
`

export const Body = styled.div`
    display: flex;
    padding: 0 3rem;
`
export const DateBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    & h3 {
        font-weight: 500
    }
    & p{
        font-size: 1.5rem
    }
`