import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";


import { useForm } from "react-hook-form";
import { Description } from "../theme/Title";
import { Button } from "../theme/Button";

const FormWrapp = styled.form`
    margin-top: 20px;
    display: grid;
    grid-template: 45px 190px 45px / repeat(2, 280px);
    justify-content: space-between;
    row-gap: 25px;
    column-gap: 25px;
    @media ${props => props.theme.media.phone} {
        grid-template: 45px 45px 190px / 300px;
    }

`

const WrappInput = styled.div`
    position:relative;
`

const Input = styled.input`
    padding: 20px 14px;
    width: 100%;
    height: 100%;
    border: 1px solid #000000;
`
const DescrInput = styled(Description)`
    position: absolute;
    top: -9px;
    left: 12px;
    display: block;
    height: 18px;
    padding: 0 8px;
    background-color: #fff;
    margin: 0;
`

const WrappTextarea = styled.div`
    position:relative;
    grid-column: 1 / 3;
    @media ${props => props.theme.media.phone} {
        grid-column: unset;
    }
`

const Textarea = styled.textarea`
    padding: 20px;
    width: 100%;
    height: 190px;
    border: 1px solid #000000;
    resize: none;
`

const TriggersBox = styled.div`
    grid-column: 1 / 3;
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 35px;
    @media ${props => props.theme.media.phone} {
        grid-column: unset;
        grid-template-columns: 1fr;
        justify-content: center;
    }
`

const FormButton = styled(Button)`
    border: none;



`

const PoliticInput = styled.input`
    margin-right: 20px;
`

const PoliticText = styled(Description)`
    display: flex;
    align-items: center;
`

const PoliticLink = styled.span`
    color: #0645ad;
    &:hover {
        text-decoration: underline;
        color: #0645ad;
    }
`

const ErrorMessage = styled.p`
    color: #bf1650;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    &:before {
    display: inline;
    content: "⚠ ";
  };
`

function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <FormWrapp onSubmit={handleSubmit(onSubmit)}>
            <WrappInput>
                <Input type="name" placeholder="Иван"
                    {...register("name", {
                        required: true,
                        maxLength: 20,
                        // pattern: /^[A-Za-z]+$/i
                    })}
                />
                {errors?.name?.type === "required" && <ErrorMessage>Это поле не заполнено</ErrorMessage>}
                {errors?.name?.type === "maxLength" && <ErrorMessage>Имя не может быть более 20 символов</ErrorMessage>}
                {/* {errors?.name?.type === "pattern" && <ErrorMessage>Имя не может содержать цифры</ErrorMessage>} */}
                <DescrInput as={'label'} for>Ваше имя</DescrInput>
            </WrappInput>
            <WrappInput>
                <Input type="email" placeholder="example@site.com"
                    {...register("email", {
                        required: true,
                        pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
                    })}
                />
                {errors?.mail?.type === "required" && <ErrorMessage>Это поле не заполнено</ErrorMessage>}
                {errors?.mail?.type === "pattern" && <ErrorMessage>Это поле должно содержать E-Mail в формате example@site.com</ErrorMessage>}
                <DescrInput as={'label'}>Ваша почта</DescrInput>
            </WrappInput>
            <WrappTextarea>
                <Textarea type="text" placeholder="Ваше сообщение..."
                    {...register("text", {
                        required: true,
                        maxLength: 200
                    })}

                />
                {errors?.text?.type === "required" && <ErrorMessage>Это поле не заполнено</ErrorMessage>}
                {errors?.text?.type === "maxLength" && <ErrorMessage>Ваше сообщение не может быть более 200 символов</ErrorMessage>}
                <DescrInput as={'label'} for='text'>Ваше сообщение</DescrInput>
            </WrappTextarea>
            <TriggersBox>
                <FormButton as={'button'} >Отправить сообщение</FormButton>
                <PoliticText>
                    <PoliticInput type="checkbox"
                        {...register("checkbox", {
                            required: true,
                            checked: true,
                            maxLength: 200
                        })}
                    />
                    <div>
                        <label>Я согласен(а) с <PoliticLink><Link to="/privacy">политикой конфиденциальности</Link></PoliticLink></label>
                        {errors?.checkbox?.type === "required" && <ErrorMessage>Нужно принять политику конфиденциальности</ErrorMessage>}
                    </div>
                </PoliticText>

            </TriggersBox>
        </FormWrapp>
    );
}

export default Form;
