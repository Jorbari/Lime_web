import styled from 'styled-components';

export const ReportProjectContainer = styled.div`
  .react-tabs__tab-list {
    margin-left: 2rem !important;
  }
`;



export const CardContainer = styled.div`
  border: none;

  .card {
    width: 286.28px;
    height: 204px;
    border: 1px solid #7fcd91;
    box-sizing: border-box;
    border-radius: 10px;
  }

  .card-image-and-text-container {
    margin: 0 auto;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .card-text {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #5b5656;
  }

  .newProjectButton {
    padding: 11px 18px;
    width: 203.11px;
    height: 49px;
    background: #b6e6bd;
    border-radius: 10px;
  }

  .sortBy {
    border: 1px solid #7fcd91;
    box-sizing: border-box;
    border-radius: 10px;
    width: 176px;
    height: 49px;
  }
  .pt-32 {
    padding-top: 2.6rem;
  }
  .break-words {
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .break-words > p {
    margin-top: 2.9rem
  }
`;