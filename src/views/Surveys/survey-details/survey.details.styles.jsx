import styled from "styled-components";

export const SapsProjectContainer = styled.div`
  .content__wrapper {
    margin-top: 8.7rem;
  }

  .flex__right {
    display: flex;
    justify-content: flex-end;
    padding: 2.6rem 0;
  }
  .flex__right > button {
    background-color: #b6e6bd;
    border-radius: 1rem;
    color: #5b5656;
    font-size: 1.8rem;
    padding: 1.1rem 1.8rem;
  }
  .flex__right > button:not(:last-child) {
    margin-right: 2.6rem;
  }

  .tab {
    display: flex;
  }
  .tab > .tab__list {
    color: #5b5656;
    font-size: 1.8rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  .tab__list.react-tabs__tab--selected {
    color: #5b5656;
    font-size: 2rem;
    font-weight: bold;
    border-bottom: 1px solid #5b5656;
  }
  .tab > .tab__list:not(:last-child) {
    margin-right: 4.2rem;
  }

  /* Survey-summary */

  .content {
    padding: 7.4rem 0;
    width: calc(100% - 30%);
    margin: auto;
  }

  /* Section One */
  .section__one {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .section__one > section {
    text-align: center;
    border-right: 0.7px solid #9badae;
    padding: 1rem 0;
  }
  .section__one > section:first-child {
    text-align: center;
    border-left: 0.07rem solid #9badae;
  }
  .section__one > section > h3 {
    color: #7fcd91;
    font-size: 2.2.rem;
    font-weight: 500;
    margin-bottom: 0.56rem;
  }
  .section__one > section > p {
    color: #5b5656;
    font-size: 1.8.rem;
    font-weight: 500;
  }
`;
