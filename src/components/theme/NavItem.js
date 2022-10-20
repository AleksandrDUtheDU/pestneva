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


const NavItem = (props) => {

    const { name, link, action } = props;


    return (
        <StyledLink onClick={action} to={link}> {name} </StyledLink >
    );
};

export default NavItem;