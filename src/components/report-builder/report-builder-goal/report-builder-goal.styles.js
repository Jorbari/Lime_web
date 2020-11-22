import styled from 'styled-components';
import { globalLines } from '../../../styles/global-variables';
import { ReportBuilderTitleMixin } from '../../../styles/mixins';

export const ReportBuilderGoalContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${globalLines};
    margin: 3.5rem 0;
    padding: 3.5rem 0;
`

export const Title = styled.h1`
    ${ReportBuilderTitleMixin}
`

export const GoalsList = styled.div`
    display:flex;
    flex-direction: column;
    padding: 0 2rem;
    margin: 1rem 0;

    & h3{
        font-weight:500;
        font-size:1.7rem;
    }
    & ul {
        display: flex;
        flex-direction: column;
        list-style-type: disc;
        padding-left: 3rem;
    }

    & li {
        padding: .3rem 0;
    }
`