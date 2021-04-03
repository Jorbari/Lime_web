import styled from "styled-components";

export const ButtonContainer = styled.div`
  padding-top: 2.7rem;
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
`;

export const form_inputs = {
  width: "35rem",
  height: "36px",
  fontSize: "15px",
  backgroundColor: "white",
  paddingLeft: 0,
  borderBottom: "1px solid rgba(91, 86, 86, 0.5)",
  borderRadius: 0,
};

export const mb = (value = "7.5", width = "auto") => {
  return {
    marginBottom: value,
    width: width,
  };
};

export const collector_button = (color = "#7fcd91") => {
  return {
    backgroundColor: color,
    color: "white",
  };
};

export const Accordion = styled.div`
  margin: 5rem 0px;
  border: 0.7px solid #e2e4ec;
  box-sizing: border-box;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.04);
  border-radius: 0.6rem;
  overflow: hidden;
  & .card {
    padding: 1.56rem 2.3rem;
    border: unset;
    &:not(:last-child) {
      border-bottom: 1px solid #eaeaef;
    }
    // if the precedence and status width changes, so would this
    /* width: 47.7rem; */
    & .title__icon {
      transition: all 0.3s ease-in;
    }
    &[aria-expanded="true"]:not(.collapsed) .title__icon {
      transform: rotate(90deg);
    }
    @include respond(tab-port) {
      width: 100%;
    }
    &-header {
      background-color: unset;
      border: unset;
      padding: unset;
    }
    &-body {
      width: 100%;
      max-height: 13rem;
      overflow: auto;
      flex: 0;
    }
  }

  /* ******** */

  .title__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    cursor: pointer;
  }
  .title__count {
    display: flex;
    align-items: center;
    color: #222753;
    font-size: 2rem;
  }
  .title__count--tag {
    display: inline-block;
    font-size: 1.2rem;
    width: 3.7rem;
    height: 1.7rem;
    border-radius: 7rem;
    background-color: #e9e9e9;
    margin-left: 12px;
    text-align: center;
    color: #415276;
  }

  .title__icon {
    cursor: pointer;
  }

  .collapse__container {
    margin-left: 2rem;

    h4 {
      margin-bottom: 1rem;
      font-size: 1.4rem;
    }

    ul {
      list-style: disc;
      margin-left: 3rem;
    }

    li {
      font-size: 1.4rem;
    }

    li:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;
