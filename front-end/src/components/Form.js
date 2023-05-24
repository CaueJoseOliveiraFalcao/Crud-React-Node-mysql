import axios, { Axios } from "axios";
import React, { useState , useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from 'react-toastify'

export const Form = ({ onEdit, users , setUsers , setOnEdit }) => {
  const ref = useRef()
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [data_nascimento, setDataNascimento] = useState('');
  useEffect(() => {
    if (onEdit){ 
      const user = ref.current
      user.nome.value = onEdit.nome
      user.email.value = onEdit.email 
      user.fone.value = onEdit.telefone
      user.data_de_nascimento.value = onEdit.data_de_nascimento

    }
  },[onEdit])
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = ref.current;

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.telefone.value ||
      !user.data_nascimento.value 
    ) {
      return toast.warn("Preencha todos os campos!"); 
    }
    if (onEdit){
      await axios
      .put('https://localhost:8000/' + onEdit.id ,{
        nome : user.nome.value,
        email : user.email.value,
        telefone : user.telefone.value,
        data_nascimento :  user.data_nascimento.value
      })
      .then(({ data }) => toast.success(data))
      .catch(({ data }) => toast.warn(data));
    }
    else { 
      await axios
      .post('https://localhost:8000/' , {
        nome : user.nome.value,
        email : user.email.value,
        telefone : user.telefone.value,
        data_nascimento :  user.data_nascimento.value
      })
      .then(({ data }) => toast.success(data))
      .catch(({ data }) => toast.warn(data));
    }
  }

  return (
    <div>
      <FormControler ref={ref} onSubmit={handleSubmit}>
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
