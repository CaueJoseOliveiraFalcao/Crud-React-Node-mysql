import React , {useRef} from "react"
import styled from "styled-components"

const FormControler = styled.form`
     display: flex;
     align-items: center;
     gap: 10px;
     flex-wrap: wrap;
     background-color: #fff;
     padding: 20px;
     box-shadow: 0px 0px 0px 5px #ccc;
`;
const InputArea = styled.div`
     display: flex;
     flex-direction: column;

`;
const Input = styled.input`
   width: 120px;
   padding:  0 10px;
   border : 1px solid #bbb;
   border-radius: 5px;
   height: 40px;
`;
const Label = styled.label`
   font-size: 10px;
`;
const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border : none;
    background-color: #2c73d2;
    color: white;
    height: 42px;

`;
export const Form = ({ onEdit }) => {
    const ref = useRef(); 
    return(
        <div>
        <FormControler ref={ref}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome"/>
            </InputArea>
            <InputArea>
                <Label>E-mail</Label>
                <Input name="email" type="email"/>
            </InputArea>
            <InputArea>
                <Label>Telefone</Label>
                <Input name="fone"/>
            </InputArea>
            <InputArea>
                <Label>Data de Nascimento</Label>
                <Input name="data_de_nascimento" type="date"/>
            </InputArea>
            <Button type="submit">SALVAR</Button>
        </FormControler>
        </div>
    );
};