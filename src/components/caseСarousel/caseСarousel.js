import React, { useState, useEffect, useCallback } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from "styled-components";

import { Section } from "../theme/Container";
import { Title, Description } from "../theme/Title";
import { cases } from '../content/content';


const CarouselSection = styled(Section)`
    min-height:720px;
    padding: 0;
    display: flex;
    background: ${props => props.theme.colors.bgGreen};
    justify-content: space-between;
    text-align: center;
    `
const TitleCarouselWrapp = styled.div`
    padding: 80px 20px;
    width: 40%;
    @media ${props => props.theme.media.bigTablet} {
    display: none;
    }
`

const TitleDescription = styled(Description)`
    margin-top: 20px;
    font-size: 22px;
    line-height: 26px;
    text-align:left;
`

const CarouselWrapp = styled.div`
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
    margin-bottom: 43%;
`


function CaseCarousel() {

    const [index, setIndex] = useState(0);


    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

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
            <TitleCarouselWrapp>
                <Title>{cases[index].title}</Title>
                <TitleDescription>{cases[index].descr}</TitleDescription>
            </TitleCarouselWrapp>
            <CarouselWrapp>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {items}
                </Carousel>
            </CarouselWrapp>
        </CarouselSection>
    );
}


export default CaseCarousel;