import React, { useRef, useContext, useMemo, memo } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'

import { theme } from '../../app/theme/Theme';
import useOnClickOutside from './hooks/onClickOutside';
import { MenuContext } from './navState';
import HamburgerButton from './hamdurgerButton';
import { SideMenu } from './sideMenu';
import { StyledLink } from '../../app/theme/NavItem';
import { navigation } from '../../dataBase/dataBase';
import Telegram from '../../app/theme/sociaIcons/Telegram';
import Phone from '../../app/theme/sociaIcons/Phone';
import WhatsApp from '../../app/theme/sociaIcons/WhatsApp';
import Logo from '../../app/theme/Logo';

const BgNavbar = styled.header`
    background: ${props => props.theme.colors.mainGreen};
`


const NavbarWrapp = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    background: none;
    height: 80px;
    line-height: 60px;
    padding: 10px;
    background: #638b69;
`;

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 210;
    width: 100%;
    position: relative;
    @media ${props => props.theme.media.notebook} {
    }
    @media ${props => props.theme.media.bigTablet} {
    }
    @media ${props => props.theme.media.phone} {
    }
`;

const LogoWrapp = styled.div`
    font-weight: 700;
    font-size: 20px;
    color: white;
    margin-right: 50px;
`

const HeadMenuLinkWrapp = styled.ul`
    max-width: 640px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media ${props => props.theme.media.notebook} {
        max-width: 420px;
    }
    @media ${props => props.theme.media.bigTablet} {
        justify-content: space-around;
        max-width: 420px;
    }
`;

const HeadMenuLink = styled.li`
    margin: 0;
    font-weight: 700;
    font-size: 20px;
    color: white;
    @media ${props => props.theme.media.notebook} {
        font-size: 16px;
    }
`;

const SocialItem = styled.div`
    font-size: 20px;
    display: flex;
    width: 300px;
    text-align: center;
    svg {
    margin-left: 10px;
    }
    @media ${props => props.theme.media.notebook} {
    font-size: 16px;
    }
`;

const SocialLink = styled.a`
  margin-left: 15px;
  color: white;
  text-decoration: none;
  &:hover {
    color: #214E41;
  }
`;

const Bloked = styled.div`
    position: fixed;
    visibility: visible; 
    z-index: 200; 
    top: 0px; 
    left: 0px; 
    width: 100%; 
    height: 100%; 
    background-color: #ccc; 
    opacity: 0.5; 
`;




const MainMenu = () => {

    const isPhone = useMediaQuery({
        query: theme.media.phone
    })

    const isBigTablet = useMediaQuery({
        query: theme.media.bigTablet
    })


    const node = useRef();

    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
    useOnClickOutside(node, () => {
        if (isMenuOpen) {
            toggleMenuMode();
        }
    });

    const items = navigation.map(item => {
        const { id, name, link } = item;
        return (
            <HeadMenuLink key={id}>
                <StyledLink to={`${link}`}> {name} </StyledLink>
            </HeadMenuLink>
        )
    })


    return (
        <BgNavbar>
            <NavbarWrapp ref={node}>
                <Navbar>
                    {isBigTablet ? '' :
                        <LogoWrapp>
                            <Logo iconColor="white" height="60" />
                            ФК «Бухэксперт»
                        </LogoWrapp>}
                    {isPhone ?
                        <>
                            <LogoWrapp>
                                <Logo iconColor="white" height="60" />
                                ФК «Бухэксперт»
                            </LogoWrapp>
                            <HamburgerButton />
                        </>
                        :
                        <>
                            <HeadMenuLinkWrapp>{items}</HeadMenuLinkWrapp>
                            <SocialItem>
                                <Telegram iconColor="white" width="30" height="30" />
                                <WhatsApp iconColor="white" width="30" height="30" />
                                <Phone iconColor="white" width="30" height="30" />
                                <SocialLink href="tel:+79116725855" target="blank">
                                    +7 911 672 58 55
                                </SocialLink>
                            </SocialItem>
                        </>
                    }
                </Navbar>
                <SideMenu />
            </NavbarWrapp>
            {isMenuOpen ? <Bloked /> : ''}
        </BgNavbar>
    );
};

export default MainMenu;