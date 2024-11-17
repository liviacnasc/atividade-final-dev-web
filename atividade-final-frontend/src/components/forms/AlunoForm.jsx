import { Box, CircularProgress, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLocation, useMatch, useParams } from 'react-router-dom';
import alunosServices from '../../services/Alunos';

const AlunoForm = () => {
    const { id } = useParams();
    const path = useMatch('/dashboard/alunos/edit/:id')

    const { alunoData, alunosLoading } = alunosServices();

    const [formData, setFormData] = useState(null);

    const onChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }

    if(alunosLoading){
        return (
            <Container maxWidth={false}>
                <CircularProgress/>
            </Container>
        )
    }

    if(path){
        return(
            <Box onSubmit={onSubmit} component='form'>
                <TextField name='nome' label='Nome' onChange={onChange} defaultValue={alunoData.nome}/>
                <TextField name='sobrenome' label='Sobrenome' onChange={onChange} defaultValue={alunoData.sobrenome}/>
                <TextField name='cpf' label='CPF' onChange={onChange} defaultValue={alunoData.cpf}/>
                <TextField name='data_de_nascimento' label='Data de Nascimento' onChange={onChange} defaultValue={alunoData.data_de_nascimento}/>
                <TextField name='nome_da_mae' label='Nome da Mãe' onChange={onChange} defaultValue={alunoData.nome_da_mae}/>
                <TextField name='nome_do_pai' label='Nome do Pai' onChange={onChange} defaultValue={alunoData.nome_do_pai}/>
                
                <TextField name='situacao' label='Situação' onChange={onChange} defaultValue={alunoData.situacao}/>
            </Box>
        )
    }

    return (
        <span>{location.pathname}</span>
    )
}

export default AlunoForm