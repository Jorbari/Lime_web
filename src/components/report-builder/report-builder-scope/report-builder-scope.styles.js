import styled from "styled-components";
import {
  ReportBuiderContainerMixin,
  ReportBuilderTitleMixin,
} from "../../../styles/mixins";

export const ReportBuilderScopeContainer = styled.div`
  ${ReportBuiderContainerMixin}
`;

export const Title = styled.h1`
  ${ReportBuilderTitleMixin}
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 0 3rem;
`;
export const ScopeBar = styled.div`
  display: block;
  width: 100%;

  & h3 {
    font-weight: 500;
  }
  & p {
    font-size: 1.5rem;
  }
`;
