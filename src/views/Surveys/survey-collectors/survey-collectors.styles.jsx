import styled from "styled-components";

export const SurveyCollectorsStyle = styled.div`
  .collector__wrapper {
    width: calc(100% - 30%);
    margin: 11.48rem auto;
  }

  .tab__collector {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 3rem;
    margin-bottom: 1.9rem;
  }
  .tab__collector > .tab__collector__list {
    padding: 6.8rem 0;
    border: 1px solid #7fcd91;
    border-radius: 1rem;
    text-align: center;
    height: 9.5rem;
    cursor: pointer;
  }
  .tab__collector > .tab__collector__list.react-tabs__tab--selected {
    background-color: #ebf8ed;
  }
  thead th {
    color: #5b5656;
    font-weight: 600;
    font-size: 1.8rem;
  }
  thead th:first-child,
  tbody td:first-child {
    width: 5%;
  }
  thead th:nth-child(2),
  tbody td:nth-child(2) {
    width: 45%;
  }
  .tab__collector__content.react-tabs__tab-panel--selected {
    background-color: #ebf8ed;
    border: 1.5px solid #a4d4ae;
    border-radius: 1rem;
    padding: 2rem 2.5rem;
  }
  .tab__collector__content--copy {
    background-color: #ebf8ed;
    border: 1.5px solid #a4d4ae;
    border-radius: 1rem;
    padding: 2rem 2.5rem;
  }
  .table__row {
    border-top: 0.5px solid #9f9f9f;
  }
  .table__row:last-child {
    border-bottom: 0.5px solid #9f9f9f;
  }
  .colorLess {
    background-color: transparent;
    border: none;
  }
  .copy__link {
    display: flex;
    justify-content: space-between;
    padding: 2rem 1.4rem 2rem 4.7rem;
    border: 1px solid #7fcd91;
    border-radius: 1rem;
    align-items: center;
  }
  .copy__link > p {
    color: #5b5656;
    font-size: 2.4rem;
    font-weight: 500;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .copy__link > button {
    color: #5b5656;
    font-size: 1.8rem;
    font-weight: normal;
    background-color: #b6e6bd;
    border-radius: 1rem;
    padding: 1.1rem 1.8rem;
  }
`;
