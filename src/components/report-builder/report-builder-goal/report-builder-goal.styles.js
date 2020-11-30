import styled from 'styled-components';
import { ReportBuiderContainerMixin, ReportBuilderTitleMixin } from '../../../styles/mixins';

export const ReportBuilderGoalContainer = styled.div`
    ${ReportBuiderContainerMixin}
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

    & p{
        padding: .3rem 1rem;
    }
`
