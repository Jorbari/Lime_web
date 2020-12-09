import styled from "styled-components";
import { globalLines, primaryColor } from "../../../styles/global-variables";

export const ReportBuiderDocsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  flex: 1 1;
  padding: 0 5rem;
  margin-top: 6rem;
`;
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 600;
`;

export const DocsTopNavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid ${globalLines};
  margin-bottom: 4rem;
`;

export const DocsTopNav = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 2rem;

  & button:not(:first-child) {
    margin-left: 3rem;
  }
`;
export const DocsBody = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 0 10rem;
  padding: 3rem 6rem;
  border: 2px solid ${primaryColor};
`;

export const DefaultView = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    margin-top: 5.7rem;
    color: #5b5656;
    font-size: 2.8rem;
  }
`;
