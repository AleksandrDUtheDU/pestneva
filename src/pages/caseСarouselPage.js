import React, { useState, useEffect, useCallback } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'

import { theme } from '../app/theme/Theme';
import { Section } from "../app/theme/Container";
import { Title, Description } from "../app/theme/Title";
import { cases } from '../dataBase/dataBase';


const CarouselSection = styled(Section)`
    max-height:720px;
    padding: 0;
    display: flex;
    /* background: ${props => props.theme.colors.bgGreen}; */
    background: #efe6db;

    justify-content: space-between;
    text-align: center;
    `
const TitleCarouselWrapp = styled.div`
    padding: 80px 20px;
    width: 40%;
    /* @media ${props => props.theme.media.bigTablet} {
    display: none;
    } */
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

const CarouselWrapp = styled.div`
    /* position: relative; */
    width: 60%;
    @media ${props => props.theme.media.bigTablet} {
    width: 100%;
    }
`


const CarouselImg = styled.img`
    width: 100%;
    height: 720px;
    object-fit: cover;
    filter: brightness(50%);
    `

const CarouselTittle = styled(Title)`
    color: white;
`


function CaseCarouselPage() {

    const [index, setIndex] = useState(0);


    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const isBigTablet = useMediaQuery({
        query: theme.media.bigTablet
    })


    const items =
        cases.map(item => {
            const { id, title, img } = item;
            console.log(item)
            return (
                <Carousel.Item key={id}>
                    <CarouselImg
                        className="d-block w-100"
                        src={img}
                        alt={title}
                    />
                    <Carousel.Caption>
                        <CarouselTittle>{title}</CarouselTittle>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })


    return (
        <CarouselSection>
            {isBigTablet ? '' :
                <TitleCarouselWrapp>
                    <TittleWrapp>{cases[index].title}</TittleWrapp>
                    <TitleDescription>{cases[index].descr}</TitleDescription>
                    <TitleDescription>{cases[index].city}</TitleDescription>
                    <TitleDescription>{cases[index].services}</TitleDescription>
                    <TitleDescription>{cases[index].price}</TitleDescription>
                </TitleCarouselWrapp>
            }
            <CarouselWrapp>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {items}
                </Carousel>
            </CarouselWrapp>
        </CarouselSection>
    );
}


export default CaseCarouselPage;