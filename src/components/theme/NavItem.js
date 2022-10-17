import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
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

    const dispatch = useDispatch();

    return (
        <StyledLink onClick={() => dispatch(action(props))} to={link}> {name} </StyledLink >
    );
};

export default NavItem;