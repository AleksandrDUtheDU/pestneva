import styled from 'styled-components';

import main_photo from '../../resources/img/main_photo1.jpg';
import Telegram from '../sociaIcons/Telegram';
import Vkontakte from '../sociaIcons/Vkontakte';
import Instagram from '../sociaIcons/Instagram';


import { Section } from "../theme/Container";
import { Title } from "../theme/Title";
import Form from '../Form/Form';
import { ImgSrc } from '../theme/SkillsImg';


const ContactSection = styled(Section)`
  /* padding-bottom: 90px; */
  background: ${props => props.theme.colors.bgGreen};

  padding-right: 30px;
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  grid-template-rows: 800px;
  justify-content: space-around;
  column-gap: 70px;
  text-align: left;
  @media ${props => props.theme.media.notebook} {
    column-gap: 30px;
  }
  @media ${props => props.theme.media.bigTablet} {
    grid-template-columns: 560px;
  }
  @media ${props => props.theme.media.phone} {
    grid-template-columns: 300px;
    grid-template-rows: minmax(600px, auto);
  }
`

const Foto = styled(ImgSrc)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media ${props => props.theme.media.bigTablet} {
    display: none;
  }
`

const ContactTitle = styled.div`
  padding-top: 60px;
`

const TitleAverage = styled(Title)`
  margin-top: 30px;
  font-size: 30px;
  line-height: 36px;

`

const SocialLink = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items:center;
`;


function ContactTitleComponent() {
  return (
    <ContactTitle>
      {/* <Title as="h2">Контакты</Title> */}
      <Title>Готовы работать вместе?</Title>
      <TitleAverage>Тогда свяжитесь со мной</TitleAverage>

      <SocialLink>
        <Instagram iconColor="#214E41" width="40" height="40" />
        <Vkontakte iconColor="#214E41" width="40" height="40" />
        <Telegram iconColor="#214E41" width="40" height="40" />
      </SocialLink>

      <TitleAverage>
        Или оставьте ваши данные и я сама вам напишу:
      </TitleAverage>
      <Form />
    </ContactTitle>
  )
}


function Contact() {
  return (
    <ContactSection as="section">
      <Foto img={main_photo} />
      <ContactTitleComponent />
    </ContactSection>
  );
}

export default Contact;
