import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from 'react';


import { services } from '../content/content';
import Spinner from '../spinner/Spinner';
import ErrorMesage from '../errorMessage/ErrorMesage';
import { Description, Title } from '../theme/Title';
import { Section } from "../theme/Container";




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
    min-height: 260px;
    padding: 30px;
    border: solid 1px black;
    border-radius: 5px;
    background: white;
    transition: all 0.3s;

    :hover{
        box-shadow: 3px 2px 2px grey;
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
    /* color: ${props => props.theme.colors.mainGreen}; */
    text-transform: uppercase;
`

const SinglePageDescr = styled(Description)`
    margin-top: 20px;
    text-align: left;
    padding-bottom: 30px;
`
const SinglePagePrice = styled(Description)`
    margin-top: 20px;
    text-align: left;
    font-weight: 700;
    text-transform: uppercase;
`

const SinglePageLink = styled(Description)`
    position: absolute;
    display: block;
    bottom: 20px;
    right: 22px;
    text-align: end;
    font-weight: 700;
`

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



function TabsPageDescr() {

    const [process, setProcess] = useState('waiting');
    const [data, setData] = useState({});
    const [tabs, setTabs] = useState([]);
    const [name, setName] = useState('');


    console.log(data)
    console.log(tabs)
    console.log(name)


    const { link } = useParams();

    useEffect(() => {
        onRequest(services, link)
    }, [link])


    const getData = async (data, pathList) => {
        try {
            let response = await data.find(item => item.link === pathList);
            setData(response)
            setTabs(response.tabs)
            setName(response.name)
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

    // function renderItems(arr) {

    //     const items = arr.map(item => {

    //         const { id, title, price, link, descr } = item;

    //         return (
    //             <SinglePageItem key={id}>
    //                 <Link style={{ width: '100%', height: '100%' }} to={`/services/${list}/${link}`} >
    //                     <SinglePageTitle>{title}</SinglePageTitle>
    //                     <SinglePagePrice>{price}</SinglePagePrice>
    //                     <SinglePageDescr>{descr}</SinglePageDescr>
    //                     <SinglePageLink>Подробнее...</SinglePageLink>
    //                 </Link>
    //             </SinglePageItem>
    //         )
    //     });

    //     return items
    // }

    // const elements = useMemo(() => {
    //     return setContent(process, () => renderItems(tabs));
    // }, [process])


    return (
        <Section as="section">
            <Title>{name}</Title>
            <SinglePageWrapp>
            </SinglePageWrapp>
        </Section>
    );
}

export default TabsPageDescr;
