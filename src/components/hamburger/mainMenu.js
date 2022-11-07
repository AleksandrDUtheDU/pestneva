import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'

// import { SocialItem, SocialLink } from '../contact/Contact';
import { theme } from '../theme/Theme';
import useOnClickOutside from '../../hooks/onClickOutside';
import { MenuContext } from './navState';
import HamburgerButton from './hamdurgerButton';
import { SideMenu } from './sideMenu';
// import { Button } from '../theme/Button';
import { StyledLink } from '../theme/NavItem';
import { navigation } from '../content/content';
import Telegram from '../sociaIcons/Telegram';
import Phone from '../sociaIcons/Phone';
import WhatsApp from '../sociaIcons/WhatsApp';
import Logo from '../theme/Logo';


const HeaderNavbar = styled.header`
    max-width: 1440px;
    margin: 0 auto;
    background: none;
    height: 80px;
    line-height: 60px;
    padding: 10px;
    /* position:  relative; */

`;

const Navbar = styled.nav`
    /* padding: 10px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    z-index: 200;
    width: 100%;
    position: relative;

    @media ${props => props.theme.media.notebook} {
        /* padding: 11px 35px; */
    }
    @media ${props => props.theme.media.bigTablet} {
        /* padding: 11px 20px; */
    }
    @media ${props => props.theme.media.phone} {
        /* padding: 0;
        padding-left: 20px; */
    }
`;


const HeadMenuLinkWrapp = styled.ul`
    /* padding: 23px; */
    /* line-height: 60px; */
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
    /* line-height: 22px; */
    color: ${props => props.theme.colors.mainGreen};
    @media ${props => props.theme.media.notebook} {
        font-size: 16px;
    }

`;

const SocialItem = styled.div`
    /* padding: 5px; */
    /* line-height: 38px; */
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
  color: black;
  text-decoration: none;
  &:hover {
    color: #214E41;
  }
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
                <StyledLink to={`/${link}`}> {name} </StyledLink>
            </HeadMenuLink>
        )
    });

    return (
        <HeaderNavbar ref={node}>
            <Navbar>
                {isBigTablet ? '' : <Logo height="60" />}
                {isPhone ? <Logo height="60" /> : ''}
                {/* <Logo height="60" /> */}
                {isPhone ? '' : <HeadMenuLinkWrapp>{items}</HeadMenuLinkWrapp>}
                {isPhone ? '' :
                    <SocialItem>
                        <Telegram width="30" height="30" />
                        <WhatsApp width="30" height="30" />
                        <Phone width="30" height="30" />
                        <SocialLink href="tel:+79116725855" target="blank">
                            +7 911 672 58 55
                        </SocialLink>
                    </SocialItem>
                }
                {isPhone ? <HamburgerButton /> : ''}
            </Navbar>
            <SideMenu />
        </HeaderNavbar>
    );
};

export default MainMenu;