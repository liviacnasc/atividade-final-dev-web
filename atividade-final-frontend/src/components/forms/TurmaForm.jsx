import { Box, CircularProgress, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLocation, useMatch, useParams } from 'react-router-dom';
import turmasServices from '../../services/Turmas';

const TurmasForm = () => {
    const { turmasLoading, response } = turmasServices();

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

    if(turmasLoading){
        return (
            <Container maxWidth={false}>
                <CircularProgress/>
            </Container>
        )
    }
   
    return(
        <Box onSubmit={onSubmit} component='form'>
            <TextField name='nome' label='Nome' onChange={onChange}/>
            <TextField name='sobrenome' label='Sobrenome' onChange={onChange}/>
            <TextField name='cpf' label='CPF' onChange={onChange}/>
            <TextField name='data_de_nascimento' label='Data de Nascimento' onChange={onChange}/>
            <TextField name='nome_da_mae' label='Nome da Mãe' onChange={onChange}/>
            <TextField name='nome_do_pai' label='Nome do Pai' onChange={onChange}/>
            
            <TextField name='situacao' label='Situação' onChange={onChange}/>
        </Box>
    )
}

export default TurmasForm