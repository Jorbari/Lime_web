import React from 'react';
import{
    MainContainer,
    ContentHeader,
    SectionContainer,
    Section,
    SectionHeading,
    InputGroup,
    InputLabel,
    ColorGrid,
    ColorPreview,
    AddColorButton
} from './design.styles'

const Design = ()=>{

    return(
        <MainContainer>
            <ContentHeader>
                <h4 className="heading__4">Design</h4>
                <span>
                    <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM19 5.25L1 5.25V6.75L19 6.75V5.25Z" fill="#5B5656"/>
                    </svg>
                </span>
            </ContentHeader>
            <SectionContainer>
                <Section>
                    <SectionHeading>Heading</SectionHeading>
                        <InputGroup>
                            <input type="file" name="image" id="image" accept="image/*"/>
                            <InputLabel htmlFor="image">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM11.14 8.86L8.14 12.73L6 10.14L3 14H15L11.14 8.86Z" fill="#5B5656"/>
                                </svg>
                                <span>Choose Image</span>
                            </InputLabel>
                        </InputGroup>
                </Section>
                <Section>
                    <SectionHeading>Theme colour</SectionHeading>
                    <ColorGrid >
                        <ColorPreview color="purple"></ColorPreview>
                        <ColorPreview color="pink"></ColorPreview>
                        <ColorPreview color="red"></ColorPreview>
                        <ColorPreview color="orange"></ColorPreview>
                        <ColorPreview color="turquoise"></ColorPreview>
                        <AddColorButton/>
                    </ColorGrid>
                </Section>
                <Section>
                    <SectionHeading>Background colour</SectionHeading>  
                    <ColorGrid >
                        <ColorPreview></ColorPreview>
                        <AddColorButton/>
                    </ColorGrid>
                    </Section>
            </SectionContainer>
        </MainContainer>
    )
}

export default Design