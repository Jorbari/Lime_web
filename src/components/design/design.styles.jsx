import styled from "styled-components";
import { ReactComponent as AddCircleIcon } from "../../assets/add-with-circle.svg";

export const MainContainer = styled.div`
  max-height: 100%;
  width: 100%;
  background: #f5f5f5;
  border: 1.5px solid #f8f8ff;
  display: flex;
  padding: 2.8rem 1.7rem;
  padding-right: 0;
  flex-direction: column;

  .active {
    border: 2px solid black;
  }

  .theme_colour_picker {
    position: absolute;
    left: 24%;
    z-index: 2;
    bottom: 31%;
    background: white;
    padding: 0.5rem;
  }
  .background_colour_picker {
    position: absolute;
    left: 24%;
    z-index: 2;
    bottom: 16%;
    background: white;
    padding: 0.5rem;
  }
  .theme_colour_picker > section,
  .background_colour_picker > section {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
  .theme_colour_picker > section > button,
  .background_colour_picker > section > button {
    font-weight: bold;
  }
`;
export const ContentHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 3.8rem;
  margin-bottom: 2.8rem;
  .heading__4 {
    font-weight: 600;
    font-size: 2.2rem;
    line-height: 3.3rem;
    color: #7fcd91;
  }
`;

export const SectionContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 1.8rem;
`;

export const Section = styled.section`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.7rem;
  text-align: left;
  &:not(:last-child) {
    margin-bottom: 5rem;
  }
`;

export const SectionHeading = styled.h6`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.7rem;
  text-align: left;
  margin-bottom: 1rem;
`;

export const InputGroup = styled.div`
  & > input[type="file"] {
    display: none;
  }
`;

export const InputLabel = styled.label`
  height: 100%;
  width: 100%;
  border: 1px solid #a9a9a9;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 1.3rem;
  display: flex;
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 2.1rem;
  text-align: left;
  align-items: center;
  cursor: pointer;
  & > :not(:last-child) {
    margin-right: 2rem;
  }
`;

export const ColorGrid = styled.div`
  display: grid;
  grid-gap: 1.7rem;
  grid-template-columns: repeat(auto-fit, 3.1rem);
`;

export const ColorPreview = styled.div`
  width: 3.1rem;
  height: 3.1rem;
  border-radius: 50%;
  cursor: pointer;
  background: ${(props) => (props.color ? props.color : "#C4C4C4")};
`;
export const AddColorButton = styled(AddCircleIcon)`
  width: 3.1rem;
  height: 3.1rem;
  cursor: pointer;
`;
