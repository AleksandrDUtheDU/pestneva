import styled from 'styled-components';

import Vkontakte from '../sociaIcons/Vkontakte';
import Github from '../sociaIcons/Github';
import Telegram from '../sociaIcons/Telegram';

const Socialpanel = styled.aside`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 340px;
    height: 25px;
    z-index: 3;
    transform: rotate(-90deg) translate(-110%, -550%);
    @media ${props => props.theme.media.bigTablet} {
        display: none;
    }

`

const SocialpanelText = styled.div`
    height: 25px;
    width: 150px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
`

const SocialpanelDivider = styled.div`
    width: 70px;
    height: 0px;
    border: 1px solid #000000;
    background-color: black;
`



function SocialPanel() {
    return (
        <Socialpanel>
            <SocialpanelText>Социальные сети</SocialpanelText>
            <SocialpanelDivider />
            <Vkontakte />
            <Github />
            <Telegram />
        </Socialpanel>
    );
}

export default SocialPanel;
