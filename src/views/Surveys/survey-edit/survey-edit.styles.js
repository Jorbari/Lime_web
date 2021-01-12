import styled from "styled-components";
import { ReactComponent as caret } from "../../../assets/caret-down.svg";
import { ReactComponent as eye } from "../../../assets/preview-eye.svg";
import { variables } from "../../../App.styles";
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: ${`calc(100vh - ${variables.navHeight})`};
`;

export const ButtonContainer = styled.div`
  padding: 2.7rem;
  padding-bottom: unset;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > :not(:last-child) {
    margin-right: 3rem;
  }
`;

export const Container = styled.div`
  .tab {
    display: flex;
    margin-bottom: 3.4rem;
    border-bottom: 0.5px solid rgba(91, 86, 86, 0.5);
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
`;

export const FormBuilderContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 3rem;
  margin-bottom: 3.4rem;
  min-height: 0;
`;

export const Eye = styled(eye)``;
export const CaretDown = styled(caret)``;

export const ShareSurvey = styled.div`
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

  .colorLess {
    background-color: transparent;
    border: none;
  }
  .copy__link {
    display: flex;
    justify-content: space-between;
    padding: 2rem 1.4rem 2rem 4.7rem;
    /* border: 1px solid #7fcd91; */
    border-radius: 1rem;
    align-items: center;
    flex-direction: column;
    align-items: end;
  }
  .copy__link > p {
    color: #5b5656;
    font-size: 2.4rem;
    font-weight: 500;
  }
  .copy__link > button {
    color: #5b5656;
    font-size: 1.8rem;
    font-weight: normal;
    background-color: #b6e6bd;
    border-radius: 1rem;
    padding: 1.1rem 1.8rem;
    align-self: flex-end;
  }

  .sendViaMail {
    padding-top: 2rem;
  }
  .sendViaMail > .form__group:not(:last-child) {
    margin-bottom: 4rem;
  }
  .sendViaMail > .form__group {
    display: flex;
    align-items: center;
  }
  .sendViaMail > .form__group > label {
    margin-right: 1rem;
    color: #5b5656;
    font-size: 1.8rem;
  }
  .sendViaMail > .form__group > input {
    border: none;
    outline: none;
    border-bottom: 0.5px solid rgba(91, 86, 86, 0.5);
    background: transparent;
    width: 100%;
  }
  .sendViaMail > .form__group:last-child {
    display: flex;
    justify-content: flex-end;
    gap: 0 6rem;
  }
  .sendViaMail > .form__group:last-child > button {
    color: #5b5656;
    font-size: 1.8rem;
    align-items: center;
  }
  .sendViaMail > .form__group:last-child > button:last-child {
    background: #b6e6bd;
    border-radius: 10px;
    padding: 1.1rem 1.8rem;
  }

  /* Third tab */
  .options_control {
    display: flex;
    gap: 0 3rem;
    align-items: center;
    margin-bottom: 4rem;
  }
  .options_control > section {
    flex: 1;
  }
  .colored__ > section {
    background: #ebf8ed;
    border: 1px solid #7fcd91;
    border-radius: 1rem;
    padding: 2.7rem 3.3rem;
  }
  .colored__ > section:last-child {
    background-color: #e5e5e5;
    border: 1px solid #adabab;
  }
  .colored__ > section > input {
    margin-right: 2.1rem;
  }
  .options_control > section > button {
    font-size: 1.8rem;
    background: #b6e6bd;
    border-radius: 10px;
    padding: 1.1rem 1.8rem;
  }
  .options_control:last-child > section {
    background: none;
  }
  .options_control:last-child > section:last-child {
    display: flex;
    justify-content: flex-end;
  }
`;
