import styled from "styled-components";

export const Button = styled.button`
    color: #FFFFFF;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;    
    padding: 11px 15px;
    height: 45px;
    background: ${props => props.color || props.theme.colors.mainGreen};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    border: none;
    /* align-items: center; */
    &:hover {
        background: ${props => props.theme.colors.liteGreen};
        box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.288);
    }

`;