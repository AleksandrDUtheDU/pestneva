import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from "styled-components";

import { Section } from "../theme/Container";
import { Title, Description } from "../theme/Title";


import accounting_services from "../../resources/img/carousel/Accounting_services.jpg"
import business_registration from "../../resources/img/carousel/Business_registration.jpg"
import hr_records_management from "../../resources/img/carousel/HR_records_management.jpg"
import accounting_for_marketplaces from "../../resources/img/carousel/Accounting_for_marketplaces.jpg"

const CarouselSection = styled(Section)`
    padding: 0;
    display: flex;
    background: ${props => props.theme.colors.bgGreen};
    justify-content: space-between;
    text-align: center;
    `
const TitleCarouselWrapp = styled.div`
    padding: 185px 60px 0px;
    width: 40%;
    @media ${props => props.theme.media.bigTablet} {
    display: none;
    }

`

const TitleDescription = styled(Description)`
    margin-top: 12px;
    font-size: 32px;
    line-height: 42px;
    text-align:left;
    @media ${props => props.theme.media.notebook} {
    font-size: 24px;
    line-height: 36px;
    }
`

const CarouselWrapp = styled.div`
    width: 60%;
    @media ${props => props.theme.media.bigTablet} {
    width: 100%;
    }

`


const CarouselImg = styled.img`
    width: 100%;
    height: 640px;
    object-fit: cover;
    filter: brightness(50%);
    `

const CarouselTittle = styled(Title)`
    color: white;
`
const CarouselDescription = styled(Description)`
    color: white;
    margin-bottom: 183px;

`


function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <CarouselSection>
            <TitleCarouselWrapp>
                <Title>Услуги</Title>
                <TitleDescription>
                    Бухгалтерские услуги
                </TitleDescription>
                <TitleDescription>
                    Кадровое делопроизводство
                </TitleDescription>
                <TitleDescription>
                    Регистрация бизнеса
                </TitleDescription>
                <TitleDescription>
                    Учет для маркетплейсов
                </TitleDescription>
            </TitleCarouselWrapp>
            <CarouselWrapp>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <CarouselImg
                            className="d-block w-100"
                            src={accounting_services}
                            alt="Бухгалтерские услуги"
                        />
                        <Carousel.Caption>
                            <CarouselTittle>Бухгалтерские услуги</CarouselTittle>
                            <CarouselDescription>Rомплекс услуг по непрерывному ведению бухгалтерского учета, составлению и своевременной сдачи всех необходимых форм налоговой и бухгалтерской отчетности в строгом соответствии с нормами законодательства</CarouselDescription>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselImg
                            className="d-block w-100"
                            src={business_registration}
                            alt="Бухгалтерские услуги"
                        />
                        <Carousel.Caption>
                            <CarouselTittle>Кадровое делопроизводство</CarouselTittle>
                            <CarouselDescription>Rомплекс услуг по непрерывному ведению бухгалтерского учета, составлению и своевременной сдачи всех необходимых форм налоговой и бухгалтерской отчетности в строгом соответствии с нормами законодательства</CarouselDescription>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselImg
                            className="d-block w-100"
                            src={hr_records_management}
                            alt="Бухгалтерские услуги"
                        />
                        <Carousel.Caption>
                            <CarouselTittle>Регистрация бизнеса</CarouselTittle>
                            <CarouselDescription>Rомплекс услуг по непрерывному ведению бухгалтерского учета, составлению и своевременной сдачи всех необходимых форм налоговой и бухгалтерской отчетности в строгом соответствии с нормами законодательства</CarouselDescription>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselImg
                            className="d-block w-100"
                            src={accounting_for_marketplaces}
                            alt="Бухгалтерские услуги"
                        />
                        <Carousel.Caption>
                            <CarouselTittle>Учет для маркетплейсов</CarouselTittle>
                            <CarouselDescription>Rомплекс услуг по непрерывному ведению бухгалтерского учета, составлению и своевременной сдачи всех необходимых форм налоговой и бухгалтерской отчетности в строгом соответствии с нормами законодательства</CarouselDescription>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </CarouselWrapp>
        </CarouselSection>
    );
}


export default ControlledCarousel;

// export default ControlledCarousel;