import styled from "styled-components";

import { Title } from "../app/theme/Title";
import { Section } from "../app/theme/Container";

import bgPhoto from "../resources/img/bd2_opt.jpg"

const BgMain = styled.section`
    background: url(${bgPhoto}) no-repeat 30%/cover;
  @media ${props => props.theme.media.notebook} {
    background: url(${bgPhoto}) no-repeat 50%/cover;
  }
  @media ${props => props.theme.media.phone} {
    background: url(${bgPhoto}) no-repeat 50%/cover;
  }
`

const MainSection = styled(Section)`
  position: relative;
  min-height: 970px;
  max-width: 1440px;
  padding: 60px;
  padding-top: 170px;
  padding-right: 700px;
  text-align: left;
  @media ${props => props.theme.media.phone} {
    padding: 20px 20px 20px 20px ;
  }
`


const TitleBig = styled(Title)`
  font-size: 46px;
  line-height: 52px;
  color: white;
  @media ${props => props.theme.media.tablet} {
    font-size: 34px;
    line-height: 42px;
    max-width: 550px;
  }
  @media ${props => props.theme.media.phone} {
    font-size: 26px;
    line-height: 39px;
    max-width: 100%;
  }
`

function Main() {
  return (
    <BgMain>
      <MainSection>
        {/* <TitleWrapp> */}
        <TitleBig>
          ООО «Финансовая компания «Бухэксперт»
        </TitleBig>
        {/* </TitleWrapp> */}
      </MainSection>
    </BgMain>
  )
}
export default Main;
