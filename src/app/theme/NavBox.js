import styled from "styled-components";

const BgNavBox = styled.div`
    background: ${props => props.theme.colors.mainGreen};
`

const NavBoxItem = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    min-height: 40px;
    width: 100%;
    padding: 10px 50px;
    color: white;
    text-align: left;
    @media ${props => props.theme.media.phone} {
        padding: 10px 20px;
  }
`;

function NavBox({ children }) {

    return (
        <BgNavBox>
            <NavBoxItem>
                {children}
            </NavBoxItem>
        </BgNavBox>

    )

}

export default NavBox;
