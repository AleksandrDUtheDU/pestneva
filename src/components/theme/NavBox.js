import styled from "styled-components";

export const NavBox = styled.div`
    min-height: 40px;
    width: 100%;
    background-color: ${props => props.theme.colors.mainGreen};
    padding: 10px 50px;
    color: white;
    text-align: left;
    @media ${props => props.theme.media.phone} {
        padding: 10px 20px;

        /* height: 90px; */
  }

    /* @media ${props => props.theme.media.bigTablet} {
    font-size: 28px;
    line-height: 36px;
    }
    @media ${props => props.theme.media.smallPhone} {
    font-size: 24px;
    } */

`;
