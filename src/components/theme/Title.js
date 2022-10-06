import styled from "styled-components";

export const Title = styled.div`
    font-weight: 700;
    font-size: 36px;
    line-height: 46px;
    z-index: 5;
    color: ${props => props.theme.colors.mainGreen};
    @media ${props => props.theme.media.bigTablet} {
    font-size: 28px;
    line-height: 36px;
    }
    @media ${props => props.theme.media.smallPhone} {
    font-size: 24px;
    }

`;

export const Description = styled.p`
    margin-top: 10px;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: ${props => props.theme.colors.liteGreen};
    `