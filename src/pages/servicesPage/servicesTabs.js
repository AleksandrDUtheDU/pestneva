import styled from 'styled-components';
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useMemo } from 'react';
import { Helmet } from "react-helmet";


import { setContent } from '../../shared/services';
import { Section } from "../../app/theme/Container";
import { services, navigation } from '../../dataBase/dataBase';
import NavBox from '../../app/theme/NavBox';
import { StyledLink } from '../../app/theme/NavItem';
import { Description } from '../../app/theme/Title';

const BdServicesTabs = styled.section`
    background: ${props => props.theme.colors.bgGreen};

`




const SectionServicesTab = styled(Section)`
    /* background: ${props => props.theme.colors.bgGreen}; */
    @media ${props => props.theme.media.bigTablet} {
        padding: 0;
    }
`

const ServicesTabWrapp = styled.div`
    padding: 30px;
    display: grid;
    grid-template: repeat(2, minmax(300px, auto)) / repeat(auto-fit, 400px);
    justify-content: space-around;
    gap: 50px;
    @media ${props => props.theme.media.bigTablet} {
        grid-template: repeat(2, 1fr) / repeat(auto-fit, 320px);
        padding: 10px;
        gap: 30px;

    }
    @media ${props => props.theme.media.smallPhone} {
        grid-template: repeat(2, 1fr) / repeat(auto-fit, 300px);
    }
    `

const ServicesTabItem = styled.div`
    padding: 30px;
    /* height: 300px; */
    transition: all 0.5s;
    border-radius: 5px;
    border: 2px solid ${props => props.theme.colors.mainGreen};
    color: white;
    :hover {
        background: ${props => props.theme.colors.mainGreen};
    }
    @media ${props => props.theme.media.phone} {
        padding: 15px;
    }

`

const StyledLinkPage = styled(Link)`
    text-decoration: none;
    color: white;
    display: inline-block;
    width: 100%;
    height: 100%;
        :hover {
        text-decoration: none;
        color: inherit;
    }
`;


const ServicesTabTitle = styled.h2`
    text-align: center;
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
    bottom: 20px;
    display: block;
    width: 100%;
    /* height: 50px; */
    text-transform: uppercase;
    background-color: none;
    @media ${props => props.theme.media.bigTablet} {
        font-size: 18px;
    }
`

const ServicesTabDescr = styled(Description)`
    margin-top: 50px;
    color: white;
    text-align: left;
    @media ${props => props.theme.media.phone} {
        margin-top: 20px;
    }

`


function ServicesTabs() {

    const { pathname } = useLocation();

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
            const resNav = dataNav.find(item => item.link === pathname.slice(1));
            setNavTitle(resNav.name)
            setProcess('confirmed')
            return resTabs
        }
        catch (err) {
            setProcess('error')
            alert(err);
        }
    }
    const items = (arr) => arr.map(item => {
        const { id, name, link, descr } = item;

        return (
            <ServicesTabItem key={id}>
                <StyledLinkPage to={`/services/${link}`} >
                    <ServicesTabTitle>{name}</ServicesTabTitle>
                    <ServicesTabDescr>{descr}</ServicesTabDescr>
                </StyledLinkPage>
            </ServicesTabItem>
        )
    });

    const elements = useMemo(() => {
        return setContent(process, () => items(tabs));
    }, [process])

    return (
        <BdServicesTabs>
            <NavBox><StyledLink>{navTitle}</StyledLink> / </NavBox>
            <SectionServicesTab>
                <ServicesTabWrapp>
                    {elements}
                </ServicesTabWrapp>
            </SectionServicesTab>

        </BdServicesTabs>
    );
}

export default ServicesTabs;
