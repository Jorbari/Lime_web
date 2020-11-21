import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const TeammateTitle = styled.div`
    display: flex;
    justify-content: space-between;

    & h2{
        font-size: 2rem;
        font-weight: bolder;
    }
`

export const TeamMateBody = styled.div`
    display:flex;
    flex-direction:column;
    max-height:42rem;
    overflow-y:scroll;
    margin: 2rem 0;
`
export const InviteButton = styled(CustomButton)`
    display:flex;
    margin-left:auto;
`