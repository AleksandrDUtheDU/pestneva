import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'

import { theme } from '../app/theme/Theme';
import { Section } from "../app/theme/Container";
import { Title, Description } from "../app/theme/Title";
import { cases } from '../dataBase/dataBase';

const BdCarouselSection = styled.section`
    background: #efe6db;
`


const CarouselSection = styled(Section)`
    /* max-height:720px; */
    padding: 0;
    display: flex;
    background: #efe6db;
    justify-content: space-between;
    text-align: center;
    @media ${props => props.theme.media.bigTablet} {
        flex-direction: column;
    }
`

const TitleCarouselWrapp = styled.div`
    padding: 80px 20px;
    width: 50%;
    height: 100%;
    @media ${props => props.theme.media.bigTablet} {
    width: 100%;
    padding: 30px;

    }

`
const TittleWrapp = styled(Title)`
    color: black;
`


const TitleDescription = styled(Description)`
    margin-top: 20px;
    font-size: 20px;
    line-height: 28px;
    text-align:left;
    color: black;
    @media ${props => props.theme.media.notebook} {
        font-size: 20px;
        line-height: 24px;
    }
`

const TitleDescriptionName = styled(Description)`
    display: inline;
    font-size: 20px;
    line-height: 28px;
    font-weight: 700;
    margin-right: 15px;
`



const CarouselWrapp = styled.div`
    width: 50%;
    height: 100%;
    @media ${props => props.theme.media.bigTablet} {
    width: 100%;
    }
`


const CarouselImg = styled.img`
    width: 100%;
    height: 720px;
    object-fit: cover;
    filter: brightness(50%);
    @media ${props => props.theme.media.phone} {
        height: 350px;
    }

    `

const CarouselTittle = styled(Title)`
    color: white;
`
const CarouselDescr = styled(Description)`
    color: white;
`




function CaseCarouselPage() {

    const [index, setIndex] = useState(0);


    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const isPhone = useMediaQuery({
        query: theme.media.phone
    })


    const items =
        cases.map(item => {
            const { id, title, img, services } = item;
            console.log(item)
            return (
                <Carousel.Item key={id}>
                    <CarouselImg
                        className="d-block w-100"
                        src={img}
                        alt={title}
                    />
                    {isPhone ? '' :
                        <Carousel.Caption>
                            <CarouselTittle>{title}</CarouselTittle>
                            <CarouselDescr>{services}</CarouselDescr>
                        </Carousel.Caption>
                    }
                </Carousel.Item>
            )
        })


    return (
        <BdCarouselSection>
            <CarouselSection>
                <CarouselWrapp>
                    <Carousel interval={15000} activeIndex={index} onSelect={handleSelect}>
                        {items}
                    </Carousel>
                </CarouselWrapp>
                <TitleCarouselWrapp>
                    {cases[index].title ? <TittleWrapp>{cases[index].title}</TittleWrapp> : ''}
                    {cases[index].descr ? <TitleDescription><TitleDescriptionName>Описание:</TitleDescriptionName>{cases[index].descr}</TitleDescription> : ''}
                    {cases[index].city ? <TitleDescription><TitleDescriptionName>Город:</TitleDescriptionName>{cases[index].city}</TitleDescription> : ''}
                    {cases[index].services ? <TitleDescription><TitleDescriptionName>Услуги:</TitleDescriptionName>{cases[index].services}</TitleDescription> : ''}
                    {cases[index].price ? <TitleDescription><TitleDescriptionName>Цены:</TitleDescriptionName>{cases[index].price}</TitleDescription> : ''}
                </TitleCarouselWrapp>

            </CarouselSection>
        </BdCarouselSection>
    );
}


export default CaseCarouselPage;