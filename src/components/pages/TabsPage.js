import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from 'react';
import { useSelector } from "react-redux";

import { firstName, secondName } from '../action/action';
import { services } from '../content/content';
import Spinner from '../spinner/Spinner';
import ErrorMesage from '../errorMessage/ErrorMesage';
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

const SinglePageLink = styled(Description)`
    position: absolute;
    display: block;
    bottom: 20px;
    right: 22px;
    text-align: end;
    font-weight: 700;
    color: #f3a74e;
    :hover {
        text-decoration: underline;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 30px;
    :hover {
        text-decoration: none;
        color: inherit;
    }
`;

const setContent = (process, Component) => {
    switch (process) {
        case 'waiting':
            return <Spinner />;
        case 'loading':
            return <Spinner />;
        case 'confirmed':
            return <Component />;
        case 'error':
            return <ErrorMesage />;
        default:
            throw new Error('Unexpected process state')
    }
}

function TabsPage() {

    const [process, setProcess] = useState('waiting');
    const [tabs, setTabs] = useState([]);

    const { list } = useParams();

    useEffect(() => {
        onRequest(services, list)
    }, [list])

    const getData = async (data, pathList) => {
        try {
            let response = await data.find(item => item.link === pathList);

            setTabs(response.tabs)
            setProcess('confirmed')

            return response
        } catch (err) {

            setProcess('error')
            alert(err);
        }
    }

    const onRequest = (data, pathList) => {
        getData(data, pathList)
    }

    function renderItems(arr) {

        const items = arr.map(item => {

            const { id, title, price, link, descr } = item;

            return (
                <SinglePageItem key={id}>
                    <StyledLink to={`/services/${list}/${link}`} >
                        <SinglePageTitle>{title}</SinglePageTitle>
                        <SinglePagePrice>{price}</SinglePagePrice>
                        <SinglePageDescr>{descr}</SinglePageDescr>
                        <SinglePageLink>Подробнее...</SinglePageLink>
                    </StyledLink>
                </SinglePageItem >
            )
        });

        return items
    }

    const elements = useMemo(() => {
        return setContent(process, () => renderItems(tabs));
    }, [process])

    const firstTitle = useSelector((state) => {
        const { name, link } = state.firstName

        return (
            <NavItem name={name} link={link} action={firstName} />
        )
    });

    const secondTitle = useSelector((state) => {
        const { name } = state.secondName
        return (
            <NavItem name={name} action={secondName} />
        )
    });


    return (
        <Section as="section">
            <NavBox>{firstTitle} / {secondTitle}</NavBox>
            <SinglePageWrapp>
                {elements}
            </SinglePageWrapp>
        </Section>
    );
}

export default TabsPage;
