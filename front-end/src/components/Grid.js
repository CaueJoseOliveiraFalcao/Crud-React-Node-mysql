import React from "react";
import styled from "styled-components";
import { FaTrash , FaEdit} from 'react-icons/fa'
import { toast } from "react-toastify";
import axios from 'axios'


export const Grid = ({ users , setUsers , setOnEdit }) =>{
    const handleDelete = async (id) =>{
        await axios
        .delete('http://localhost:8000' + id)
        .then(({data}) => {
            const newArray = users.filter((user) => user.id !== id)
            setUsers(newArray)
            toast.success(data)
        })
        .catch(({data}) => {toast.error(data)})
    setOnEdit(null)
    }
    return(
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Email</Th>
                    <Th onlyWeb>Telefone</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
            {users.map((item, index) => {
                return (
                    <Tr key={index}>
                        <Td width="30%" alignCenter='true'>{item.nome}</Td>
                        <Td width="30%" alignCenter='true' >{item.email}</Td>
                        <Td width="20%" alignCenter='true' onlyWeb>{item.fone}</Td>
                        <Td alignCenter width="5%"><FaEdit/></Td>
                        <Td alignCenter width="5%" onClick={(item) => handleDelete(item.id)}><FaTrash /></Td>
                    </Tr>
                );
                })}
            </Tbody>
        </Table>
    );
};
export const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all;
`;

export const Tbody = styled.tbody``;
export const Thead = styled.thead``;
export const Tr = styled.tr``;
export const Td = styled.td`
     padding-top: 15px;
     text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
     width: ${(props) => (props.width ? props.width : 'auto')};

     @media (max-width:500px){
        ${(props) => props.onlyWeb && "display:none"}
    }

`;
export const Th = styled.th`
    text-align: center;
    border-bottom: inset;
    padding-bottom: 5px;

    @media (max-width:500px){
        ${(props) => props.onlyWeb && "display:none"}
    }

`;
export default Grid;