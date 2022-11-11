import styled from "styled-components";

export const Title = styled.div`
    font-weight: 700;
    font-size: 36px;
    line-height: 46px;
    z-index: 5;
    color: ${props => props.theme.colors.mainGreen};
    @media ${props => props.theme.media.notebook} {
        font-size: 30px;
        line-height: 34px;
    }

    @media ${props => props.theme.media.bigTablet} {
    font-size: 30px;
    line-height: 36px;
    }
    @media ${props => props.theme.media.smallPhone} {
    font-size: 24px;
    }

`;

export const Description = styled.p`
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    color: black;
    /* color: ${props => props.theme.colors.liteGreen}; */
    `