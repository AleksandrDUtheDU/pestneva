import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { services, navigation } from '../content/content';
import { Description } from '../theme/Title';
import { Section } from "../theme/Container";
import { NavBox } from '../theme/NavBox';
import NavItem from '../theme/NavItem';



const SinglePageWrapp = styled.div`
    min-height: 720px;
    padding: 30px;
    display: grid;
    justify-content: space-around;
    grid-template: repeat(3, minmax(260px, auto)) / repeat(auto-fit, minmax(280px, 400px)) ;
    gap: 30px;
    @media ${props => props.theme.media.notebook} {
        grid-template: repeat(3, minmax(260px, auto)) / repeat(auto-fit, minmax(280px, 400px)) ;
        padding: 10px;
        gap: 20px;
    }
    @media ${props => props.theme.media.bigTablet} {
        grid-template: repeat(3, minmax(260px, auto)) / repeat(auto-fit, minmax(280px, 340px)) ;
    }
`

const SinglePageItem = styled.div`
    position: relative;
    background-color: #fff7ec;
    min-height: 260px;
    transition: all 0.3s;
    :hover{
        box-shadow: 3px 2px 2px grey;
        text-decoration: none;
    }
    :focus{
        box-shadow: 3px 2px 2px grey;
    }
`

const SinglePageTitle = styled.h2`
    text-align: center;
    font-size: 20px;
    line-height: 28px;
    font-weight: 700;
    color: ${props => props.theme.colors.mainGreen};
    text-transform: uppercase;
    :hover{
        text-decoration: none;
    }
`

const SinglePageDescr = styled(Description)`
    margin-top: 20px;
    text-align: left;
    padding-bottom: 30px;
    color: ${props => props.theme.colors.liteGreen};
    :hover{
        text-decoration: none;
    }
`
const SinglePagePrice = styled(Description)`
    margin-top: 20px;
    text-align: left;
    font-weight: 700;
    text-transform: uppercase;
    color: ${props => props.theme.colors.mainGreen};
    :hover{
        text-decoration: none;
    }
`


function TabsPageDescr() {

    const pathArr = window.location.pathname.slice(1).split('/')
    const { list, link } = useParams();

    const obj = (data, firstPath, secondPath) => {
        let { tabs } = data.find(item => item.link === firstPath);
        let res = tabs.find(item => item.link === secondPath);
        return res
    }

    const data = obj(services, list, link)

    const firstTitle = (arr, pathArr) => {
        const { name, link } = arr.find(item => item.link === pathArr[0]);
        return (
            <NavItem name={name} link={link} />
        )
    };

    const secondTitle = (arr, pathArr) => {
        const { name, link } = arr.find(item => item.link === pathArr[1]);
        return (
            <NavItem name={name} link={link} />
        )
    };

    const thirdTitle = (data) => {
        const { title, link } = data;
        return (
            <NavItem name={title} link={link} />
        )
    };

    function renderItem(obj) {
        const { title, price, descr } = obj;
        return (
            <SinglePageItem >
                <SinglePageTitle>{title}</SinglePageTitle>
                <SinglePagePrice>{price}</SinglePagePrice>
                <SinglePageDescr>{descr}</SinglePageDescr>
            </SinglePageItem >
        )
    }

    return (
        <Section as="section">
            <NavBox>{firstTitle(navigation, pathArr)} / {secondTitle(services, pathArr)} / {thirdTitle(data)}</NavBox>
            <SinglePageWrapp>
                {renderItem(data)}
            </SinglePageWrapp>
        </Section>
    );
}

export default TabsPageDescr;
