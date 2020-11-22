import styled from 'styled-components';

export const SummaryContainer = styled.div`
  .sapsTable {
    width: 1000px;
    border: 0.5px solid #7fcd91;
    border-left: none;
    border-right: none;
  }

  .borderLine {
    height: 85.19px;
    border-right: 1px solid #7fcd91;
  }
 q
  .borderLineLeft {
    height: 85.19px;
    border-left: 1px solid #7fcd91;
  }

  .deleteProjectText {
    position: relative;
    right: -58.8rem;
    top: -21px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    text-decoration-line: underline;
    /* margin-right: -200px; */
    color: #dc4343;
    transform: matrix(1, 0.01, -0.01, 1, 0, 0);
  }

  .react-tabs__tab-list {
    margin-left: 2rem !important;
  }

  .card-header-text {
    position: absolute;
    width: 116px;
    height: 36px;
    left: 30px;
    top: 526px;

    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height */

    color: #5b5656;
  }

  .table-card-container {
    border: 1px solid #7fcd91;
    width: 1000px;
    height: 447px;
    border-radius: 4px;
    margin-top: 4.5rem;
    /* margin-left: 1rem; */
  }

  .details-card-table {
    width: 1191px;
    /* border: 0.5px solid #7fcd91; */
    border-left: none;
    border-right: none;
  }

  .details-card-table h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #5b5656;
  }

  /* .tab-list {
    padding-left: 2rem;
    padding-right: 2rem
  } */

  .project-status {
    position: absolute;
    width: 285px;
    height: 164px;
    /* left: 9px; */
    right: 78px;
    top: 334px;
    border-radius: 10px;
    background: rgba(182, 230, 189, 0.3);
  }

  .sapsHeader-conatiner {
    position: relative;
    top: 7rem;
    left: -2rem;
  }
`;
