import styled from 'styled-components';
import { Outlet } from 'react-router-dom';


import { Section } from "../../app/theme/Container";
import { Title } from "../../app/theme/Title";

const BdCalc = styled.section`
    background: #efe6db;
`

const SectionCalc = styled(Section)`
    align-items: center;
    text-align: center;
`

const TitleCalc = styled(Title)`
    color: black;
`


function TitleWrapp() {

    return (
        <BdCalc>
            <SectionCalc>
                <TitleCalc>Предварительный рассчет</TitleCalc>
                <Outlet />
            </SectionCalc>
        </BdCalc>
    );
}


export default TitleWrapp;
