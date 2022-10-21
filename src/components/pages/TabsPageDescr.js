import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';

import { setContent } from '../../services/services';
import { services, navigation } from '../content/content';
import { Description } from '../theme/Title';
import { Section } from "../theme/Container";
import { NavBox } from '../theme/NavBox';
import { StyledLink } from '../theme/NavItem';



const SinglePageWrapp = styled.div`
    min-height: 720px;
    padding: 30px;
    width: 100%;
`

const SinglePageItem = styled.div`
    padding: 30px;
    position: relative;
    background-color: #fff7ec;
    height: 100%;
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

    const [process, setProcess] = useState('waiting');
    const [data, setData] = useState([]);


    const pathArr = window.location.pathname.slice(1).split('/')
    const { list, link } = useParams();

    useEffect(() => {
        getData(services, list, link)
    }, [])


    const getData = async (data, firstPath, secondPath) => {
        setProcess('loading')

        try {
            let { tabs } = data.find(item => item.link === firstPath);
            let res = tabs.find(item => item.link === secondPath);
            setData(res)
            setProcess('confirmed')
            return res
        } catch (err) {

            setProcess('error')
            alert(err);
        }
    }


    const firstTitle = (arr, pathArr) => {
        const { name, link } = arr.find(item => item.link === pathArr[0]);
        return (
            <StyledLink to={`/${link}`} >{name}</StyledLink>
        )
    };

    const secondTitle = (arr, pathArr) => {
        const { name } = arr.find(item => item.link === pathArr[1]);
        return (
            <StyledLink to=".." relative="path" >{name}</StyledLink>
        )
    };

    const thirdTitle = (data) => {
        const { title } = data;
        return (
            <StyledLink >{title}</StyledLink>
        )
    };


    function renderItem(obj) {
        const { title, price, descr, descrDetail } = obj;
        return (
            <SinglePageItem >
                <SinglePageTitle>{title}</SinglePageTitle>
                <SinglePageDescr>{descr}</SinglePageDescr>
                <SinglePageDescr>{descrDetail}</SinglePageDescr>
                <SinglePagePrice>{price}</SinglePagePrice>
            </SinglePageItem >
        )
    }

    const elements = useMemo(() => {
        return setContent(process, () => renderItem(data));
    }, [process])


    return (
        <Section as="section">
            <NavBox>{firstTitle(navigation, pathArr)} / {secondTitle(services, pathArr)} / {thirdTitle(data)}</NavBox>
            <SinglePageWrapp>
                {elements}
            </SinglePageWrapp>
        </Section>
    );
}

export default TabsPageDescr;
