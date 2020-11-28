import styled from "styled-components";
import { ReportBuiderContainerMixin, ReportBuilderTitleMixin } from "../../../styles/mixins";

export const ReportBuilderBudgetContainer = styled.div`
    ${ReportBuiderContainerMixin}
`

export const Title = styled.h1`
    ${ReportBuilderTitleMixin}
`

export const Body = styled.div`
    display: flex
`