import styled from 'styled-components';

import { Title, Description } from "../theme/Title";
import { Section } from "../theme/Container";

const PrisesSection = styled(Section)`
  padding-bottom: 60px;
`



const MyPrisesWrapp = styled.div`
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(2, 600px);
  grid-template-rows: repeat(3, minmax(50px, auto));
  grid-auto-rows: 50px;
  justify-content: space-around;
  column-gap: 15px;
  row-gap: 15px;
  text-align:left;
  @media ${props => props.theme.media.bigTablet} {
    grid-template-columns: repeat(2, 280px);
    grid-template-rows: repeat(3, minmax(50px, auto));
    grid-auto-rows: 50px;
    column-gap: 10px;
    row-gap: 20px;
  }
  @media ${props => props.theme.media.phone} {
    margin-top: 20px;
    grid-template-columns: 295px;
    grid-template-rows: repeat(3, minmax(50px, auto));
    grid-auto-rows: minmax(50px, auto);
  }
`
const MyPrisesItemWrapp = styled.div`
  padding-left: 20px;
`

const MyPrisesTitle = styled(Title)`
  font-size: 24px;
  line-height: 36px;
  padding:0;
  @media ${props => props.theme.media.bigTablet} {
    font-size: 14px;
    line-height: 21px;  }
`

const MyPrisesTitleBox = styled.div`
  display: grid;
  grid-template-columns: 65% 30%;

  gap: 30px;
  justify-content:space-between;
  text-align:left;
`

const MyPrisesComponent = ({ title, prises, descr }) => {
  return (
    <MyPrisesItemWrapp>
      <MyPrisesTitleBox>
        <MyPrisesTitle>{title}</MyPrisesTitle>
        <MyPrisesTitle>{prises}</MyPrisesTitle>
      </MyPrisesTitleBox >
      <Description>{descr}</Description>
    </MyPrisesItemWrapp>
  )
}


function Prises() {
  return (
    <PrisesSection as="section" id='prises'>
      <Title as="h2">Прайс-лист</Title>
      <MyPrisesWrapp>
        <MyPrisesComponent
          title={'Подбор системы налогообложения'}
          prises={'от 5500 руб.'}
          descr={'Полный расчет налоговой нагрузки по данным клиента за год, рекомендации по выбору системы налогообложения. Результат в виде сводной таблицы по каждому режиму налогообложения на электронную почту Заказчика.'}
        />
        <MyPrisesComponent
          title={'Устная консультация'}
          prises={'от 3500 руб.'}
          descr={'Вы получаете ответы на 2 своих вопроса. Вопросы присылаются за 24 часа до консультации. Консультация проходит посредством телефонного разговора, видеосвязи (30 мин.).'}
        />
        <MyPrisesComponent
          title={'Письменная консультация'}
          prises={'от 4500 руб.'}
          descr={'Вы получаете письменный ответ на 2 своих вопроса, со ссылками на законодательство. Вопросы присылаются за 24 часа до консультации. Ответ высылается на электронную почту.'}
        />
        <MyPrisesComponent
          title={'Консультация для самозанятых'}
          prises={'от 3500 руб.'}
          descr={'Вы получаете ответы на любые вопроса по теме самозанятости. Вопросы присылаются за 24 часа до консультации. Консультация проходит в устной форме.'}
        />
        <MyPrisesComponent
          title={'Бухгалтерское сопровождение ИП (без сотрудника)'}
          prises={'от 6000 руб.'}
          descr={'Базовая стоимость корректируется в зависимости от количества операций в месяц, наличия ККМ, эквайринга.'}
        />
        <MyPrisesComponent
          title={'Бухгалтерское сопровождение ООО (без сотрудника)'}
          prises={'от 8000 руб.'}
          descr={'Базовая стоимость корректируется в зависимости от количества операций в месяц, наличия ККМ, эквайринга.'}
        />

        {/* <MyPrisesComponent
          title={'Android/IOS Приложение'}
          prises={'от 25000 руб.'}
          descr={'Приложение для смартфона любой ОС'}
        />
        <MyPrisesComponent
          title={'Дизайн'}
          prises={'Индивидуально'}
          descr={'Создам дизайн для вашего сайта/приложения...'}
        /> */}
      </MyPrisesWrapp>

    </PrisesSection>
  );
}

export default Prises;
