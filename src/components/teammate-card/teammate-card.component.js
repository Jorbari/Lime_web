import React from 'react';
import * as Style from './teammate-card.styles';

const TeammateCard = ({ name, email }) => {
    return (
        <Style.TeamMateCardContainer>
            <Style.TeammateInfoContainer>
                <Style.TeammatePhoto src="https://images.unsplash.com/photo-1602524206684-fdf6393c7d89?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                <Style.TeammateInfo>
                    <h1>{name}</h1>
                    <p>{email}</p>
                </Style.TeammateInfo>
            </Style.TeammateInfoContainer>
            <Style.DeleteContainer>
                <button>Delete</button>
            </Style.DeleteContainer>
        </Style.TeamMateCardContainer>
    )
}

export default TeammateCard