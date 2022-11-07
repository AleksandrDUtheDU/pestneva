import styled from "styled-components";

import { Title } from "../theme/Title";
import { Section } from "../theme/Container";

import bgPhoto2 from "../../resources/img/main_bg4.jpg"

const HeadBg = styled.div`
  min-height: 90vh;
  position: relative;
  background: url(${bgPhoto2}) no-repeat 50%/cover;
  @media ${props => props.theme.media.bigTablet} {
  }
  @media ${props => props.theme.media.phone} {
    background: url(${bgPhoto2}) no-repeat 65%/cover;
  }
`

const HeadSection = styled(Section)`
  padding: 20px 150px 20px 20px ;
  @media ${props => props.theme.media.bigTablet} {
  }
  @media ${props => props.theme.media.phone} {
    padding: 20px 20px 20px 20px ;
  }
`

const TitleWrapp = styled.div`
  text-align: left;
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

const TitleAverage = styled(Title)`
  margin-top: 300px;
  color: white;
  @media ${props => props.theme.media.phone} {
    font-size: 20px;
    line-height: 36px;
    color: black;
  }
`

function Head() {
  return (
    <HeadBg>
      <HeadSection>
        <TitleWrapp>
          <TitleBig>
            ООО «Финансовая компания «Бухэксперт»
            {/* <Logo /> */}
          </TitleBig>
          <TitleAverage>
            - "Вы занимаетесь бизнесом, <br /> мы занимаемся вашим учетом."
          </TitleAverage>
        </TitleWrapp>
      </HeadSection>
    </HeadBg>
  );
}

export default Head;
