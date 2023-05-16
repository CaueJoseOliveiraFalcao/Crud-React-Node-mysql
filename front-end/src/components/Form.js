import React, { useState } from "react";
import styled from "styled-components";

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
  padding: 0 10px;
  border: 1px solid #bbb;
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
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

export const Form = ({ onEdit }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [data_nascimento, setDataNascimento] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "nome") {
      setNome(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "telefone") {
      setTelefone(value);
    } else if (name === "data_de_nascimento") {
      setDataNascimento(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dateString = data_nascimento
    const dateComponents = dateString.split('-')
    const year = dateComponents[0]
    const mounth = dateComponents[1] - 1
    const day = dateComponents[2]
    const data = new Date(year,mounth,day)
    console.log(data)
    setDataNascimento(data)

    const formData = {
      nome: nome,
      email: email,
      telefone: telefone,
      data_nascimento: data_nascimento,
    };
    console.log(formData)

  };

  return (
    <div>
      <FormControler onSubmit={handleSubmit}>
        <InputArea>
          <Label>Nome</Label>
          <Input name="nome" value={nome} onChange={handleChange} />
        </InputArea>
        <InputArea>
          <Label>E-mail</Label>
          <Input name="email" type="email" value={email} onChange={handleChange} />
        </InputArea>
        <InputArea>
          <Label>Telefone</Label>
          <Input name="telefone" value={telefone} onChange={handleChange} />
        </InputArea>
        <InputArea>
          <Label>Data de Nascimento</Label>
          <Input
            name="data_de_nascimento"
            type="date"
            value={data_nascimento}
            onChange={handleChange}
          />
        </InputArea>
        <Button type="submit">SALVAR</Button>
      </FormControler>
    </div>
  );
};
