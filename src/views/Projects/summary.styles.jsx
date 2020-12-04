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

  .delete__ {
    position: unset;
    color: #DC4343;
    font-size: 1.4rem;
    text-decoration: underline;
    outline: none;
    border: none;
  }

  .react-tabs__tab-list {
    margin-left: 2rem !important;
  }

  // .card-header-text {
  //   position: absolute;
  //   width: 116px;
  //   height: 36px;
  //   left: 30px;
  //   top: 526px;

  //   font-family: "Poppins", sans-serif;
  //   font-weight: 600;
  //   font-size: 24px;
  //   line-height: 36px;
  //   color: #5b5656;
  // }

  // .table-card-container {
  //   border: 1px solid #7fcd91;
  //   border-radius: 4px;
  //   margin-top: 4.5rem;
  // }

  // .details-card-table {
  //   width: 1191px;
  //   /* border: 0.5px solid #7fcd91; */
  //   border-left: none;
  //   border-right: none;
  // }

  // .details-card-table h4 {
  //   font-style: normal;
  //   font-weight: 500;
  //   font-size: 20px;
  //   line-height: 30px;
  //   color: #5b5656;
  // }

  /* .tab-list {
    padding-left: 2rem;
    padding-right: 2rem
  } */

  // .project-status {
  //   position: absolute;
  //   width: 285px;
  //   height: 164px;
  //   /* left: 9px; */
  //   right: 78px;
  //   top: 334px;
  //   border-radius: 10px;
  //   background: rgba(182, 230, 189, 0.3);
  // }

  .project__detail {
    margin-top: 3.861rem;
  }
  .project__detail--grid {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .project__detail--grid > h4 {
    font-size: 2.4rem;
    font-weight: 600;
    color: #5B5656;
  }
  .project__detail--grid > button {
    font-size: 1.4rem;
    font-weight: 300;
    color: #4B5FA7;
    border: none;
    outline: none;
    background: transparent;
    text-decoration: underline;
  }
  .project__detail--box {
    margin-top: .5rem; 
    padding: 2rem;
    border: 0.5px solid #7fcd91;
    border-radius: 1rem;
  }
  .project__info--grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .project__info > p {
    color: #5B5656;
    font-size: 1.8rem;
    font-weight: normal;
    margin-bottom: .5rem;
  }
  .project__info > h4 {
    color: #5B5656;
    font-size: 2rem;
    font-weight: 500;
  }
  .project__detail--box > .project__space:not(:last-child) {
    margin-bottom: 3.5rem
  }








  .sapsHeader-conatiner {
    position: relative;
    display: flex;
    justify-content: space-between;
  }
`;
