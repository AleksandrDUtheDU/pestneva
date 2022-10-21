import { Link } from "react-router-dom";
import styled from 'styled-components';

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: inline-block;

    :hover {
        text-decoration: underline;
        color: inherit;

    }
`;
