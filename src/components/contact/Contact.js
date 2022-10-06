import styled from 'styled-components';

import main_photo from '../../resources/img/main_photo.jpg';
import Telegram from '../sociaIcons/Telegram';
import Vkontakte from '../sociaIcons/Vkontakte';
import Github from '../sociaIcons/Github';


import { Section } from "../theme/Container";
import { TitleAverage, Title, Description } from "../theme/Title";
import { Divider } from '../theme/Divider';
import Form from '../Form/Form';
import { ImgSrc } from '../theme/SkillsImg';


const ContactSection = styled(Section)`
  padding-bottom: 90px;
  display: grid;
  grid-template-columns: 1fr 1.55fr;
  grid-template-rows: 600px;
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

  /* @media ${props => props.theme.media.phone} {
    margin-top: 40px;
    row-gap: 40px;
    grid-template-columns: 1fr;
  } */
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
  padding-top: 7px;
`

const DividerForMe = styled(Divider)`
  margin: 0; 
`

const TitleBig = styled(Title)`
  font-size: 36px;
`

const DescriptionAverage = styled(Description)`
  margin-top: 20px;
  font-size: 14px;
  line-height: 21px;
`

const SocialLink = styled.div`
  margin-top: 20px;
  width: 135px;
  display: flex;
  justify-content: space-between;
  align-items:center;
`;



function ContactTitleComponent() {
  return (
    <ContactTitle>
      <TitleAverage as="h2">Контакты</TitleAverage>
      <TitleBig>Свяжитесь со мной</TitleBig>
      <DividerForMe />
      <DescriptionAverage>
        Любым удобным для вас способом:
      </DescriptionAverage>
      <SocialLink>
        <Github width="30" height="30" />
        <Vkontakte width="30" height="30" />
        <Telegram width="30" height="30" />
      </SocialLink>
      <DescriptionAverage>
        Или оставьте ваши данные и я сам вам напишу:
      </DescriptionAverage>
      <Form />

    </ContactTitle>
  )
}


function Contact() {
  return (
    <ContactSection as="section" id='contact'>
      <Foto img={main_photo} />
      <ContactTitleComponent />
    </ContactSection>
  );
}

export default Contact;
