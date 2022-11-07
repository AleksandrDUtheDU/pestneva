import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'

import { theme } from '../theme/Theme';
import main_photo from '../../resources/img/main_photo1.jpg';
import Telegram from '../sociaIcons/Telegram';
import Vkontakte from '../sociaIcons/Vkontakte';
import Instagram from '../sociaIcons/Instagram';
import Phone from '../sociaIcons/Phone';
import Mail from '../sociaIcons/Mail';
import WhatsApp from '../sociaIcons/WhatsApp';


import { Section } from "../theme/Container";
import { Title } from "../theme/Title";
import Form from '../Form/Form';
import { ImgSrc } from '../theme/SkillsImg';


const ContactSection = styled(Section)`
  /* padding-bottom: 90px; */
  padding-right: 20px;
  /* background: ${props => props.theme.colors.bgGreen}; */
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  grid-template-rows: 750px;
  justify-content: space-around;
  column-gap: 70px;
  text-align: left;
  @media ${props => props.theme.media.notebook} {
    column-gap: 30px;
  }
  @media ${props => props.theme.media.bigTablet} {
    padding: 10px;
    grid-template-columns: 560px;
  }
  @media ${props => props.theme.media.phone} {
    grid-template-columns: 1fr;
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
  padding-top: 20px;
`
const TitleMain = styled(Title)`
  color: black;
`

const TitleAverage = styled(Title)`
  margin-top: 20px;
  font-size: 24px;
  line-height: 30px;
  color: black;

`

const SocialLinkWrapp = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items:left;
`;

const SocialItem = styled.div`
  padding: 5px;
  line-height: 38px;
  font-size: 20px;
  display: flex;
  width: 300px;
  text-align: center;
  svg {
    margin-left: 10px;
  }

`;
const SocialLink = styled.a`
  margin-left: 15px;
  color: black;
  text-decoration: none;
  &:hover {
    color: #214E41;
  }
`;





function ContactTitleComponent() {

  return (
    <ContactTitle>
      <TitleMain>Контакты:</TitleMain>
      {/* <TitleAverage>Тогда свяжитесь со мной</TitleAverage> */}
      <SocialLinkWrapp>
        <SocialItem>
          <Telegram width="30" height="30" />
          <WhatsApp width="30" height="30" />
          <Phone width="30" height="30" />
          <SocialLink href="tel:+79116725855" target="blank">
            +7 911 672 58 55
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <Mail width="36" height="36" />
          <SocialLink href="mailto:buh.expert29@mail.ru" target="blank">
            buh.expert29@mail.ru
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <Vkontakte width="30" height="30" />
          <SocialLink href="https://vk.com/public206716506" target="blank">
            ВКонтакте
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <Instagram width="30" height="30" />
          <SocialLink href="https://www.instagram.com/buhpestereva" target="blank">
            @buhpestereva
          </SocialLink>
        </SocialItem>
      </SocialLinkWrapp>
      <TitleAverage>
        Оставьте заявку и мы свяжемся с вами
      </TitleAverage>
      <Form />
    </ContactTitle>
  )
}


const Contact = () => {

  const isBigTablet = useMediaQuery({
    query: theme.media.bigTablet
  })


  return (
    <ContactSection as="section">
      {isBigTablet ? '' : <Foto img={main_photo} />}

      {/* <Foto img={main_photo} /> */}
      <ContactTitleComponent />
    </ContactSection>
  );
}

export default Contact;
