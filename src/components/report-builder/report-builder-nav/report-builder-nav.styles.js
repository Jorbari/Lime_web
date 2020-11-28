import styled from 'styled-components';
import { globalLines, primaryColor, primaryColorLight } from '../../../styles/global-variables';

export const ReportBuiderContainer = styled.div`
    background-color: ${primaryColorLight};
    border-radius: 10px;
    padding: 0 2rem;
    height: 85vh;
    max-width: 18%;
    margin-top: 3rem;
    flex: 1 1 auto;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`

export const ReportBuilderTitle = styled.h2`
    font-size:2rem;
    font-weight:700;
    margin: 3rem auto;

`

export const ReportCards = styled.div`
    border: 1px solid ${globalLines};
    border-radius:5px;
    display:flex;
    justify-content:center;
    background-color: ${({ selected }) => selected ? primaryColor : null};
    align-items:center;
    width: auto;
    height: 5rem;
    cursor: pointer;
`