import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';

import { setContent } from '../../shared/services';
import { services, navigation } from '../../dataBase/dataBase';
import { Description } from '../../app/theme/Title';
import { Section } from "../../app/theme/Container";
import NavBox from '../../app/theme/NavBox';
import { StyledLink } from '../../app/theme/NavItem';

const BdServicesTabs = styled.section`
    background: #efe6db;
`


const SinglePageWrapp = styled.div`
    min-height: 720px;
    padding: 30px;
    width: 100%;
    /* background: #efe6db; */
`

const SinglePageItem = styled.div`
    padding: 30px;
    position: relative;
    /* background-color: #fff7ec; */
    height: 100%;
    transition: all 0.3s;
`

const SinglePageTitle = styled.h2`
    text-align: center;
    font-size: 20px;
    line-height: 28px;
    font-weight: 700;
    color: black;
    /* color: ${props => props.theme.colors.mainGreen}; */
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
    /* color: ${props => props.theme.colors.mainGreen}; */
    color: black;

    :hover{
        text-decoration: none;
    }
`


function ServicesTabsPageDescr() {

    const [process, setProcess] = useState('waiting');
    const [data, setData] = useState([]);

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

    const firstTitle = (arr, path) => {
        const { name, link } = arr.find(item => item.link === path);
        return (
            <StyledLink to={`/${link}`} >{name}</StyledLink>
        )
    };

    const secondTitle = (arr, path) => {
        const { name } = arr.find(item => item.link === path);
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
        <BdServicesTabs>
            <NavBox> {firstTitle(navigation, 'services')} / {secondTitle(services, list)} / {thirdTitle(data)}</NavBox>
            <Section>
                <SinglePageWrapp>
                    {elements}
                </SinglePageWrapp>
            </Section>
        </BdServicesTabs>
    );
}

export default ServicesTabsPageDescr;
