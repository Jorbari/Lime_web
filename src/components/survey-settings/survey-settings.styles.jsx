import styled from 'styled-components';

export const Section = styled.section`
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    &:not(:last-child){
        margin-bottom: 2.6rem;
    }
`

export const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 5.3rem;
    height: 2.6rem;
    margin: unset;
`

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + .slider {
    background-color: #7FCD91;
    }
    &:checked + .slider:before {
    -webkit-transform: translateX(2.3rem);
    -ms-transform: translateX(2.3rem);
    transform: translateX(2.3rem);
    }

  &:checked + .slider::after{
        content: "On";
        left: .7rem;
        color:  #fff;
    }

`

export const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #C9D6DF;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 10rem;

    &::before {
    position: absolute;
    content: "";
    height: 2rem;
    width: 2rem;
    left: 4px;
    bottom: 3px;
    border-radius: 50%;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    }

    &::after{
        position: absolute;
        content:'Off';
        bottom: 0;
        right: .7rem;
        font-weight:400;
        font-size:1.4rem;
        color: '#001B36';
    }
`
export const SectionForm = styled.div`
    margin-top: 5rem;
    & >:not(:last-child){
        margin-bottom: 1.8rem
    }
`
export const ConfirmationInput = styled.input`
    border: unset;
    width: 100%;
    font-family: 'Poppins';
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.1rem;
    border-bottom: 0.5px solid #5B5656;
    height: 2.5rem;
    background: unset;
    &:focus{
        outline: unset;
    }
`