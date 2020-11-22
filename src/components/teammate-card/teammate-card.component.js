import React from 'react';
import { DeleteContainer, TeamMateCardContainer, TeammateInfo, TeammateInfoContainer, TeammatePhoto } from './teammate-card.styles';

const TeammateCard = ({ name, email }) => {
    return (
        <TeamMateCardContainer>
            <TeammateInfoContainer>
                <TeammatePhoto src="https://images.unsplash.com/photo-1602524206684-fdf6393c7d89?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                <TeammateInfo>
                    <h1>{name}</h1>
                    <p>{email}</p>
                </TeammateInfo>
            </TeammateInfoContainer>
            <DeleteContainer>
                <button>Delete</button>
            </DeleteContainer>
        </TeamMateCardContainer>
    )
}

export default TeammateCard