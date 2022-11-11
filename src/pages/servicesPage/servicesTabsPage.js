import styled from 'styled-components';
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from 'react';

import { setContent } from '../../shared/services';
import { services, navigation } from '../../dataBase/dataBase';
import { Description } from '../../app/theme/Title';
import { Section } from "../../app/theme/Container";
import NavBox from '../../app/theme/NavBox';
import { StyledLink } from '../../app/theme/NavItem';

const BdServicesTabs = styled.section`
    background: ${props => props.theme.colors.bgGreen};

`


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
    transition: all 0.5s;
    border-radius: 5px;
    border: 2px solid ${props => props.theme.colors.mainGreen};
    color: white;
    min-height: 260px;
    :hover{
        background: ${props => props.theme.colors.mainGreen};
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
    text-transform: uppercase;
    :hover{
        text-decoration: none;
    }
`

const SinglePageDescr = styled(Description)`
    margin-top: 20px;
    text-align: left;
    padding-bottom: 30px;
    color: white;
    :hover{
        text-decoration: none;
    }
`
const SinglePagePrice = styled(Description)`
    margin-top: 20px;
    text-align: left;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
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
    color: white;
`

const StyledLinkPage = styled(Link)`
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


function ServicesTabsPage() {

    const [process, setProcess] = useState('waiting');
    const [tabs, setTabs] = useState([]);

    const { list } = useParams();

    useEffect(() => {
        getData(services, list)
    }, [])

    const getData = async (data, pathList) => {
        setProcess('loading')
        try {
            let response = await data.find(item => item.link === pathList);

            setTabs(response.tabs)
            setProcess('confirmed')
            console.log(response.tabs)

            return response
        }
        catch (err) {
            setProcess('error')
            alert(err);
        }
    }

    function renderItems(arr) {
        const items = arr.map(item => {
            const { id, title, price, link, descr } = item;

            return (
                <SinglePageItem key={id}>
                    <StyledLinkPage to={`/services/${list}/${link}`} >
                        <SinglePageTitle>{title}</SinglePageTitle>
                        <SinglePagePrice>{price}</SinglePagePrice>
                        <SinglePageDescr>{descr}</SinglePageDescr>
                        <SinglePageLink>Подробнее...</SinglePageLink>
                    </StyledLinkPage>
                </SinglePageItem >
            )
        });
        return items
    }

    const elements = useMemo(() => {
        return setContent(process, () => renderItems(tabs));
    }, [process])

    const firstTitle = (arr, path) => {
        const { name } = arr.find(item => item.link === path);
        return (
            <StyledLink to=".." relative="path" >{name}</StyledLink>
        )
    };

    const secondTitle = (arr, path) => {
        const { name } = arr.find(item => item.link === path);
        return (
            <StyledLink>{name}</StyledLink>
        )
    };


    return (
        <BdServicesTabs>
            <NavBox>{firstTitle(navigation, 'services')} / {secondTitle(services, list)}</NavBox>

            <Section>
                <SinglePageWrapp>
                    {elements}
                </SinglePageWrapp>
            </Section>

        </BdServicesTabs>
    );
}

export default ServicesTabsPage;
