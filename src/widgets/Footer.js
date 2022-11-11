import styled from 'styled-components';
// import { Link } from "react-router-dom";
// import { Section } from "../theme/Container";
import Mail from '../app/theme/sociaIcons/Mail';
import Phone from '../app/theme/sociaIcons/Phone';

const BgFooter = styled.footer`
    background: ${props => props.theme.colors.mainGreen};
`


const FooterWrapp = styled.div`
    padding: 20px 50px;
    max-width: 1440px;
    margin: 0 auto;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-around;
    gap: 50px;
    text-align: left;
    font-weight: 500;
    font-size: 14px;
    color: white;
    @media ${props => props.theme.media.bigTablet} {
    grid-template-rows: repeat(2, 1fr);    
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    font-size: 16px;
    padding: 20px;


    }
    @media ${props => props.theme.media.phone} {
    grid-template-rows: repeat(4, 1fr);    
    grid-template-columns: repeat(1, 1fr);
    }
    gap: 10px;
`

const FooterItemTitle = styled.p`
    font-weight: 700;

`

const FooterItemWrapp = styled.div`



`

const SocialLink = styled.a`
    margin-top: 10px;
    margin-left: 15px;
    color: white;
    text-decoration: none;
    &:hover {
        color: #214E41;
    }
`;



function Footer() {

    return (
        <BgFooter>
            <FooterWrapp >
                <FooterItemWrapp>
                    <FooterItemTitle>ООО "ФК "БУХЭКСПЕРТ"</FooterItemTitle>

                    ИНН: 2901311566
                    <br />
                    ОГРН: 1222900005899
                    <br />
                </FooterItemWrapp>
                <FooterItemWrapp>
                    <FooterItemTitle>КОНТАКТЫ:</FooterItemTitle>
                    <Phone width="18" height="18"> 89116725855</Phone>
                    <SocialLink href="tel:+79116725855" target="blank">
                        +7 911 672 58 55
                    </SocialLink>
                    <br />
                    <Mail width="21" height="21"> buh.expert29@mail.ru </Mail>
                    <SocialLink href="mailto:buh.expert29@mail.ru" target="blank">
                        buh.expert29@mail.ru
                    </SocialLink>

                </FooterItemWrapp>
                <FooterItemWrapp>
                    <FooterItemTitle>Юридический адрес:</FooterItemTitle>

                    г. Архангельск, пр. Московский, д.25, оф.21
                    <br />

                </FooterItemWrapp>
                <FooterItemWrapp>
                    <FooterItemTitle>Почтовый адрес:</FooterItemTitle>

                    г. Архангельск, пр. Московский, д.25, оф.21
                    <br />

                </FooterItemWrapp>
            </FooterWrapp>


        </BgFooter>
    );
}

export default Footer;
