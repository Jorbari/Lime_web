import React,{useState} from 'react';
import Design from '../design/design.component';
import QuestionLibrary from '../question-library/question-library.component';
import SurveySettings from '../survey-settings/survey-settings.component';
import {ReactComponent as PaintBrushIcon} from '../../assets/paint-brush.svg';
import {ReactComponent as QuestionMarkIcon} from '../../assets/question-mark.svg';
import {ReactComponent as SettingsIcon} from '../../assets/settings-cog.svg';
import {
    MainContainer,
    Nav,
    NavItem,
    ContentContainer,
} from './survey-side-bar.styles'

const SurveySideBar = ()=>{
    const [navItem, setNavItem] =  useState('design')
    const [showNav, setShowNav] =  useState(true)
    const isNav = (value)=> value === navItem?'active':null;
    const setNav = (value)=>{
        if(navItem === value){
            setShowNav(false)
            setNavItem('')
            return
        }
        setShowNav(true)
        setNavItem(value)
    }
    return(
        <MainContainer>
            <Nav showNav={showNav}>
                <NavItem className = {isNav('design')} onClick={()=>setNav('design')}>
                    <PaintBrushIcon/>
                </NavItem>
                <NavItem className = {isNav('help')} onClick={()=>setNav('help')}>
                    <QuestionMarkIcon/>
                </NavItem>
                <NavItem className = {isNav('settings')} onClick={()=>setNav('settings')}>
                    <SettingsIcon/>
                </NavItem>
            </Nav>
            <ContentContainer showNav={showNav}>
                    {
                        {
                            'design':<Design/>,
                            'help':<QuestionLibrary/>,
                            'settings':<SurveySettings/>,
                            '':null
                        }[navItem]
                    }
                    
            </ContentContainer>
        </MainContainer>
    )
}

export default SurveySideBar