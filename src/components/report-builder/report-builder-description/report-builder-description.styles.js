import styled from 'styled-components';
import { ReportBuilderTitleMixin } from '../../../styles/mixins';

export const ReportBuilderDescriptionContainer = styled.div`

    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    ${ReportBuilderTitleMixin}

`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
`