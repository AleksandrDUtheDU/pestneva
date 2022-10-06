import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import useOnClickOutside from '../../hooks/onClickOutside';
import { MenuContext } from './navState';
import HamburgerButton from './hamdurgerButton';
import { SideMenu } from './sideMenu';
import { Button } from '../theme/Button';

const HeaderNavbar = styled.header`
    max-width: 1440px;
    margin: 0 auto;
    background: none;
    height: 90px;
    margin: 0 auto;
`;

const Navbar = styled.nav`
    padding: 11px 65px 11px 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    z-index: 500;
    width: 100%;
    @media ${props => props.theme.media.notebook} {
        padding: 11px 35px;
    }
    @media ${props => props.theme.media.bigTablet} {
        padding: 11px 20px;
    }
    @media ${props => props.theme.media.phone} {
        padding: 0;
        padding-left: 20px;
    }
`;


const HeadMenuLinkWrapp = styled.ul`
    padding: 23px;
    max-width: 640px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media ${props => props.theme.media.notebook} {
        max-width: 520px;
    }
    @media ${props => props.theme.media.bigTablet} {
        justify-content: space-around;
        max-width: 420px;
    }
    @media ${props => props.theme.media.phone} {
        display: none;
    }

`;

const HeadMenuLink = styled.a`
    margin: 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: ${props => props.theme.colors.mainGreen};
    @media ${props => props.theme.media.phone} {
        display: none;
    }
`;

const MainMenu = () => {
    const node = useRef();
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
    useOnClickOutside(node, () => {
        if (isMenuOpen) {
            toggleMenuMode();
        }
    });

    return (
        <HeaderNavbar ref={node}>
            <Navbar>
                <HeadMenuLinkWrapp>
                    <li><HeadMenuLink href="/">Главная</HeadMenuLink></li>
                    <li><HeadMenuLink href="#services">Услуги</HeadMenuLink></li>
                    <li><HeadMenuLink href="#price-list">Прайс</HeadMenuLink></li>
                    <li><HeadMenuLink href="#cases">Кейсы</HeadMenuLink></li>
                    <li><HeadMenuLink href="#contact">Контакты</HeadMenuLink></li>
                </HeadMenuLinkWrapp>
                <Button>Оставить заявку</Button>
                <HamburgerButton />
            </Navbar>
            <SideMenu />
        </HeaderNavbar>
    );
};

export default MainMenu;