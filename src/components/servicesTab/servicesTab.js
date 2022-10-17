import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


import { firstName, secondName } from '../action/action';
import { Section } from "../theme/Container";
import { ImgSrc } from '../theme/SkillsImg';
import { services } from '../content/content';
import { NavBox } from '../theme/NavBox';
import NavItem from '../theme/NavItem';



const ServicesTabWrapp = styled.div`
    /* background-color: #d8d9d4; */
    padding: 30px;
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(auto-fit, 400px);
    justify-content: space-around;
    gap: 50px;
`

const ServicesTabItem = styled.div`
    position: relative;
    transition: all 0.5s;
    border-radius: 5px;
    color: white;
    :hover{
        /* box-shadow: 2px 2px 2px #757575; */
        opacity: 0.8;
        color: white;

    }

`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: inline-block;
    width: 100%;
    height: 100%;
    :hover {
        text-decoration: none;
        color: inherit;
    }
`;


const ServicesTabImg = styled(ImgSrc)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    filter: brightness(60%);
`

const ServicesTabTitle = styled.h2`
    position: absolute;
    text-align: center;
    font-size: 22px;
    line-height: 50px;
    bottom: 0px;
    display: block;
    width: 100%;
    height: 50px;
    text-transform: uppercase;
    border-radius: 5px;
    /* background-color: ${props => props.theme.colors.liteGreen}; */
    background-color: none;
`

const items = (dispatch) => services.map(item => {
    const { id, name, img, link } = item;

    return (
        <ServicesTabItem key={id}>
            <StyledLink onClick={() => dispatch(secondName(item))} to={`/services/${link}`} >
                <ServicesTabImg img={img} alt={name} />
                <ServicesTabTitle>{name}</ServicesTabTitle>
            </StyledLink>
        </ServicesTabItem>
    )
});

function ServicesTab() {

    const dispatch = useDispatch();
    const { name, link } = useSelector(state => state.firstName);

    return (
        <Section as="section">
            <NavBox><NavItem name={name} link={link} action={firstName} /> / </NavBox>
            <ServicesTabWrapp>
                {items(dispatch)}
            </ServicesTabWrapp>
        </Section>
    );
}

export default ServicesTab;