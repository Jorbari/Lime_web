import styled from "styled-components";

export const LineGraphContainer = styled.div`
  height: 100%;
  .content__wrapper {
    padding: 4.3rem 5.5rem;
    border: 2px solid #7fcd91;
    border-radius: 0.4rem;
    height: 100%;
  }

  .section__one {
    display: flex;
    align-items: center;
    padding-bottom: 4.5rem;
    border-bottom: 2px solid #ebeff2;
  }
  .section__one > .section__one--heading {
    width: 50%;
  }
  .section__one > .section__one--heading > h2 {
    color: #5b5656;
    font-size: 2.4rem;
    font-weight: 500;
  }
  .section__one > .toggle__show {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  }
  .section__one > .toggle__show > section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .section__one > .toggle__show > section > label {
    color: #6a707e;
    margin: unset;
  }
  .section__one > .toggle__show > section > select {
    color: #7fcd91;
    margin: unset;
    outline: none;
    border: none;
  }
  .section__two {
    width: 100%;
    margin-top: 12.9rem;
  }
  .section__two > #line-chart {
    height: 37.1rem !important;
    width: 100% !important;
  }
`;
