import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from 'react';


import { setContent } from '../../services/services';
import { Section } from "../theme/Container";
import { ImgSrc } from '../theme/SkillsImg';
import { services, navigation } from '../content/content';
import { NavBox } from '../theme/NavBox';
import { StyledLink } from '../theme/NavItem';

const SectionServicesTab = styled(Section)`
    background: ${props => props.theme.colors.bgGreen};
    @media ${props => props.theme.media.bigTablet} {
        padding: 0;
    }
`

const ServicesTabWrapp = styled.div`
    padding: 30px;
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(auto-fit, 400px);
    justify-content: space-around;
    gap: 50px;
    @media ${props => props.theme.media.bigTablet} {
        grid-template: repeat(2, 1fr) / repeat(auto-fit, 320px);
        padding: 10px;
    }
    @media ${props => props.theme.media.smallPhone} {
        grid-template: repeat(2, 1fr) / repeat(auto-fit, 300px);
    }
    `

const ServicesTabItem = styled.div`
    position: relative;
    transition: all 0.5s;
    border-radius: 5px;
    color: white;
        :hover{
        opacity: 0.8;
        color: white;
    }
`

const StyledLinkPage = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: inline-block;
    width: 100%;
    height: 100%;
        :hover {
        text-decoration: none;
        color: inherit;
    }
`;


const ServicesTabImg = styled(ImgSrc)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(60%);
`

const ServicesTabTitle = styled.h2`
    position: absolute;
    text-align: center;
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
    bottom: 20px;
    display: block;
    width: 100%;
    height: 50px;
    text-transform: uppercase;
    background-color: none;
    @media ${props => props.theme.media.bigTablet} {
        font-size: 18px;
    }
`

function ServicesTab() {

    const [process, setProcess] = useState('waiting');
    const [tabs, setTabs] = useState([]);
    const [navTitle, setNavTitle] = useState('');

    useEffect(() => {
        getData(services, navigation)
    }, [])

    const getData = async (dataTab, dataNav) => {
        setProcess('loading')
        try {
            const resTabs = dataTab
            setTabs(resTabs)
            const resNav = dataNav.find(item => item.link === window.location.pathname.slice(1));
            setNavTitle(resNav.name)
            setProcess('confirmed')
            return resTabs, resNav
        }
        catch (err) {
            setProcess('error')
            alert(err);
        }
    }

    const items = (arr) => arr.map(item => {
        const { id, name, img, link } = item;

        return (
            <ServicesTabItem key={id}>
                <StyledLinkPage to={`/services/${link}`} >
                    <ServicesTabImg img={img} alt={name} />
                    <ServicesTabTitle>{name}</ServicesTabTitle>
                </StyledLinkPage>
            </ServicesTabItem>
        )
    });

    const elements = useMemo(() => {
        return setContent(process, () => items(tabs));
    }, [process])

    return (
        <SectionServicesTab as="section">
            <NavBox><StyledLink>{navTitle}</StyledLink> / </NavBox>
            <ServicesTabWrapp>
                {elements}
            </ServicesTabWrapp>
        </SectionServicesTab>
    );
}

export default ServicesTab;
