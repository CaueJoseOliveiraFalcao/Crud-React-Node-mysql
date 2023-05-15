import React from "react";
import styled from "styled-components";
import { FaTrash , FaEdit} from 'react-icons/fa'
import { toast } from "react-toastify";
import axios from 'axios'

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
export const Td = styled.tr`
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
export const Grid = ({ users }) =>{
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
                {users.map((item , index) => {
                    <Tr key={index}>
                        <Td width="30%" >{item.nome}</Td>
                        <Td width="30%" >{item.email}</Td>
                        <Td width="20%" onlyWeb>{item.fone}</Td>
                        <Td width="20%" onlyWeb>{item.fone}</Td>
                        <Td alignCenter width="5%"><FaEdit/></Td>
                        <Td alignCenter width="5%"><FaTrash/></Td>
                    </Tr>
                })}
            </Tbody>
        </Table>
    );
};

export default Grid;