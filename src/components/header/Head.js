import styled from "styled-components";

import { Title } from "../theme/Title";
import { Section } from "../theme/Container";

import bgPhoto2 from "../../resources/img/main_bg4.jpg"


const HeadBg = styled.div`
  min-height: 100vh;
  position: relative;
  background: url(${bgPhoto2}) no-repeat 50%/cover;
  padding-top: 205px;
  @media ${props => props.theme.media.phone} {
    background: url(${bgPhoto2}) no-repeat 58%/cover;
  }
`

const HeadSection = styled(Section)`
  padding: 100px;
  padding-top: 140px;
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
  @media ${props => props.theme.media.smallPhone} {
    font-size: 26px;
    line-height: 39px;
  }
`


const TitleAverage = styled(Title)`
  margin-top: 40px;
  color: white;
`

function Head() {
  return (
    <HeadBg>
      <HeadSection>
        <TitleWrapp>
          <TitleBig>
            Татьяна Пестерева
          </TitleBig>
          <TitleAverage>
            - "Вы занимаетесь бизнесом, <br /> я занимаюсь вашим учетом."
          </TitleAverage>
        </TitleWrapp>
      </HeadSection>
    </HeadBg>
  );
}

export default Head;
