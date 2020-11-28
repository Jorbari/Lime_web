import { css } from 'styled-components';
import { globalLines } from './global-variables';

export const ReportBuilderTitleMixin = css`
    display:flex;
    justify-content:flex-start;
    font-size: 2.5rem;
    font-weight: 600;
    margin: .5rem 0;
    padding: 2rem 2rem;
    justify-content: space-between;
`

export const ReportBuiderContainerMixin = css`
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${globalLines};
    margin: 3.5rem 0;
    padding: 1rem 0;
`