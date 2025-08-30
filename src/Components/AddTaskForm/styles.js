import styled from "styled-components";

const FormContainer = styled.article`
    display: flex;
    margin-bottom: 25px;
    padding: 25px;
    box-sizing: border-box;
`;

const Input = styled.input`
    flex-grow: 1;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #999;
    border-radius: 5px;
    width: 500px;
`;

const Button =  styled.button`
    padding: 10px;
    box-sizing: border-box;
    background-color: darkblue;
    color: #fff;
    border: none;
    border-radius: 7px;
    cursor: pointer;
`;

export { FormContainer, Input, Button }