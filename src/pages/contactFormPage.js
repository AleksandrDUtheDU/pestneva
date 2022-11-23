import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'

import main_photo from '../resources/img/main_photo1.jpg';


import { theme } from '../app/theme/Theme';
import Telegram from '../app/theme/sociaIcons/Telegram';
import Vkontakte from '../app/theme/sociaIcons/Vkontakte';
import Instagram from '../app/theme/sociaIcons/Instagram';
import Phone from '../app/theme/sociaIcons/Phone';
import Mail from '../app/theme/sociaIcons/Mail';
import WhatsApp from '../app/theme/sociaIcons/WhatsApp';


import { Section } from "../app/theme/Container";
import { Title } from "../app/theme/Title";
import Form from '../widgets/Form';
import { ImgSrc } from '../app/theme/SkillsImg';

const BdServicesTabs = styled.section`
    background: #efe6db;
`


const ContactSection = styled(Section)`
  padding-right: 20px;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
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
    object-fit: cover;
  }
`

const ContactTitle = styled.div`
  padding-top: 20px;
`

const TitleAverage = styled(Title)`
  margin-top: 10px;
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
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
      <TitleAverage>Контакты:</TitleAverage>
      <TitleAverage>Режим работы: с 9:00 до 19:00 с ПН по ПТ</TitleAverage>
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
      <Form />
    </ContactTitle>
  )
}


const Contact = () => {

  const isBigTablet = useMediaQuery({
    query: theme.media.bigTablet
  })


  return (
    <BdServicesTabs>
      <ContactSection>
        {isBigTablet ? '' : <Foto img={main_photo} />}
        <ContactTitleComponent />
      </ContactSection>
    </BdServicesTabs>
  );
}

export default Contact;
