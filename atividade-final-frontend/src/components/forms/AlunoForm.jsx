import { Box, Button, CircularProgress, Container, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLocation, useMatch, useNavigate, useParams } from 'react-router-dom';
import alunosServices from '../../services/Alunos';

const AlunoForm = () => {
    const { alunosLoading, addAluno } = alunosServices();
    const navigate = useNavigate();

    const [formData, setFormData] = useState(null);

    const onChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        addAluno(formData);
        navigate('/dashboard/alunos')

    }

    if(alunosLoading){
        return (
            <Container maxWidth={false}>
                <CircularProgress/>
            </Container>
        )
    }
   
    return(
        <Box onSubmit={onSubmit} component='form' sx={{display: 'flex', flexFlow:'column', gap: '10px', p: 3}}>
            <Toolbar>
                <Typography variant='h4'>
                    Novo aluno
                </Typography>
            </Toolbar>
            <TextField required name='nome' label='Nome' onChange={onChange}/>
            <TextField required name='sobrenome' label='Sobrenome' onChange={onChange}/>
            <TextField required name='cpf' label='CPF' onChange={onChange}/>

            <Button variant='text' type='submit'>Adicionar aluno</Button>
        </Box>
    )
}

export default AlunoForm